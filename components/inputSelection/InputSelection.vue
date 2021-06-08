<template>
  <div>
    <h4 class="is-size-4 has-text-grey-dark">String</h4>
    <InputLetters
      :value="string"
      :minLength="stringMinLength"
      @update-value="handleUpdateString"
    />

    <br />

    <h4 class="is-size-4 has-text-grey-dark">Pattern</h4>
    <InputLetters
      :value="pattern"
      :maxLength="patternMaxLength"
      :minLength="2"
      @update-value="handleUpdatePattern"
    />
    <br />
    <div class="is-flex is-justify-content-center">
      <button
        @click="handleLock"
        class="button is-large is-rounded is-outlined is-info"
        id="visualize-button"
      >
        Visualize
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import InputLetters from './InputLetters.vue'

export default Vue.extend({
  name: 'input-selection',
  components: {
    InputLetters,
  },
  emits: ['lock'],
  props: {
    string: {
      type: String,
      required: true,
    },
    pattern: {
      type: String,
      required: true,
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
