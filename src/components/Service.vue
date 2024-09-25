<template>
    <!-- service section -->
  <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
        </div>
        <div class="row">       
          <ServiceCard v-for="(item, index) in services"
            :key="index"
            :title="item.title"
            :description="item.description"
            :image="item.image"></ServiceCard>
        </div>
        <div class="btn-box">
          <a href="">
            View All
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- end service section -->
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue'

export default {
  components: {ServiceCard},
  data() {
    return {
        services: [
        {
          title: "Currency Wallet",
          description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
          image: "assets/images/s1.png",
          link: "currency-wallet",
        },
        {
          title: "Security Storage",
          description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
          image: "assets/images/s2.png",
          link: "security-storage",
        },
        {
          title: "Expert Support",
          description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using ",
          image: "assets/images/s3.png",
          link: "expert-support",
        },
      ],
    };
  },
};
</script>