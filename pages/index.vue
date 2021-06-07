<template>
  <div>
    <h1 class="is-size-1 has-text-grey-darker">Naive Pattern Searching</h1>
    <h2 class="is-size-2 has-text-grey">Visualized</h2>
    <hr />
    <div v-if="!isLocked">
      <InputSelection @lock="handleLock" :string="string" :pattern="pattern" />
      <br />
      <div class="columns">
        <div class="column is-4">
          <InstructionsPanel />
        </div>
      </div>
    </div>
    <Demo v-else :string="string" :pattern="pattern" @new="handleNew" />
  </div>
</template>

<script>
import Vue from 'vue'
import InputSelection from '~/components/inputSelection/InputSelection.vue'
import Demo from '~/components/demo/Demo.vue'
import InstructionsPanel from '~/components/InstructionsPanel.vue'

export default Vue.extend({
  name: 'page-naive',
  components: {
    InputSelection,
    Demo,
    InstructionsPanel,
  },
  data() {
    return {
      isLocked: false,
      string: 'abdabcababda',
      pattern: 'aba',
    }
  },
  methods: {
    handleLock([string, pattern]) {
      this.isLocked = true
      this.string = string
      this.pattern = pattern
    },
    handleNew() {
      this.isLocked = false
    },
  },
})
</script>
