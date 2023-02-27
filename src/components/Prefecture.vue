<template>
  <div class="wrapper">
    <div class="title">都道府県から峠を探す</div>

    <ul class="list">
      <li class="item" v-for="(item, index) in region" :key="index">
        {{ item.name }}
        <ul>
          <li v-for="(item2, index) in prefectures[index]" :key="index">
            <router-link :to="`/${item2.id}`">
            {{ item2.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/config";

export default {
  name: "HeadMessage",
  data() {
    return {
      data: [],
      region: [],
      prefectures: [],
    };
  },
  mounted: function () {
    this.readData();
    this.prefectureSearch();
  },
  methods: {
    async readData() {
      const region = query(collection(db, "region"));

      const querySnapshot = await getDocs(region);
      querySnapshot.forEach((doc) => {
        this.region.push(doc.data());
        this.prefectures[doc.data().id] = [];
      });

      this.region.sort(function(a, b) {
        if(a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      })
    },
    async prefectureSearch() {
      const prefecture = query(collection(db, "prefecture"));
      const prefectureShot = await getDocs(prefecture);
      prefectureShot.forEach((docs) => {
        this.prefectures[docs.data().region_id - 1].push(docs.data());
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-weight: bold;
  color: black;
  text-align: left;
  font-size: 20px;
}
</style>
