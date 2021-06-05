<template>
  <div>
    <demo-string :value="string" :statuses="stringStatuses"></demo-string>
    <demo-pattern :value="pattern" :statuses="patternStatuses"></demo-pattern>
    <button @click="handleNext">next</button>
  </div>
</template>

<script>
import Vue from 'vue'
import DemoString from '~/components/DemoString.vue'
import DemoPattern from '~/components/DemoPattern.vue'

import naivePatternSearchingAlgorithm from '~/app/algorithms/pattern-searching/naive'

export default Vue.extend({
  name: 'demo',
  components: {
    DemoString,
    DemoPattern,
  },
  data() {
    return {
      fn: null,
      stringStatuses: [
        // none 0
        // unmatch 1
        // match 2
        // success 3
        // { i: 1, s: 1 },
      ],
      patternStatuses: [],
    }
  },
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
  mounted() {
    const processWithReport = naivePatternSearchingAlgorithm(
      ({ i, j, status }) => console.log(i, j, status)
      // TODO based on this data, create the history so that user can press next and back to navigate
    )
    processWithReport(this.string, this.pattern)
  },
  methods: {
    handleNext() {},
  },
})
</script>
