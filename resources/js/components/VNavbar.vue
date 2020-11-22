<template>
  <v-app-bar color="primary" dark app>
    <v-toolbar-title class="mx-2">Noble</v-toolbar-title>

    <v-toolbar-items>
      <v-btn to="/reports" text>Reports</v-btn>
      <v-btn to="/game" text>Game</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "VNavbar"
}
</script>
