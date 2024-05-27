<template >
  <div class="work-preview">
    <div class="work-preview__front preview-front">
      <div class="preview-front__content" @click="clickImageListener">
        <img :src="'img/' + workParams.img" alt="" class="preview-front__img" />
        <font-awesome-icon icon="fa-solid fa-hand-pointer" class="preview-front__content-icon" />
      </div>
      <div class="preview-front__head">
        <h4 class="preview-front__title">{{ workParams.title }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["workParams"],
  emits: ['click'],
  data() {
    return {

    };
  },
  methods: {
    clickImageListener() {
      this.$emit('click', Object.assign({}, this.$props.workParams));
    }
  },
};
</script>
<style lang="scss">
.work-preview {
  max-width: 360px;
}

.preview-front {
  width: 100%;
  height: 100%;
  border-radius: $workRadiusBorder;

  &__content {
    position: relative;
    border-radius: $workRadiusBorder;
    background-color: $backGrey;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 25px 20px -21px rgba($backBlue, 0.2);
  }

  &__content-icon {
    position: absolute;
    bottom: 5px;
    left: 5px;
    font-size: 18px;
    color: $blue;
    animation-name: bottom-up-pulsar;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
  }

  &__img {
    margin: 0 auto;
    border-radius: $workRadiusBorder;
    transition: transform 0.3s ease-out;
    height: 160px;
    width: 100%;

    @media (any-hover:hover) {
      &:hover {
        transform: scale(1.1);
      }
    }

    @media (max-width: (map.get($breakpoints, "md") - 0.02)) {
      width: 100%;
    }
  }

  &__head {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    padding: 0 15px;
  }

  &__title {
    font-weight: 500;
    font-size: rem(24);
    line-height: 1em;
    text-align: center;
    transition: color $themeTime ease-in;
  }

  &__tech-list {
    margin-top: 10px;
  }
}

.tech-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  &__item {
    &:not(&:last-child) {
      margin-right: 10px;
    }
  }

  &__item-img {
    height: 24px;
  }
}

.preview-back {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(#000, 0.7);
  border-radius: $workRadiusBorder;
  z-index: 100;
  cursor: pointer;
}
</style>