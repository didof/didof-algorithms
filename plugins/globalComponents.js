import Vue from 'vue'
import BaseInput from '~/components/BaseInput'
import LetterBox from '~/components/LetterBox'
import PlusBox from '~/components/PlusBox'

const components = { BaseInput, LetterBox, PlusBox }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
