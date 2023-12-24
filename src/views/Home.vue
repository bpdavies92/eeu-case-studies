<template>

  <div v-for="n in caseStudies" :key="n">
    {{ n.name }}
  </div>
  <Nav />
  <Hero />
  
  
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


  <div class="ml-12 mr-12 mt-12">

    <h2 class="text-h2 mb-6 mt-12">What we do</h2>

    <v-row>
      <v-col cols="12" sm="12" md="4" v-for="(n, i) in caseStudies" :key="i">
        <ELearningType :examples="n" />
      </v-col>
    </v-row>
  </div>  



  <Footer/>
  
</template>

<script setup>
  import { ref } from "vue"
  import Hero from "../components/Hero"
  import Nav from "../components/Nav"
  import Card from "../components/Card"
  import ELearningType from "../components/ELearningType"
  import Footer from "../components/Footer"
  import projects from "@/composables/projects"
 

  const { caseStudies } = projects()

  

</script>
