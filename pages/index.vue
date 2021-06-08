<template>
  <div>
    <div
      class="is-flex is-justify-content-space-between is-align-content-center"
    >
      <span>
        <h1 class="is-size-1 has-text-grey-darker">Naive Pattern Searching</h1>
        <h2 class="is-size-2 has-text-grey">
          Visualized by
          <span
            @mouseenter="setName('Francesco Di Donato')"
            @mouseleave="setName('didof')"
            id="name"
            >{{ name }}</span
          >
        </h2>
      </span>
      <div class="content box">
        <h6>Keep in touch!</h6>
        <ul>
          <li>
            <a href="https://github.com/didof/didof-algorithms">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/francesco-di-donato-2a9836183/"
              >Linkedin</a
            >
          </li>
          <li><a href="https://twitter.com/did0f">Twitter</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <TheExplanation />
    <div class="is-flex is-justify-content-center is-align-content-center">
      <TheCode :string="string" :pattern="pattern" />
    </div>
    <hr />

    <div v-if="!isLocked">
      <InputSelection @lock="handleLock" :string="string" :pattern="pattern" />
      <br />
      <div
        class="is-flex is-justify-content-space-around is-align-content-center"
      >
        <div>
          <InstructionsPanel />
        </div>
      </div>
      <br />
    </div>
    <Demo v-else :string="string" :pattern="pattern" @new="handleNew" />
  </div>
</template>

<script>
import Vue from 'vue'
import InputSelection from '~/components/inputSelection/InputSelection.vue'
import Demo from '~/components/demo/Demo.vue'
import InstructionsPanel from '~/components/InstructionsPanel.vue'
import TheExplanation from '~/components/TheExplanation.vue'
import TheCode from '~/components/TheCode.vue'

export default Vue.extend({
  name: 'page-naive',
  components: {
    InputSelection,
    Demo,
    InstructionsPanel,
    TheCode,
    TheExplanation,
  },
  data() {
    return {
      isLocked: false,
      string: 'abdabcababdab',
      pattern: 'aba',
      mode: 'custom',
      name: 'didof',
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
    setName(name) {
      this.name = name
    },
  },
})
</script>

<style scoped>
#id {
  cursor: pointer;
}
</style>
