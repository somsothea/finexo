<template>
<div class="col-lg-3 col-sm-6">
    <div class="box ">
      <div class="img-box">
        <img :src="Image" class="img1" alt="">
      </div>
      <div class="detail-box">
        <h5>
          <router-link :to="`/team/${link}`">{{ Name }}</router-link>
        </h5>
        <p>
        {{Position}}
        </p>
      </div>
      <div class="social_box">
        <a :href="facebook">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a :href="twitter">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a :href="linkedin">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a :href="instagram">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a :href="youtube">
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
        props: ["link", "Image", "Name", "Position", "facebook", "twitter", "linkedin", "instagram", "youtube"],
    };
</script>