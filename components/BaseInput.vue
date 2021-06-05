<template>
  <div>
    <ul class="columns">
      <li v-for="(letter, index) in letters" :key="index" class="column is-1">
        <letter-box
          :index="index"
          :letter="letter"
          @right-click="spliceLetter"
          @replace-letter="replaceLetter"
        ></letter-box>
      </li>
      <li class="column is-1" v-if="canPushMoreLetters">
        <plus-box @push-letter="pushLetter"></plus-box>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'base-input',
  emits: ['update-value'],
  props: {
    value: {
      type: String,
      default: '',
    },
    minLength: {
      type: Number,
      default: 5,
    },
    maxLength: {
      type: Number,
      default: 12,
    },
  },
  data() {
    return {
      letters: this.value.split(''),
    }
  },
  computed: {
    canPushMoreLetters() {
      return this.letters.length < this.maxLength
    },
  },
  watch: {
    letters(value) {
      this.$emit('update-value', value)
    },
    maxLength(maxLength) {
      if (maxLength < this.value.length) {
        let difference = this.value.length - maxLength
        while (difference > 0) {
          this.letters.pop()
          difference--
        }
      }
    },
  },
  methods: {
    pushLetter(letter) {
      this.letters.push(letter)
    },
    spliceLetter(index) {
      if (this.letters.length <= this.minLength) return
      this.letters.splice(index, 1)
    },
    replaceLetter([index, key]) {
      this.letters.splice(index, 1, key)
    },
  },
})
</script>
