<template>
  <div class="group-buttons">
    <button class="group-buttons__btn group-buttons__toggle" :class="{ 'group-buttons__toggle--active': isActive }"
      @click="isActive = !isActive">
      <font-awesome-icon :icon="buttonIcons"></font-awesome-icon>
    </button>
    <transition-group name="element-move">
      <a v-for="btn in localButtons" :key="btn.text" class="group-buttons__btn group-buttons__sub-btn" v-if="isActive"
        :style="{ '--btn-x': btn.x, '--btn-y': btn.y, 'color': btn.color }" :href="btn.link" :id="btn.id"
        :target="btn.link == '#' ? '' : '_blank'">
        <font-awesome-icon :icon="btn.icon"></font-awesome-icon>
      </a>
    </transition-group>
  </div>
</template>

<script>

export default {
  props: {
    buttons: Array,
    revert: Boolean
  },
  mounted() {

  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    buttonIcons() {
      return this.isActive ? ['fa-solid', 'down-left-and-up-right-to-center'] : ['fa-solid', 'up-right-and-down-left-from-center'];
    },
    localButtons() {
      if (this.$props.revert) {
        return this.$props.buttons.slice(0).map(function (elem) {
          let copyElem = Object.assign({}, elem);
          if (copyElem.x[0] == '-') {
            copyElem.x = copyElem.x.substring(1, copyElem.x.length);
          } else if (copyElem.x[0] != '-') {
            copyElem.x = '-' + copyElem.x.substring(0, copyElem.x.length);
          }
          return copyElem;
        });
      } else {
        return this.$props.buttons;
      }
    }
  }
}
</script>

<style lang="scss">
.group-buttons {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    box-shadow: $shadow;
    border: none;
    border-radius: 50%;
    transition: box-shadow 0.3s ease-out, background-color $themeTime ease-in;
    cursor: pointer;
    z-index: 10;
    color: $backBlue;
    font-size: rem(18);

    @media (any-hover: hover) {
      &:hover {
        box-shadow: 0 0 15px rgba($blue, 0.3);
      }
    }

    &__img {
      height: 30px;
      width: 30px;
    }
  }

  &__toggle {
    height: 50px;
    width: 50px;
    z-index: 20;
    position: relative;
    transition: box-shadow 0.3s ease-out, transform 0.3s ease-in;

    &--active {
      transform: rotate(180deg);
    }
  }

  &__sub-btn {
    position: absolute;
    transform: translate(var(--btn-x), var(--btn-y));
  }

}
</style>