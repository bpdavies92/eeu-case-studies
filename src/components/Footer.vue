<template>
    <v-footer class="bg-grey-lighten-1 mt-12 pt-12 pb-12">
      <v-row justify="center" no-gutters>
        <v-btn
          color="#303030"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          Link
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Add title and links</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>