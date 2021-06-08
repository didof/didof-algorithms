<template>
  <ul>
    <LetterCell
      v-for="(letter, index) in letters"
      :key="index"
      :index="index"
      :letter="letter"
      @right-click="spliceLetter"
      @replace-letter="replaceLetter"
    />
    <PlusCell @push-letter="pushLetter" v-if="canPushMoreLetters" />
  </ul>
</template>

<script>
import Vue from 'vue'
import LetterCell from './LetterCell.vue'
import PlusCell from './PlusCell.vue'

export default Vue.extend({
  name: 'base-letters',
  components: {
    LetterCell,
    PlusCell,
  },
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
      default: 13,
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
