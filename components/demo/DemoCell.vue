<template>
  <li
    class="
      tag
      is-size-3
      has-text-centered
      is-uppercase
      has-text-weight-bold
      is-family-monospace
    "
    :class="statusColor"
  >
    <span
      class="is-size-5 has-text-centered is-uppercase has-text-weight-medium"
      >{{ index }}</span
    >
    <b>{{ letter }}</b>
  </li>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'demo-cell',
  props: {
    letter: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      statusColor: this.getStatusColor(this.status),
    }
  },
  watch: {
    status(value, prevValue) {
      if (value == prevValue) return this.statusColor
      this.statusColor = this.getStatusColor(value)
    },
  },
  methods: {
    getStatusColor(value) {
      switch (value) {
        case 0:
          return ''
        case 1:
          return 'is-danger'
        case 2:
          return 'is-info'
        case 3:
          return 'is-success'
      }
    },
  },
})
</script>

<style scoped>
li {
  position: relative;
  width: 75px;
  margin-right: 10px;
}

span {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.2rem;
}
</style>
