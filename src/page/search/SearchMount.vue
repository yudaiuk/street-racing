<template>
  <div class="wrapper">
    <div class="title">探す</div>

    <select name="pref">
      <option value="Tokyo">東京</option>
      <option value="Osaka">大阪</option>
      <option value="Fukuoka">福岡</option>
    </select>

    <ul>
      <li v-for="(item, index) in mountData" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ref, reactive } from "vue";

const route = useRoute();
const prefectureId = ref(0);
const mountData = reactive([]);

const updateDataFromUrlQuery = (query) => {
  prefectureId.value = query.prefecture_id ?? "";
};

const setMount = async (id) => {
  const mount = query(
    collection(db, "mount"),
    where("prefecture_id", "==", Number(id))
  );
  const queryMount = await getDocs(mount);

  queryMount.forEach((doc) => {
    mountData.push(doc.data());
  });
};

updateDataFromUrlQuery(route.query);
setMount(prefectureId.value);
</script>

<style scoped>
.title {
  font-weight: bold;
  color: black;
  text-align: left;
  font-size: 20px;
}
</style>
