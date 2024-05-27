<template>
  <div class="skills">
    <button class="skills__btn" @click="isShowPopup = !isShowPopup">
      Навички
      <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" class="skills__btn-icon"
        :class="{ 'skills__btn-icon--rotate': isShowPopup }" />
    </button>
    <transition name="light-speed">
      <custom-popup v-if="isShowPopup">
        <div class="skills__wrapper" v-for="skillBlock in skillsItems" :key="skillBlock.listName">
          <h4 class="skills__title subtitle">{{ skillsHeadlines[skillBlock.listName] }}</h4>
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
    </transition>
  </div>
</template>

<script>
import CustomPopup from "@/components/CustomPopup.vue";

import { getJsonData } from '../utils/utils';

export default {
  async mounted() {
    this.skillsItems = await getJsonData('db/skills.json');
  },
  data() {
    return {
      isShowPopup: false,
      skillsItems: [],
      skillsHeadlines: {
        "web": "Веб-технології",
        "cybersec": "Інформаційна безпека",
        "admin": "Системне адміністрування",
      }
    }
  },
  components: {
    CustomPopup
  },
  methods: {
  }
}
</script>

<style lang="scss">
.skills {
  &__btn {
    border: none;
    background: none;
    font-family: $base-font;
    font-size: $base-font-size;
    font-weight: 700;
    color: $blue;
    cursor: pointer;
    margin-bottom: 10px;

    &:focus {
      outline: none;
    }
  }

  &__btn-icon {
    transition: transform 0.3s ease-in;
  }

  &__btn-icon--rotate {
    transform: rotate(180deg);
  }

  &__title {
    text-align: center;
    padding: 5px 5px 10px;
  }
}

.skills-list {
  display: flex;
  flex-wrap: wrap;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 15px;
    padding: 10px;
    text-align: center;
    margin: 10px;
    animation: pulsar 2s forwards infinite;
    transition: box-shadow 0.3s ease-out, background-color $themeTime ease-in;
  }

  &__item-img {
    width: 35px;
    height: 35px;
    margin: 0 auto 2px;
    object-fit: contain;
  }

  &__item-text {
    font-size: 12px;
    color: var(--pulsar-color);
  }
}
</style>