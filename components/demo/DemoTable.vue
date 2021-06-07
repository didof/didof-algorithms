<template>
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th v-for="label in labels" :key="label" class="is-size-5">
          {{ label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, index) in formattedValues"
        :key="'row' + index"
        :class="getRowColor(index)"
        @click="$emit('select-row', index + 1)"
      >
        <th v-for="(value, index) in row" :key="'column' + index">
          {{ value }}
        </th>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th v-for="label in labels" :key="label" class="is-size-5">
          {{ label }}
        </th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'demo-table',
  emits: ['select-row'],
  props: {
    labels: {
      type: Array,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
    highlighted: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      statusesSequence: [],
      formattedValues: [],
    }
  },
  created() {
    this.formattedValues = this.$props.values.map((row) => {
      this.statusesSequence.push(row[3])
      switch (row[3]) {
        case 1:
          row[3] = 'UNMATCH'
          break
        case 2:
          row[3] = 'PROCESSING'
          break
        case 3:
          row[3] = 'MATCH'
          break
      }
      return row
    })
  },
  methods: {
    getRowColor(index) {
      let classes = ''

      switch (this.statusesSequence[index]) {
        case 1:
          classes += 'has-background-danger-light'
          break
        case 2:
          classes += 'has-background-info-light'
          break
        case 3:
          classes += 'has-background-success-light'
          break
      }

      if (index == this.highlighted) {
        classes = 'is-selected'
      }

      return classes
    },
  },
})
</script>

<style scoped>
tr {
  cursor: pointer;
}
</style>
