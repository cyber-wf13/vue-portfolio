<template>
  <div class="error">
    <div class="error__content">
      <font-awesome-icon class="error__icon" icon="fa-solid fa-circle-exclamation" flip />
      <p class="error__text">
        Вибачте, відбулася внутрішня помилка при завантаженні даних.
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.error {
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
  }

  &__icon {
    font-size: rem(80);

    @media (max-width: (map.get($breakpoints, "md") - 0.02)) {
      font-size: rem(60);
    }
  }

  &__text {
    font-weight: 600;
    font-size: rem(28);
    text-align: center;
    margin: 10px;

    @media (max-width: (map.get($breakpoints, "md") - 0.02)) {
      font-size: rem(22);
    }
  }

}
</style>