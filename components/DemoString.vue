<template>
  <div>
    <ul class="columns">
      <li v-for="(letter, index) in letters" :key="index" class="column is-1">
        <demo-cell
          :index="index"
          :letter="letter"
          :status="status(index)"
        ></demo-cell>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import DemoCell from '~/components/DemoCell.vue'

export default Vue.extend({
  name: 'demo-string',
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
  },
  data() {
    return {
      letters: this.$props.value.split(''),
    }
  },
  methods: {
    status(index) {
      const { s } = this.statuses.find((el) => el.i === index) || 0
      return s
    },
  },
})
</script>
