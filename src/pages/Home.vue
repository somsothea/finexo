<template>
    <HeroSlide></HeroSlide>
    <Service></Service>
    <About></About>
    <WhyUs></WhyUs>
    <Team></Team>
    <Client></Client>
  </template>
  
  <script>
  import HeroSlide from '@/components/HeroSlide.vue'
  import Service from '@/components/Service.vue'
  import About from '@/components/About.vue'
  import WhyUs from '@/components/WhyUs.vue'
  import Team from '@/components/Team.vue'
  import Client from '@/components/Client.vue'


  export default {
    components: {
      HeroSlide,
      Service,
      About,
      WhyUs,
      Team,
      Client
    }
  }
  </script>
  