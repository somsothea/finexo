<template>
  <div class="sub_page">
  <HeroArea></HeroArea>
  <WhyUs></WhyUs></div>
</template>
<script>
import HeroArea from '@/components/HeroArea.vue';
import WhyUs from '@/components/WhyUs.vue'
  export default {
      components: {
        HeroArea,
        WhyUs
      }
    }
  </script>