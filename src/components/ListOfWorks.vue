<template>
  <loader-spinner v-if="isLoad" />
  <transition-group name="light-speed">
    <div class="works" v-if="!isLoad">
      <work-preview v-for="work in works" :key="work.slug" :work-params="work" @click="clickPreviewListener" />
    </div>
  </transition-group>
  <custom-popup :is-show-popup="isShowPopup" @click="isShowPopup = !isShowPopup">
    <div class="work">
      <div class="work__container">
        <div class="work__head">
          <img :src="'img/' + workParams.img" :alt="workParams.title" class="work__img">
          <h2 class="work__title">{{ workParams.title }}</h2>
        </div>
        <div class="work__content">
          <p class="work__text">{{ workParams.descr }}</p>
          <div class="work__links" v-if="workParams.links.length != 0">
            <a :href="link.href" class="work__link" :target="link.href == '#' ? '' : '_blank'"
              v-for="link in workParams.links" :key="link.href">
              <font-awesome-icon :icon="link.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </custom-popup>
</template>
<script>
import LoaderSpinner from "./LoaderSpinner.vue";
import WorkPreview from "./WorkPreview.vue";
import CustomPopup from "@/components/CustomPopup.vue";
import { getJsonData } from "@/utils/utils";

export default {
  mounted() {
    this.getWorks();
  },
  data() {
    return {
      works: [],
      isLoad: true,
      isShowPopup: false,
      workParams: {},
    };
  },
  components: {
    WorkPreview,
    LoaderSpinner,
    CustomPopup
  },
  methods: {
    async getWorks() {
      setTimeout(async () => {
        this.works = await getJsonData('db/works.json', this.$router);
        this.isLoad = false;
      }, 300);
    },
    clickPreviewListener(workParams) {
      this.isShowPopup = !this.isShowPopup
      this.workParams = workParams;
    }
  },
};
</script>
<style lang="scss">
.works {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin: 20px 0;
  position: relative;

  @media (max-width: (map.get($breakpoints, "lg") - 0.02)) {
    justify-content: center;
  }
}

.work {
  &__container {
    padding: 15px;
  }

  &__head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__img {
    width: auto;
    height: 320px;
    border: 2px solid $backGrey;
    border-radius: 10px;
    box-shadow: $shadow;
    margin-bottom: 15px;

    @media (max-width: (map.get($breakpoints, 'md') - 0.02)) {
      height: auto;
    }
  }

  &__title {
    font-weight: 700;
    font-size: rem(24);
    padding-bottom: 15px;
    position: relative;
    width: 100%;
    text-align: center;

    &::before {
      content: "";
      height: 2px;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  &__content {
    font-size: rem(18);
    font-weight: 600;
  }

  &__text {
    margin: 15px 0;
    max-width: 520px;
  }

  &__links {
    display: flex;
    justify-content: flex-start
  }

  &__link {
    font-size: rem(20);
    transition: color 0.3s ease-in;

    @media (any-hover:hover) {
      &:hover {
        color: $base-font-color;
      }
    }

    &:not(&:last-child) {
      margin-right: 15px;
    }
  }
}
</style>