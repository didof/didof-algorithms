<template>
  <ul class="columns">
    <li v-for="(_, index) in empty" :key="index">
      <div class="column is-1 empty"></div>
    </li>
    <li
      v-for="(letter, index) in letters"
      :key="index + letter"
      class="column is-1"
    >
      <demo-cell
        :index="index"
        :letter="letter"
        :status="status(index)"
      ></demo-cell>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import DemoCell from '~/components/DemoCell.vue'

export default Vue.extend({
  name: 'demo-pattern',
  components: {
    DemoCell,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    statuses: {
      type: Array,
      required: true,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      letters: this.$props.value.split(''),
      empty: new Array(this.offset),
    }
  },
  watch: {
    offset(value, prevValue) {
      if (value == prevValue) return
      this.empty.push(null)
    },
  },
  methods: {
    status(index) {
      const { s } = this.statuses.find((el) => el.i === index) || 0
      return s
    },
  },
})
</script>

<style scoped>
div {
  padding: 5px;
}

.empty {
  width: 100px;
  height: 100px;
}
</style>
