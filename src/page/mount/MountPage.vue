<template>
  <div class="wrapper">
    <div class="title">峠詳細</div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";

const route = useRoute();
const prefectureId = ref(0);

const updateDataFromUrlQuery = (query) => {
  prefectureId.value = query.prefecture_id ?? "";
};

const docRef = doc(db, "mount", "JMTBKmDm5KNyg14lvg0t");
const docSnap = await getDoc(docRef);
console.log(docSnap.id);

updateDataFromUrlQuery(route.query);
</script>

<style scoped>
.title {
  font-weight: bold;
  color: black;
  text-align: left;
  font-size: 20px;
}
</style>