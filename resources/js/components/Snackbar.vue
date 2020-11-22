<template>
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.color"
    bottom
    right
  >
    {{ snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="close">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { Snackbar } from "@/utils/Snackbar";

export default {
  name: "Snackbar",
  computed: {
    snackbar() {
      return this.$store.state.snackbar
    }
  },
  methods: {
    close() {
      Snackbar.close()
    }
  }
}
</script>

<style scoped>

</style>
