<template>
  <div class="sub_page">
    <HeroArea></HeroArea>
    <Login></Login>
  </div>
  </template>
  
  <script>
  import Login from '@/components/Login.vue';
  import HeroArea from '@/components/HeroArea.vue';
  export default {
    components: {
      HeroArea,
      Login,
        
    }
  }
  </script>