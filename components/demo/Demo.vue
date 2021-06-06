<template>
  <div>
    <DemoString :value="string" :statuses="stringStatuses" />
    <DemoPattern :value="pattern" :statuses="patternStatuses" />
    <DemoCockpit
      @reset="handleReset"
      @prev="handlePrev"
      @next="handleNext"
      @play="handlePlay"
      @stop="handleStop"
      :disable-prev="!canStepLess()"
      :disable-next="!canStepMore()"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import DemoString from './DemoString.vue'
import DemoPattern from './DemoPattern.vue'
import DemoCockpit from './DemoCockpit.vue'

import naivePatternSearchingAlgorithm from '~/app/naive'

const stripReactivity = (input) => JSON.parse(JSON.stringify(input))

const applyStatusInRange = (array, start, end, paint) => {
  const difference = end - start
  array.splice(start, difference + 1, ...new Array(difference + 1).fill(paint))
  return array
}

export default Vue.extend({
  name: 'demo',
  components: {
    DemoString,
    DemoPattern,
    DemoCockpit,
  },
  data() {
    return {
      stringRecords: [new Array(length).fill(0)],
      patternRecords: [new Array(length).fill(0)],
      step: 0,
      animationInterval: null,
      disableNext: false,
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
  created() {
    const [_, reports] = naivePatternSearchingAlgorithm(
      this.string,
      this.pattern
    )

    reports.forEach(({ i, j, status }) => {
      const s = new Array(this.string.length).fill(0)
      const p = new Array(this.pattern.length).fill(0)

      applyStatusInRange(s, i, i + j, status)
      applyStatusInRange(p, 0, j, status)

      this.stringRecords.push(s)
      this.patternRecords.push(p)
    })
  },
  computed: {
    stringStatuses() {
      const notReactive = stripReactivity(this.stringRecords)
      return notReactive[this.step]
    },
    patternStatuses() {
      const notReactive = stripReactivity(this.patternRecords)
      return notReactive[this.step]
    },
  },
  methods: {
    canStepMore() {
      return this.step < this.stringRecords.length - 1
    },
    canStepLess() {
      return this.step > 0
    },
    handleNext() {
      if (this.canStepMore()) this.step++
    },
    handlePrev() {
      if (this.canStepLess()) this.step--
    },
    handleReset() {
      this.step = 0
    },
    handlePlay() {
      this.animationInterval = setInterval(() => {
        if (this.canStepMore()) {
          this.step++
        } else handleStop()
      }, 1000)
    },
    handleStop() {
      clearInterval(this.animationInterval)
    },
  },
})
</script>
