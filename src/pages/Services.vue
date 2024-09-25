<template>
  <div class="sub_page">
    <HeroArea></HeroArea>
    <Service></Service>
  </div>
  </template>
<script>
import Service from '@/components/Service.vue'
import HeroArea from '@/components/HeroArea.vue';
export default {
    components: {
      HeroArea,
      Service
    }
  }
</script>