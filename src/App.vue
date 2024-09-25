<!-- src/App.vue -->
<template>
  <router-view></router-view>
  <Info></Info>
  <Footer></Footer>
</template>
<script>
import Info from '@/components/Info.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
      Info,
      Footer
    }
}
</script>