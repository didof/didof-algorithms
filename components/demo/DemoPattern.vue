<template>
  <ul>
    <demo-cell
      v-for="(letter, index) in letters"
      :key="index + letter"
      :index="index"
      :letter="letter"
      :status="statuses[index]"
    ></demo-cell>
  </ul>
</template>

<script>
import Vue from 'vue'
import DemoCell from './DemoCell.vue'

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
  },
  data() {
    return {
      letters: this.$props.value.split(''),
    }
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
