<template>
    <!-- team section -->
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Team</span>
        </h2>
      </div>

      <div class="team_container">
        <div class="row">
          <TeamCard v-for="(item, index) in teams"
            :key="index"
            :Name="item.Name"
            :Position="item.Position"
            :Image="item.Image"     
            :link="item.link">  
          </TeamCard>
        </div>
      </div>
    </div>
  </section>
  <!-- end team section -->
</template>
<script>
import TeamCard from '@/components/TeamCard.vue'

export default {
  components: {TeamCard},
  data() {
    return {
        teams: [
        {
          Name: "Joseph Brown",
          Position: "Marketing Head ",
          Image: "assets/images/team-1.jpg",
          link: "joseph-brown",
        },
        {
          Name: "Nancy White",
          Position: "Marketing Head ",
          Image: "assets/images/team-2.jpg",
          link: "nancy-white",
        },
        {
          Name: "Earl Martinez",
          Position: "Marketing Head ",
          Image: "assets/images/team-3.jpg",
          link: "#",
        },
        {
          Name: "Josephine Allard",
          Position: "Marketing Head",
          Image: "assets/images/team-4.jpg",
          link: "#",
        },
      ],
    };
  },
};
</script>