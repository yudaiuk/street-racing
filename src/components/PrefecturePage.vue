<template>
  <div class="wrapper">
    {{ $route.params.prefecture }}
  </div>
</template>

<!-- <script>
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
      });
    },
  },
};
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-weight: bold;
  color: black;
  text-align: left;
  font-size: 20px;
}
</style>
