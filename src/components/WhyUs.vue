<template>
    <!-- why section -->

  <section class="why_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Why Choose <span>Us</span>
        </h2>
      </div>
      <div class="why_container">
          <WhyUsCard v-for="(item, index) in whyuscards"
            :key="index"
            :title="item.title"
            :description="item.description"
            :image="item.image"></WhyUsCard>
      </div>
      <div class="btn-box">
        <a href="#">
          Read More
        </a>
      </div>
    </div>
  </section>

  <!-- end why section -->
</template>

<script>
import WhyUsCard from '@/components/WhyUsCard.vue'

export default {
  components: {WhyUsCard},
  data() {
    return {
        whyuscards: [
        {
          title: "Expert Management ",
          description: "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus ",
          image: "assets/images/w1.png",
          link: "#",
        },
        {
          title: "Secure Investment",
          description: "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus ",
          image: "assets/images/w2.png",
          link: "#",
        },
        {
          title: "Instant Trading",
          description: "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus ",
          image: "assets/images/w3.png",
          link: "#",
        },
        {
          title: "Happy Customers",
          description: "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus ",
          image: "assets/images/w4.png",
          link: "#",
        },
      ],
    };
  },
};
</script>