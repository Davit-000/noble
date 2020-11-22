<template>
  <v-card :loading="loading" class="mx-auto" width="800">
    <v-toolbar extended>
      <v-toolbar-title>Reports</v-toolbar-title>

      <v-spacer/>

      <v-btn @click="toggleSorting" icon>
        <v-icon v-if="!sort">mdi-sort</v-icon>
        <v-icon v-if="sort==='asc'">mdi-sort-ascending</v-icon>
        <v-icon v-if="sort==='desc'">mdi-sort-descending</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-btn @click="addReport" color="pink" fab dark absolute bottom left>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-toolbar>

    <v-card-text>
      <v-list dense>
        <v-slide-y-transition class="py-0" group>
          <v-report-item
            v-for="report in reportItems"
            @update-report="updateReport"
            @remove-report="removeReport"
            :key="`report-${report.id}`"
            :item="report"
          />
        </v-slide-y-transition>
      </v-list>
    </v-card-text>

    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title class="headline grey">Are you sure to delete?</v-card-title>

        <v-divider/>

        <v-card-actions>
          <v-spacer/>

          <v-btn text @click="cancelDelete">No</v-btn>
          <v-btn color="error" text @click="deleteReport">Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import axios from "axios";
import { Snackbar } from "@/utils/Snackbar";
import VReportItem from "@/components/VReportItem";

export default {
  name: "Reports",
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  components: {
    VReportItem
  },
  computed: {
    reportItems() {
      switch (this.sort) {
        case 'asc':
          return this.reports.sort((a, b) => a.amount - b.amount)
        case 'desc':
          return this.reports.sort((a, b) => b.amount - a.amount)
        default:
          return this.reports.sort((a, b) => a.id - b.id)
      }
    },
    hasUnsavedReport() {
      return this.reports.some(report => !report.amount)
    }
  },
  data() {
    const reports = this.items.map(report => ({...report}));

    return {
      deletable: null,
      loading: false,
      dialog: false,
      sort: null,
      reports,
    }
  },
  methods: {
    toggleSorting() {
      if (this.sort === null) {
        this.sort = 'asc'
      } else if (this.sort === 'asc') {
        this.sort = 'desc'
      } else {
        this.sort = null
      }
    },
    addReport() {
      if (this.hasUnsavedReport) {
        Snackbar.error('There is unsaved report.')

        return
      }

      this.loading = 'primary'

      axios.post('/reports', {amount: null})
        .then(res => this.reports.push(res.data.report))
        .catch(err => Snackbar.error(err.response.data.message))
        .finally(() => this.loading = false)
    },
    updateReport(report) {
      const i = this.reports.findIndex(r => r.id === report.id)

      this.reports.splice(i, 1, {...report})
    },
    removeReport(report) {
      this.deletable = {...report}
      this.dialog = true
    },
    deleteReport() {
      this.loading = 'primary'

      axios.delete(`/reports/${this.deletable.id}`)
        .then(res => Snackbar.success(res.data.message))
        .then(() => {
          const i = this.reports.findIndex(r => r.id === this.deletable.id)
          this.reports.splice(i, 1)
          this.cancelDelete()
        })
        .catch(err => Snackbar.error(err.response.data.message))
        .finally(() => this.loading = false)
    },
    cancelDelete() {
      this.deletable = null
      this.dialog = false
    }
  }
}
</script>
