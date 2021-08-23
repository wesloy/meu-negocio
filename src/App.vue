<template>
  <div id="app">
    <base-spinner v-if="baseSpinnerAlternar"/>
    <router-view/>
    <button @click="baseSpinnerAlternar">Alternar Spinner</button>
  </div>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'
import { mapActions } from 'vuex'

export default {
  components: {
    BaseSpinner
  },
  methods: {
    ...mapActions(
      'BaseSpinner', [
        'setToggleStatus'
      ]
    ),
    baseSpinnerAlternar () {
      this.setToggleStatus()
    }
  }
}
</script>

<style lang="scss">
</style>
