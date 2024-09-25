<template>
    <div class="sub_page">
      <HeroArea></HeroArea>
      <Team></Team>
    </div>
    </template>
    <script>
    import HeroArea from '@/components/HeroArea.vue';
    import Team from '@/components/Team.vue'
      export default {
          components: {
            HeroArea,
            Team
          }
        }
      </script>