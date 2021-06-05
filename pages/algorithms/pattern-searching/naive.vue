<template>
  <div class="is-size-1">
    <h1>Naive Pattern Searching</h1>
    <input-tuple v-if="!isLocked" @lock="handleLock"></input-tuple>
    <Demo v-else :string="string" :pattern="pattern" />
  </div>
</template>

<script>
import Vue from 'vue'
import InputTuple from '~/components/InputTuple'
import Demo from '~/components/Demo'

export default Vue.extend({
  name: 'page-naive',
  components: {
    InputTuple,
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
