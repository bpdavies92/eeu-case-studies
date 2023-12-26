<template>

  <div v-for="(c, i) in sortByTitle" :key="i">
    {{ c.name }}
  </div>
  <Nav />
  <Hero />

  <!-- {{ sortByTitle }}   -->
  
  
  <!-- <div class="ml-12 mr-12">
    <Swiper
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
    <swiper-slide class="" v-for="i in 20" :key="i">
      <Card  />
    </swiper-slide>
  </Swiper>
</div> -->


  <div class="ml-12 mr-12">

    <h2 class="text-h2 mb-6">What we do</h2>

    <v-row>
      <v-col cols="12" sm="12" md="4" v-for="(n, i) in caseStudies" :key="i">
        <ELearningType :examples="n" />
      </v-col>
    </v-row>
  </div>  



  <Footer/>
  
</template>

<script setup>
  import { computed, ref } from "vue"
  import Hero from "../components/Hero"
  import Nav from "../components/Nav"
  import Card from "../components/Card"
  import ELearningType from "../components/ELearningType"
  import Footer from "../components/Footer"
  import projects from "@/composables/projects"

  const { caseStudies } = projects()

  // console.log(caseStudies.value)

  const sortByTitle = computed(() => {
    return caseStudies.value.sort((a, b) => {
      const titleA = a.type.toUpperCase();
      const titleB = b.type.toUpperCase();

      if(titleA < titleB) {
        return -1
      } else if (titleA > titleB) {
        return 1 
      } else {
        return 0
      }
    })
  })

</script>
