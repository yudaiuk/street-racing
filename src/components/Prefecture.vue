<template>
  <div class="wrapper">
    <div class="title">都道府県から峠を探す</div>

    <ul class="list">
      <li class="item" v-for="(item, index) in data" :key="index">
        {{ item }}
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
    };
  },
  mounted: function () {
    this.readData();
  },
  methods: {
    async readData() {
      const q = query(collection(db, "prefecture"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.data.push(doc.data().name);
        console.log(process.env.VUE_APP_API_KEY)
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
