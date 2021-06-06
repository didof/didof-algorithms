<template>
  <div>
    <h1 class="is-size-1 has-text-grey-darker">Naive Pattern Searching</h1>
    <h2 class="is-size-2 has-text-grey">Visualized</h2>
    <hr />
    <InputSelection v-if="!isLocked" @lock="handleLock" />
    <Demo v-else :string="string" :pattern="pattern" />
  </div>
</template>

<script>
import Vue from 'vue'
import InputSelection from '~/components/InputSelection'
import Demo from '~/components/demo/Demo'

export default Vue.extend({
  name: 'page-naive',
  components: {
    InputSelection,
    Demo,
  },
  data() {
    return {
      isLocked: false,
      string: null,
      pattern: null,
    }
  },
  methods: {
    handleLock([string, pattern]) {
      this.isLocked = true
      this.string = string
      this.pattern = pattern
    },
  },
})
</script>
