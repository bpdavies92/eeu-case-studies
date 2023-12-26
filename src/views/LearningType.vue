<template>
    <Nav/>
  <v-row class="ma-6 mt-n3">

    <!--  -->
    <!-- TITLE AND IMAGE -->
    <!--  -->

    <v-col cols="12" sm="12" md="6">
        <v-sheet rounded class="overflow-hidden">
            <v-img
            height="500"
            class="d-flex align-center"
            src="@/assets/images/Hero/hero-banner.png"
            cover
            >
                <h2 class="text-h2 ml-3">{{ filteredType.type }}</h2>
            </v-img>

        </v-sheet>
    </v-col>

    <v-col cols="12" sm="12" md="6">
        <v-sheet rounded class="overflow-hidden">
           <div class="text-body-1">
                <v-img
                cover
                height="500"
                src="https://plus.unsplash.com/premium_photo-1684769160411-ab16f414d1bc?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></v-img>
           </div> 
        </v-sheet>
    </v-col>
  </v-row>

  <v-row class="ma-6">
        <v-col cols="12" md="12" sm="12">
            <div class="d-flex justify-center">
                <v-tabs grow class="overflow-hidden rounded-pill" bg-color="#f6f6f6">
                    <v-tab color="#303030" class="overflow-hidden rounded-pill no-underline" >Description</v-tab>
                    <v-tab  class="overflow-hidden rounded-pill">TWO</v-tab>
                    <v-tab  class="overflow-hidden rounded-pill">THREE</v-tab>
                </v-tabs>
            </div>
        </v-col>
    </v-row>

    <v-row class="ma-6">
        <v-col cols="12" sm="12" md="6">
        dfd
        </v-col>
        <v-col cols="12" sm="12" md="6">
            dfdf
        </v-col>
    </v-row>



</template>

<script setup>

import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import projects from '@/composables/projects';
import Nav from '@/components/Nav.vue'

    const { caseStudies:projectType } = projects()

    const route = useRoute()

    const filteredType = computed(() => {
        const one = projectType.value.filter(c => route.params.id === c.type.toLowerCase())
        return one[0]
    })

    console.log(projectType.value)

</script>

