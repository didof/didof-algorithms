<template>
  <li
    class="
      tag
      is-size-3
      has-text-centered
      is-uppercase
      has-text-weight-bold
      is-family-monospace
    "
    @click="handleClick"
    @click.right="handleRightClick"
  >
    <span
      class="is-size-5 has-text-centered is-uppercase has-text-weight-medium"
      >{{ index }}</span
    >
    <b v-if="!digitable">{{ letter }}</b>
    <i v-else>_</i>
  </li>
</template>

<script>
import Vue from 'vue'
import { isNumberOrAlphabet } from '~/utils/isInRanges'

export default Vue.extend({
  name: 'letter-cell',
  emits: ['right-click', 'replace-letter'],
  props: {
    letter: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      digitable: false,
    }
  },
  methods: {
    handleClick() {
      if (this.digitable) {
        this.digitable = false
        document.removeEventListener('keyup', this.handleKeyUp)
      } else {
        this.digitable = true
        document.addEventListener('keyup', this.handleKeyUp)
      }
    },
    handleRightClick(event) {
      event.preventDefault()
      this.$emit('right-click', this.index)
    },
    handleKeyUp({ key, keyCode }) {
      document.removeEventListener('keyup', this.handleKeyUp)
      this.digitable = false
      if (key == this.letter) return
      if (!isNumberOrAlphabet(keyCode)) return

      this.$emit('replace-letter', [this.index, key])
    },
  },
})
</script>

<style scoped>
li {
  position: relative;
  width: 75px;
  margin-right: 10px;
}

span {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.2rem;
}
</style>
