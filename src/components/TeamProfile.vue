<template>
<!-- team section -->
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Team <span> Profile</span>
        </h2>
      </div>

      <div class="team_container">
        <div class="row"></div>
            <h2>{{ id }}</h2>
        </div>
      </div>
  </section>
<!-- end team section -->
</template>
<script>
import { useRoute } from 'vue-router'
export default {
    data(){
        const {id} = useRoute().params;
        return{
            id
        }

    }
}
</script>