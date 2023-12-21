<template>
  <Nav />
  <Hero />
  <div class="ml-12 mr-12">
    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="" v-for="i in 20" :key="i">
        <Card />
      </swiper-slide>
    </Swiper>
  </div>

  <div class="ml-12 mr-12 mt-12">

    <h2 class="text-h2 mb-6">What we do</h2>

    <v-row>
      <v-col cols="12" sm="12" md="4" v-for="(n,i) in 10" :key="i">
        <ELearningType/>
      </v-col>
    </v-row>
  </div>  


  <Footer/>
  
</template>

<script setup>
  import Hero from "../components/Hero"
  import Nav from "../components/Nav"
  import Card from "../components/Card"
  import ELearningType from "../components/ELearningType"
  import Footer from "../components/Footer"

  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';



</script>
