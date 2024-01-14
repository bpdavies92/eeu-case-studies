<template>
          <v-sheet elevation="5" color="#fce300" rounded class="pa-3">
         
            <div v-html="examples.featuredVideo"></div>

          <h3 class="text-h3 mt-1 mb-3">{{examples.type}}</h3>
          
          <v-expansion-panels class="mb-3" theme="dark" bg-color="#303030" color="#303030">
            <v-expansion-panel bg-color="#303030">
              <v-expansion-panel-title>
                Description
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="text-body-1">{{examples.description}}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-btn block @click="router.push({name: 'LearningType', params: {id: `${examples.type.toLowerCase()}`}})">Learn more</v-btn>
          
        </v-sheet>  
</template>

<script setup>
    import projects from '@/composables/projects';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const {examples} = defineProps(['examples'])
</script>
