<template>
    <div class="sub_page">
      <HeroArea></HeroArea>
      <Course></Course>
    </div>
    </template>
  <script>
  import Course from '@/components/Course.vue'
  import HeroArea from '@/components/HeroArea.vue';
  export default {
      components: {
        HeroArea,
        Course
      }
    }
  </script>