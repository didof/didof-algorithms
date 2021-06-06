<template>
  <div>
    <ul class="columns">
      <li v-for="(letter, index) in letters" :key="index" class="column is-1">
        <demo-cell
          :index="index"
          :letter="letter"
          :status="statuses[index]"
        ></demo-cell>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import DemoCell from './DemoCell.vue'

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
})
</script>
