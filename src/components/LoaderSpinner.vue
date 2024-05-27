<template >
  <div class="loader">
    <font-awesome-icon icon="fa-solid fa-spinner" spin-pulse />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: rem(30);
  color: $blue;
}
</style>