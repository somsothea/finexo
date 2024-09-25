<template>
  <div class="sub_page">
    <HeroArea></HeroArea>
    <About></About>
  </div>
  </template>
  
  <script>
  import About from '@/components/About.vue';
  import HeroArea from '@/components/HeroArea.vue';
  export default {
    components: {
      HeroArea,
      About,
        
    }
  }
  </script>