<template>
  <loader-spinner v-if="isLoad" />
  <div class="work-info" v-if="isLoad === false">
    <img :src="'img/' + infoOfWork.img" alt="Work" class="work-info__img" />
    <div class="work-info__content">
      <h4 class="work-info__title">{{ infoOfWork.title }}</h4>

      <ul class="work-info__list work-info-list">
        <li class="work-info-list__item" v-for="feature in infoOfWork.featureList" :key="feature">
          {{ feature }}
        </li>
      </ul>

      <!-- <div class="work-info__links">
        <a :href="infoOfWork.links.code" class="work-link" target="_blank"
          ><font-awesome-icon class="work-link__icon" icon="fa-solid fa-code"
        /></a>
        <a :href="infoOfWork.links.live" class="work-link" target="_blank"
          ><font-awesome-icon
            class="work-link__icon"
            icon="fa-solid fa-display"
        /></a>
      </div> -->
    </div>
  </div>
</template>
<script>
import LoaderSpinner from "./LoaderSpinner.vue";
import { stringToCapitilize } from "@/utils/utils";

export default {
  components: { LoaderSpinner },
  mounted() {
    this.getWorkData();
  },
  data() {
    return {
      dbWork: [],
      storeWork: [],
      isLoad: true,
      infoOfWork: {},
    };
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
  },

  methods: {
    /* Отримуємо знімок колекціїї з роботами works на основі slug (вибраної роботи) та 
    повертаємо відповідну інформацію */
    async getWorkData() {
    },
  },
};
</script>
<style lang="scss">
.work-info {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 14px 28px rgba(134, 151, 168, 0.2);
  transition: background-color $themeTime ease-in;
  padding: 30px;
  // animation: display-opacity 1.5s forwards ease-in-out,
  //   bottom-side 1.5s forwards ease-in-out;

  @media (max-width: 991.98px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 575.98px) {
    padding: 10px;
  }

  &__img {
    border: 1px solid #ddd;
    border-radius: 10px;
    height: 270px;
  }

  &__content {
    margin-left: 25px;

    @media (max-width: 991.98px) {
      margin: 20px 0 0;
    }

    @media (max-width: (map.get($breakpoints, "md") - 0.02)) {
      margin: 10px 0 0;
    }
  }

  &__title {
    font-weight: 400;
    font-size: rem(36);
    transition: color $themeTime ease-in;

    @media (max-width: 991.98px) {
      text-align: center;
    }

    @media (max-width: (map.get($breakpoints, "sm") - 0.02)) {
      font-size: rem(32);
    }
  }

  &__list {
    margin: 20px 0;

    @media (max-width: 575.98px) {
      margin: 10px 0;
    }
  }

  &__links {
    display: flex;

    @media (max-width: (map.get($breakpoints, "lg") - 0.02)) {
      justify-content: center;
    }
  }
}

.work-info-list {
  &__item {
    position: relative;
    font-weight: 300;
    font-size: rem(19);
    padding-left: 20px;
    transition: color $themeTime ease-in;

    &:not(&:last-child) {
      margin-bottom: 10px;
    }

    @media (max-width: (map.get($breakpoints, "sm") - 0.02)) {
      font-size: rem(17);
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: em(5);
      width: em(5);
      transition: background $themeTime ease-in;
    }
  }
}
</style>