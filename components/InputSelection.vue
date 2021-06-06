<template>
  <div>
    <base-input
      :value="string"
      :minLength="stringMinLength"
      @update-value="handleUpdateString"
    ></base-input>
    <br />
    <base-input
      :value="pattern"
      :maxLength="patternMaxLength"
      @update-value="handleUpdatePattern"
    ></base-input>
    <br />
    <button
      @click="handleLock"
      class="button is-large is-rounded is-outlined is-info"
    >
      Lock
    </button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'input-selection',
  emits: ['lock'],
  props: {
    string: {
      type: String,
      default: 'abdabcababda',
    },
    pattern: {
      type: String,
      default: 'aba',
    },
  },
  data() {
    return {
      str: this.$props.string,
      pat: this.$props.pattern,
    }
  },
  methods: {
    handleUpdateString(value) {
      this.str = value.join('')
    },
    handleUpdatePattern(value) {
      this.pat = value.join('')
    },
    handleLock() {
      this.$emit('lock', [this.str, this.pat])
    },
  },
  computed: {
    stringMinLength() {
      return Math.floor(this.pat.length + 3)
    },
    patternMaxLength() {
      return Math.floor(this.str.length * 0.5)
    },
  },
})
</script>
