<template>
  <div class="sub_page">
    <HeroArea></HeroArea>
    <Register></Register>
  </div>
  </template>
  
  <script>
  import Register from '@/components/Register.vue';
  import HeroArea from '@/components/HeroArea.vue';
  export default {
    components: {
      HeroArea,
      Register,
        
    }
  }
  </script>