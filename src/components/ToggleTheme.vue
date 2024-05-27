<template>
  <label class="toggle-theme">
    <input class="toggle-theme__checkbox _visually-hidden" type="checkbox" v-model="isLightTheme" />
    <span class="toggle-theme__icon">
      <transition mode="out-in" name="bounce">
        <font-awesome-icon icon="fa-solid fa-sun" v-if="isLightTheme" />
        <font-awesome-icon icon="fa-solid fa-moon" v-else />
      </transition>
    </span>
  </label>
</template>
<script>
export default {
  mounted() {
    this.toggleClassTheme();

  },
  data() {
    return {
      isLightTheme: window.matchMedia('(prefers-color-scheme: light)').matches,

    };
  },
  methods: {
    toggleClassTheme() {
      const body = document.body;
      if (this.isLightTheme) {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
      } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
      }
    }
  },
  watch: {
    isLightTheme() {
      this.toggleClassTheme();
    },
  },
};
</script>
<style lang="scss">
.toggle-theme {
  cursor: pointer;
  transition: transform 0.3s ease-in;

  @media (any-hover: hover) {
    &:hover {
      transform: rotate(180deg);
    }
  }

  &__icon {
    font-size: rem(20);
    color: $backBlue;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>