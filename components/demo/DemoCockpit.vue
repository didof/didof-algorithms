<template>
  <div class="buttons has-addons">
    <button
      @click="$emit('new')"
      class="button is-danger is-outlined is-large is-uppercase"
    >
      new
    </button>
    <button
      @click="$emit('reset')"
      class="button is-warning is-outlined is-large is-uppercase"
    >
      reset
    </button>
    <button
      @click="onPrev"
      class="button is-rounded is-success is-outlined is-large is-uppercase"
      :disabled="disablePrev"
      :class="disablePrev ? 'is-disabled' : ''"
    >
      prev
    </button>
    <button
      @click="togglePlay"
      class="button is-rounded is-success is-outlined is-large is-uppercase"
      :disabled="disableNext"
      :class="disableNext ? 'is-disabled' : ''"
    >
      {{ playButtonAction }}
    </button>
    <button
      @click="onNext"
      class="button is-rounded is-success is-outlined is-large is-uppercase"
      :disabled="disableNext"
      :class="disableNext ? 'is-disabled' : ''"
    >
      next
    </button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'demo-cockpit',
  emits: ['new', 'reset', 'prev', 'next', 'play', 'stop'],
  data() {
    return {
      isPlaying: false,
    }
  },
  props: {
    disablePrev: {
      type: Boolean,
      required: true,
    },
    disableNext: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    disableNext(val) {
      if (val) {
        this.isPlaying = false
        this.$emit('stop')
      }
    },
  },
  computed: {
    playButtonAction() {
      return this.isPlaying ? 'stop' : 'play'
    },
  },
  methods: {
    togglePlay() {
      this.$emit(this.isPlaying ? 'stop' : 'play')
      this.isPlaying = !this.isPlaying
    },
    onPrev() {
      this.$emit('stop')
      this.$emit('prev')
    },
    onNext() {
      this.$emit('stop')
      this.$emit('next')
    },
  },
})
</script>
