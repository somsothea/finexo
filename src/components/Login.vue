<template>
    <!-- about section -->

 <section class="about_section layout_padding">
   <div class="container  ">
     <div class="heading_container heading_center">
       <!--<h2>
         Login Form
       </h2>
       <p>
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
                <form @submit.prevent="handleSubmit">
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                    <div v-if="error" class="alert alert-success" role="alert">Error Login!</div>
                    <div v-if="success" class="alert alert-danger" role="alert">Login Succeed!</div>
                                        
                    <div class="form-floating">
                    <Field  type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    <ErrorMessage name="email" class="alert alert-danger" role="alert"/>
                    </div>
                    <div class="form-floating">
                    <Field  type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                    <ErrorMessage name="password" class="alert alert-danger" role="alert"/>
                    </div>

                    <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                    
                    </div>
                    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
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
    };
    //local storage
  
  },
  methods: {

    resetInput(){
      this.email = "";
      this.password = "";
    },

    async handleSubmit()
    {
      try{
          // Code with potentail error
          const response = await axios.post("v1/auth/login", {email: this.email, password: this.password,});
          // Local Storage
          this.resetInput();
          this.error = false;
          this.success = true;
          console.log(response.data);
        }
        catch (err){
          this.resetInput();
          this.error = true;
          this.success = false;
          console.log("Error Login");
        }
        console.log(this.email);
        console.log(this.password); 
    }
  },
};
</script>
