<template>
  <div class="base-spinner fa-5x" v-if="baseSpinnerStatus">
    <i class="fas fa-circle-notch fa-spin"></i>
    <!-- @fortawesome é a fonte para gerar o ícone e ficar girando -->
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(
      'BaseSpinner', [
        'setToggleStatus'
      ]
    )
  },
  computed: {
    ...mapGetters(
      'BaseSpinner', {
        baseSpinnerStatus: 'getStatus'
      }
    )
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index';

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
