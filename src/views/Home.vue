<template>
  <Nav />
  <Hero />
  <Swiper
    :slides-per-view="2"
    :space-between="60"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <Card/>
    </swiper-slide>
    <swiper-slide><Card/></swiper-slide>
    <swiper-slide><Card/></swiper-slide>
  </Swiper>
</template>

<script setup>
  import Hero from "../components/Hero"
  import Nav from "../components/Nav"
  import Card from "../components/Card"

  import {Swiper, SwiperSlide } from "swiper/vue"
  import "swiper/css"

</script>
