<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: { }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.home {
  top:0;
  bottom:0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-content: center;
  justify-content: center;
  background: $darker;
  color: $featured;
}
</style>
