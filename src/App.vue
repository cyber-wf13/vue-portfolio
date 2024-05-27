<template>
  <transition name="light-speed" appear>
    <section class="bio">
      <div class="container">
        <div class="bio__wrapper">
          <div class="bio__head bio-head">
            <div class="bio-head__hero">
              <img src="@/assets/img/logo.png" alt="Avatar" class="bio-head__img" />
              <div class="bio-head__headers">
                <h2 class="bio-head__title title">Зонь Олег</h2>
                <h4 class="bio-head__subtitle subtitle">
                  Front-end developer
                </h4>
                <h4 class="bio-head__nickname subtitle">cyber-wf13</h4>
              </div>
              <toggle-theme class="bio__toggle-theme" />
            </div>

            <div class="bio-head__contacts">
              <group-buttons :buttons="contactsItems" @click="togglePopup({ selector: '#code', event: $event })"
                :revert="isMobile" />
            </div>
          </div>
          <custom-popup :is-show-popup="isShowPopup" @click="togglePopup">
            <div class="skills__wrapper" v-for="skillBlock in skillsItems" :key="skillBlock.listName">
              <h4 class="skills__title subtitle">{{ skillBlock.listName }}</h4>
              <ul class="skills-list">
                <li class="skills-list__item" v-for="skill in skillBlock.skillsList" :key="skill.name"
                  :style="{ '--pulsar-color': skill.color }">
                  <img :src="'img/' + skill.image" alt="Icon" class="skills-list__item-img" />
                  <span class="skills-list__item-text text">{{
                    skill.name
                  }}</span>
                </li>
              </ul>
            </div>
          </custom-popup>
        </div>
      </div>
    </section>
  </transition>

  <section class="portfolio">
    <div class="container">
      <div class="portfolio__wrapper">
        <transition name="fade" appear>
          <h2 class="portfolio__title title">Портфоліо</h2>
        </transition>
        <div class="portfolio__work-items">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WorkPreview from "@/components/WorkPreview.vue";
import WorkInfo from "@/components/WorkInfo.vue";
import ToggleTheme from "@/components/ToggleTheme.vue";
import CustomPopup from "@/components/CustomPopup.vue";
import SkillsList from "@/components/SkillsList.vue";
import GroupButtons from "./components/GroupButtons.vue";


import { getJsonData } from "./utils/utils";

export default {
  async mounted() {
    this.contactsItems = await getJsonData('db/contacts.json', this.$router);
    this.skillsItems = await getJsonData('db/skills.json', this.$router);
    document.title = "Portfolio - Front-end Developer";
  },
  data() {
    return {
      isShowPopup: false,
      skillsItems: [],
      contactsItems: [],
    };
  },
  computed: {
    isMobile() {
      const windowWidth = window.innerWidth;
      return windowWidth <= 768 ? true : false;
    },
  },
  components: {
    ToggleTheme,
    WorkInfo,
    WorkPreview,
    SkillsList,
    GroupButtons,
    CustomPopup
  },
  methods: {
    togglePopup({ selector, event }) {
      let buttonElem = event.target.closest(selector)
      if (buttonElem) {
        this.isShowPopup = !this.isShowPopup;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style";

.title {
  font-weight: 700;
  font-size: 24px;
  line-height: 1em;
  transition: color $themeTime ease-in;
}

.subtitle {
  font-weight: 600;
  font-size: 18px;
  line-height: 1em;
  transition: color $themeTime ease-in;
}

.bio {
  width: 100%;
  transition: background-color $themeTime ease-in;

  &__wrapper {
    padding: 20px 0;
  }

  &__toggle-theme {
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: (map.get($breakpoints, "md") - 0.02)) {
      top: auto;
    }
  }

  &__skills {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 0;
  }
}

.bio-head {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-right: 35px;

  @media (max-width: 767.98px) {
    flex-direction: column;
    padding-right: 0;
  }

  &__hero {
    display: flex;
    align-items: center;

    @media (max-width: 767.98px) {
      margin: 0 0 10px;
    }
  }

  &__contacts {
    @media (max-width: (map.get($breakpoints, 'md') - 0.02)) {
      display: flex;
      padding: 0 20px;
    }
  }

  &__img {
    height: 80px;
    width: 80px;
    padding: 2.5px;
    object-fit: cover;
    border: 2px solid $blue;
    border-radius: 50%;
    background-color: $green;
  }

  &__headers {
    margin-left: 10px;
  }

  &__nickname {
    font-style: italic;
    font-weight: 400;
    font-size: rem(16);
  }
}

.portfolio {
  width: 100%;
  padding: 20px 0 0;

  &__title {
    text-align: center;
  }

  &__work {
    margin: 20px 0;
  }

  &__work-items {
    position: relative;
    min-height: 50px;
    //   display: flex;
    //   flex-wrap: wrap;
    //   justify-content: space-around;
    //   gap: 20px;
    //   margin: 20px 0;
    //   position: relative;

    //   @media (max-width: (map.get($breakpoints, "lg") - 0.02)) {
    //     justify-content: center;
    //   }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
