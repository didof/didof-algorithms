<template>
  <div
    class="
      tag
      is-size-1
      has-text-centered
      is-uppercase
      has-text-weight-bold
      is-family-monospace
    "
    @click="handleClick"
  >
    <span v-if="!digitable"> + </span>
    <span v-else>_</span>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'plus-box',
  emits: ['push-letter'],
  data() {
    return {
      digitable: false,
    }
  },
  methods: {
    handleClick() {
      this.digitable = true
      document.addEventListener('keyup', this.handleKeyUp)
    },
    handleKeyUp({ key }) {
      document.removeEventListener('keyup', this.handleKeyUp)
      this.$emit('push-letter', key)
      this.digitable = false
    },
  },
})
</script>

<style scoped>
div {
  cursor: pointer;
}
</style>
