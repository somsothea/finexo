<template>
    <div class="col-lg-4 col-sm-6">
        <div class="box ">
          <div class="img-box">
            <img src="https://picsum.photos/800"  width = "200" class="img1" alt="">
          </div>
          <div class="detail-box">
            <h5>
              <router-link :to="`/course/${storebanner}`">{{ storename }}</router-link>
            </h5>
            <p>
            {{storeaddress}}
            </p>
            <p>
            {{category}}
            </p>
          </div>
        </div>
      </div>
    </template>
    <script>
        export default{
            props: ["id", "storename", "storeaddress", "storebanner", "category"],
        };
    </script>