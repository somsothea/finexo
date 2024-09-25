<template>
    <div class="sub_page">
        <HeroArea></HeroArea>
        <div class="container ">
            <div class="container-fluid">
            <div class="heading_container heading_center">
                <h2>
                    Test Repository
                </h2>
                <div>
                    <p>Count: {{ count }}</p>
                    <button @click="increment">Increment</button>
                    <button @click="decrement">Decrement</button>
                </div>
            </div>

            <div class="heading_container heading_center">
                <h2>
                    Test Repository Connect with GitHub API
                </h2>
                <div>
                    <button @click="getAllRepositories">Get repo</button>
                </div>
            </div>
            <div class="row">       
                <p></p>
            </div>

            <div class="heading_container heading_center">
                    <h2 class="">
                    Our <span> Courses</span>
                    </h2>
                </div>
                <div class="team_container">
                    <div class="row">
                    <CourseCard v-for="(course, index) in courses"
                        :key="index"
                        :title="course.title"
                        :description="course.shortDescription"
                        :price="course.price"></CourseCard>
                    </div>
                
                <div>
                    <button @click="getAllCourses">Refresh</button>
                </div>
            </div>
        </div>
            <div class="row">       
                <p></p>
            </div>
            <!-- File Upload-->  
            <div class="heading_container heading_center">
                <h2>
                    Test File Upolad
                </h2>
                <div class="container">
                    <input type="file" @change="onFileChange" />
                    <button @click="uploadFile">Upload</button>
                    
                </div>
            </div>
            <div class="row">       
                <p></p>
            </div>
            <!-- Close File Upload-->  
        </div>
        
    </div>
  </template>
  
  <script>
  import HeroArea from '@/components/HeroArea.vue';
  import { useCounterStore } from '@/store/repos.js';
  import useRepositoryStore from "@/store/reposAPI.js";
  import useCourse from "@/store/courseAPI.js";
  import { mapState, mapActions } from 'pinia';
  import CourseCard from '@/components/CourseCard.vue';
  import axios from 'axios';

  export default {
    async created() {
    await this.getAllRepositories();
    await this.getAllCourses();
    console.log("Get courses");
    console.log(this.courses);
  },
  data() {
    return {
      selectedFile: null,
      validExtensions: ['jpg', 'jpeg', 'png', 'gif'],
      maxSize: 2 * 1024 * 1024 // 2 MB
    };
  },
    components: {
    HeroArea,
    CourseCard
    },
    computed:{
      ...mapState(useCounterStore, ['count']),
      ...mapState(useRepositoryStore, "repositories"),
      ...mapState(useCourse, ["courses", "usernames", "repos"]),
    },
    methods:{
      ...mapActions(useCounterStore, ['increment','decrement']),
      ...mapActions(useRepositoryStore, ["getAllRepositories"]),
      ...mapActions(useCourse, ["getAllCourses"]),

      onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (!this.validExtensions.includes(fileExtension)) {
          alert("Invalid file type. Only jpg, jpeg, png, and gif files are allowed.");
          this.selectedFile = null;
          return;
        }
        if (file.size > this.maxSize) {
          alert("File size exceeds the 2 MB limit.");
          this.selectedFile = null;
          return;
        }
        this.selectedFile = file;
      }
    },
    uploadFile() {
      if (!this.selectedFile) {
        alert("Please select a valid file first!");
        return;
      }

      // Create a FormData instance
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Make an API request to upload the file using Axios
      axios.post('http://172.23.128.93:3000/upload-single', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('File uploaded successfully:', response.data);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
    }
 
    }
  };
  </script>