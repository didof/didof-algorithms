<template>
  <div>
    <pre class="is-size-4">
const naivePatternSearchingAlgorithm = (<abbr :title="stringAbbr">string</abbr>, <abbr :title="patternAbbr">pattern</abbr>) => {
  const indexes = []

  <abbr :title="forAbbr">for</abbr> (let i = 0; i <= <abbr :title="differenceAbbr">string.length - pattern.length</abbr>; i++) {
    let j

    for (j = 0; j < pattern.length; j++) {
      if (<abbr :title="checkAbbr">string[i + j] !== pattern[j]</abbr>) {
        <abbr :title="breakAbbr">break</abbr>
      }
    }

    if (<abbr :title="isMatchAbbr">j == pattern.length</abbr>) {
      indexes.push(i)
    }
  }
  return indexes
}
</pre>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'the-code',
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
  computed: {
    stringAbbr() {
      return 'The string to search over. Corresponds to ' + this.string
    },
    patternAbbr() {
      return 'The pattern to search for. Corresponds to ' + this.pattern
    },
    forAbbr() {
      return 'The naive pattern use the approach of brute-force. Each string char is iterated (with some exception).'
    },
    differenceAbbr() {
      return 'This little trick saves the final iterations since mathematically speaking, they will fail. If I have to search for a string of 4 characters, it is unnecessary to iterate from the third to last.'
    },
    checkAbbr() {
      return 'If having trouble reasoning about the [i + j] thing, just think that when j is 0, you are comparing the i char of the string with the first of the pattern. When j is 1, you are comparing the very next char, i + 1, with the second char of the pattern'
    },
    breakAbbr() {
      return 'If there was an unmatch, no need to further iterate along this i. Just pass over to the next.'
    },
    isMatchAbbr() {
      return "If there was a match for each char of the pattern, it means that the 'break' was never hitted. Thus, the j counter reached in size the pattern length. This is the indicator of the successfull matching."
    },
  },
})
</script>

<style scoped>
abbr {
  cursor: pointer;
}
</style>
