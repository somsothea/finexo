<template>
    <!-- team section -->
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Courses</span>
        </h2>
      </div>

      <div class="team_container">
        <div class="row">
          <CourseCard v-for="(item, index) in courses"
            :key="index"
            :title="item.title"
            :description="item.shortDescription"
            :image="item.image"     
            :link="item.titleURL">  
          </CourseCard>
        </div>
      </div>
    </div>
  </section>
  <!-- end team section -->
</template>
<script>
import CourseCard from '@/components/CourseCard.vue';
import axios from "axios";

export default {
    components: {CourseCard},
    data() {
        return{courses:[],
        };
    },
    async created(){
        //call api
        const url = "/v1/courses";
        //promise and async
        const response = await axios.get(url);
        const courses = response.data;
        console.log(courses);
        this.courses = courses;
    },
};
</script>