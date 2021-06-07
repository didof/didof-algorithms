<template>
  <div>
    <h4 class="is-size-4 has-text-grey-dark">String</h4>
    <DemoString :value="string" :statuses="stringStatuses" />
    <br />
    <h4 class="is-size-4 has-text-grey-dark">Pattern</h4>
    <DemoPattern :value="pattern" :statuses="patternStatuses" />
    <br />
    <DemoCockpit
      @new="$emit('new')"
      @reset="handleReset"
      @prev="handlePrev"
      @next="handleNext"
      @play="handlePlay"
      @stop="handleStop"
      :disable-prev="!canStepLess()"
      :disable-next="!canStepMore()"
    />
    <br />
    <DemoTable
      :labels="['iteration count', 'i', 'j', 'status']"
      :values="records"
      :highlighted="step - 1"
      @select-row="handleSelectRow"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import DemoString from './DemoString.vue'
import DemoPattern from './DemoPattern.vue'
import DemoCockpit from './DemoCockpit.vue'
import DemoTable from './DemoTable.vue'

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
    DemoTable,
  },
  emits: ['new'],
  data() {
    return {
      stringRecords: [new Array(length).fill(0)],
      patternRecords: [new Array(length).fill(0)],
      records: [],
      step: 0,
      currentI: 0,
      currentJ: 0,
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

    let iterations = 0
    reports.forEach(({ i, j, status }) => {
      iterations++
      const s = new Array(this.string.length).fill(0)
      const p = new Array(this.pattern.length).fill(0)

      applyStatusInRange(s, i, i + j, status)
      applyStatusInRange(p, 0, j, status)

      this.stringRecords.push(s)
      this.patternRecords.push(p)
      this.records.push([iterations, i, j, status])
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
      }, 500)
    },
    handleStop() {
      clearInterval(this.animationInterval)
    },
    handleSelectRow(index) {
      this.step = index
    },
  },
})
</script>
