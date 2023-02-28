<template>
  <div class="wrapper">
    <div class="title">都道府県から峠を探す</div>

    <ul class="list">
      <li class="item" v-for="(item, index) in region" :key="index">
        <span class="item-bold">{{ item.name }}</span>
        <ul class="prefecture-list">
          <li v-for="(item2, index) in prefecture[index]" :key="index" class="prefecture-item">
            <router-link :to="`/search?prefecture_id=${item2.id}`">
              {{ item2.name }}の峠
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { ref, reactive } from "vue";

const region = ref([]);
const prefecture = reactive([[], [], [], [], [], [], []]);

const readRegion = async () => {
  const regionData = query(collection(db, "region"));
  const regionSnap = await getDocs(regionData);

  regionSnap.forEach((doc) => {
    region.value.push(doc.data());
    readPrefecture(doc.data().id);
  });

  region.value.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
};

const readPrefecture = async (id) => {
  const prefectureData = query(
    collection(db, "prefecture"),
    where("region_id", "==", id)
  );
  const prefectureSnap = await getDocs(prefectureData);

  prefectureSnap.forEach((doc) => {
    prefecture[id - 1].push(doc.data());
  });

  prefecture[id - 1].sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
};

readRegion();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  font-weight: bold;
  color: black;
  text-align: left;
  font-size: 16px;
  margin-bottom: 15px;
}

.wrapper {
  padding: 30px 20px 10px;
}

.list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.prefecture {
  &-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &-item {
    margin: 0 10px 5px 0;

    & a {
      color: black;
      text-align: center;
    }
  }
}

.item-bold {
  font-weight: bold;
  color: black;
}

.item {
  margin-bottom: 20px;
}
</style>
