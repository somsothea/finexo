<template>
    <!-- about section -->

 <section class="about_section layout_padding">
   <div class="container  ">
     <div class="heading_container heading_center">
       <h2>
         Register Form
       </h2>
       <!--<p>
         Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
       </p>-->
     </div>
     <div class="row">
       <div class="col-md-6 ">
         <div class="img-box">
           <img src="assets/images/about-img.png" alt="">
         </div>
       </div>
       <div class="col-md-6">
         <div class="detail-box">
            <main class="form-signin w-100 m-auto">
                <form class="row g-3" @submit="handleSubmit">
                  <div class="col-md-6">
                    <label for="validationServer01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationServer01" required>
                  </div>
                  <div class="col-md-6">
                    <label for="validationServer02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationServer02" required>
                  </div>

                  <div class="col-md-12">
                    <label for="floatingInput">Email address</label>
                    <ErrorMessage name="email" class="alert alert-danger" role="alert"/>
                    <Field  type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    </div>

                    <div class="col-md-12">
                    <label for="floatingPassword">Password</label>
                    <ErrorMessage name="password" class="alert alert-danger" role="alert"/>
                    <Field  type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    </div>

                  <div class="col-md-12">
                    <label for="validationServer03" class="form-label">Address</label>
                    <input type="text" class="form-control" id="validationServer03" required>
                  </div>
                  <div class="col-md-12">
                    <label for="formFileLsm" class="form-label">Photo</label>
                    <input class="form-control form-control-sm" id="formFileLg" type="file" @change="handleFile" ref="fileUpload">
                  </div>

                  <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
                      <label class="form-check-label" for="invalidCheck3">
                        Agree to terms and conditions
                      </label>
                      <div id="invalidCheck3Feedback" class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                      <button class="btn btn-primary" type="submit">Register</button>
                  </div>
                </form>
            </main>
         </div>
       </div>
     </div>
   </div>
 </section>

 <!-- end about section -->
</template>

<script>
import axios from "axios";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default{
  components: { Form, Field, ErrorMessage },
  data(){
    return{
      email:"",
      password:"",
      error: false,
      success: false,
      emailRule: Yup.string().email().required(),
      passwordRule: Yup.string().min(6).required(),
      selectedFile: null,
      validExtensions: ['jpg', 'jpeg', 'png', 'gif'],
      maxSize: 2 * 1024 * 1024 // 2 MB
    };
    //local storage
  
  },
  methods: {
    handleSubmit()
    {
      try{
          this.onFileChange();
          this.uploadFile();
        }
        catch (err){
          console.log("Register Error");
        }
        console.log(this.email);
        console.log(this.password); 
    },

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
      axios.post('http://172.23.128.93:3000/register', formData, {
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
  },
};
</script>
