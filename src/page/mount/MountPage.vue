<template>
  <div class="wrapper">
    <h1 class="title">{{ mountain.name }}</h1>
    <p class="little-title">{{ mountain.address }}</p>

    <div class="main-contents">
      <ul class="main-contents-list">
        <li class="main-contents-item">
          <h3 class="main-contents-item-title">峠補足情報</h3>

          <p class="main-contents-item-text" v-html="mountain.text"></p>
        </li>
      </ul>
    </div>

    <div class="information">
      <h2 class="information-title">基本情報</h2>
      <div id="map">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          style="border: 0"
          :src="mountain.mapUrl"
          allowfullscreen=""
        >
        </iframe>
      </div>

      <a
        :href="mountain.gmapAddress"
        target="_blank"
        class="information-map-link"
      >
        googlemapでみる
      </a>
    </div>

    <div class="share">
      <a :href="twitterUrl" class="twitter-share" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          class="twitter-icon"
        >
          <path
            fill="#03A9F4"
            d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
          ></path>
        </svg>

        <p class="share-text">ツイート</p>
      </a>

      <a :href="facebookUrl" class="facebook-share" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          class="facebook-icon"
        >
          <linearGradient
            id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
            x1="9.993"
            x2="40.615"
            y1="9.993"
            y2="40.615"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2aa4f4"></stop>
            <stop offset="1" stop-color="#007ad9"></stop>
          </linearGradient>
          <path
            fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
            d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
          ></path>
          <path
            fill="#fff"
            d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
          ></path>
        </svg>

        <p class="share-text">シェア</p>
      </a>

      <a :href="lineUrl" class="line-share" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          class="line-icon"
        >
          <path
            fill="#00c300"
            d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"
          ></path>
          <path
            fill="#fff"
            d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"
          ></path>
        </svg>

        <p class="share-text">送る</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";

const route = useRoute();
const mountain = ref({});
const twitterUrl = ref("");
const facebookUrl = ref("");
const lineUrl = ref("");

const readData = async () => {
  const docRef = doc(db, "mount", route.params.mountId);
  const docSnap = await getDoc(docRef);
  mountain.value = docSnap.data();

  twitterUrl.value = `https://twitter.com/intent/tweet?text=${
    mountain.value.name
  }の情報%20%23峠イキタイ&url=${location.origin + route.path}`;

  facebookUrl.value = `https://www.facebook.com/share.php?u=${
    location.origin + route.path
  }`;

  lineUrl.value = `https://social-plugins.line.me/lineit/share?url=${
    location.origin + route.path
  }`;
};

readData();
</script>

<style scoped lang="scss">
.title {
  font-weight: bold;
  color: black;
  text-align: left;
  font-size: 24px;
  margin: 10px 0 5px;
}

.little-title {
  font-size: 12px;
  color: #888;
  font-weight: bold;
  margin: 0;
}

#map {
  height: 250px;
}

.wrapper {
  padding: 20px;
}

.main-contents {
  &-item {
    &-title {
      font-size: 15px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      color: black;

      &:before {
        content: "";
        width: 13px;
        height: 13px;
        border-radius: 2px;
        background: #e00000;
        display: block;
        margin: 0 15px 0 0;
      }
    }

    &-text {
      font-size: 14px;
      margin-top: 0;
    }
  }

  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}

.information {
  &-title {
    margin-bottom: 20px;
    font-size: 20px;
    color: black;
  }

  &-map-link {
    color: white;
    font-weight: bold;
    padding: 15px;
    display: block;
    text-align: center;
    background: #e00000;
    text-decoration: none;
    font-size: 14px;
    margin-top: 10px;
    border-radius: 5px;
  }
}

.twitter,
.facebook,
.line {
  &-share {
    width: calc(33.333% - 5px);
    display: flex;
    padding: 10px;
    font-size: 13px;
    border: 1px solid #9a9a9a;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-sizing: border-box;
  }

  &-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
}

.share-text {
  margin: 0;
  color: #333;
  font-weight: bold;
  padding-left: 5px;
}

.share {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
