<template>
  <div class="base-spinner fa-5x">
    <i class="fas fa-circle-notch fa-spin"></i>
    <!-- @fortawesome é a fonte para gerar o ícone e ficar girando -->
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.base-spinner {
  z-index: 1000000;
  top:0;
  bottom:0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $light-medium;
  color: $featured;
}
</style>
