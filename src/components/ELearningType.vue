<template>
          <v-sheet elevation="5" color="#fce300" rounded class="pa-3">
         
            <div v-html="examples.featuredVideo"></div>

          <h3 class="text-h3 mt-1 mb-3">{{examples.type}}</h3>
          
          <v-expansion-panels class="mb-3" theme="dark" bg-color="#303030" color="#303030">
            <v-expansion-panel bg-color="#303030">
              <v-expansion-panel-title>
                Details
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="text-body-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ea maxime beatae quibusdam? Beatae similique incidunt corporis maiores, quo cupiditate nam quidem itaque tenetur optio. Nam illo facilis praesentium consectetur.</p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-btn block class="">See more</v-btn>
          

        </v-sheet>  
</template>

<script setup>
    const {examples} = defineProps(['examples'])
</script>
