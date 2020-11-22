<template>
  <v-list-item>
    <v-list-item-content class="pa-0">
      <v-fade-transition hide-on-leave group>
        <v-text-field
          v-if="editing"
          v-model.number="report.amount"
          :loading="loading"
          @keypress.enter="saveReport"
          @keydown.esc="cancelReport"
          hide-details="auto"
          class="mx-2 mt-7"
          type="number"
          counter="11"
          step="0.01"
          key="input"
          autofocus
          outlined
          dense
        />

        <v-list-item-title
          v-text="report.amount"
          v-else
          key="title"
        />
      </v-fade-transition>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn @click="saveOrEdit" text>{{ saveOrEditText }}</v-btn>
    </v-list-item-action>
    <v-list-item-action>
      <v-btn @click="removeReport" color="error" text>Remove</v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import axios from "axios"
import { isNull, pick } from "lodash"
import { Snackbar } from "@/utils/Snackbar";

export default {
  name: "VReportItem",
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  computed: {
    saveOrEditText() {
      return this.editing ? 'Save' : 'Edit'
    }
  },
  data() {
    const report = {...this.item}

    return {
      loading: false,
      editing: false,
      report
    }
  },
  methods: {
    saveOrEdit() {
      this.editing ? this.saveReport() : this.editReport()
    },
    saveReport() {
      this.loading = 'primary'

      axios.patch(`/reports/${this.item.id}`, pick(this.report, 'amount'))
        .then(res => {
          const { report, message } = res.data

          this.$emit('update-report', report)
          this.editing = false
          Snackbar.success(message)
        })
        .catch(err => Snackbar.error(err.response.data.message))
        .finally(() => this.loading = false)
    },
    editReport() {
      this.editing = true
    },
    removeReport() {
      this.$emit('remove-report', this.report)
    },
    cancelReport() {
      this.report = {...this.item}
      this.editing = false
    }
  },
  created() {
    this.editing = isNull(this.item.amount)
  }
}
</script>

<style scoped>

</style>
