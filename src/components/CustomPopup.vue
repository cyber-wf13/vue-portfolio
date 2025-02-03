<template>
  <teleport to='body'>
    <transition name="fade">
      <div class="popup-wrapper" v-if="isShowPopup" @click.self="closePopup('.popup-wrapper', $event)">
        <transition name="fade">
          <div class="popup" v-if="isShowPopup">
            <div class="popup__wrapper">
              <button class="popup__btn" @click="closePopup('.popup__btn', $event)">
                <font-awesome-icon icon="fa-solid fa-circle-xmark"></font-awesome-icon>
              </button>
              <div class="popup__content">
                <slot></slot>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    isShowPopup: Boolean
  },
  emits: ['click'],
  methods: {
    closePopup(selector, event) {
      this.$emit('click', { 'selector': selector, 'event': event });
    }
  },
  watch: {
    isShowPopup(isShow) {
      if (isShow) {
        document.body.style = "overflow-y: hidden;"
      } else {
        document.body.style = ""
      }
    }
  }
}
</script>

<style lang="scss">
.popup-wrapper {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba($backBlue, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  z-index: 9999;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba($blue, 0.2);
  transition: background-color $themeTime ease-in;
  margin: 10px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    height: 100%;
  }

  &__content {
    overflow-y: auto;
  }

  &__btn {
    border: none;
    background: none;
    font-size: rem(22);
    align-self: flex-end;
    transition: color 0.3s ease;
    cursor: pointer;
  }
}
</style>