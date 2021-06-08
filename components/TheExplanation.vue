<template>
  <div class="content box">
    <div
      class="is-flex is-justify-content-space-evenly is-align-content-center"
    >
      <h2 class="is-size-2 has-text-grey-dark">Explanation here</h2>
      <button
        class="button is-primary is-inverted is-large"
        @click="handleDemoScroll"
      >
        Demo below
      </button>
    </div>
    <h6 class="is-size-4 has-text-grey-darker">What approach does it use?</h6>
    <p class="has-text-grey is-size-5">
      The naive pattern searching algorithm finds all occurrences of a pattern
      within a string using a <b>brute-force</b> approach.
    </p>
    <h6 class="is-size-4 has-text-grey-darker">
      Should it iterate all of the characters?
    </h6>
    <p class="has-text-grey is-size-5">
      It iterates for each character in the string. Almost. In fact, the
      searching of a three characters long pattern can be optimized by
      <i>not iterating</i> the last two positions of the string as it is
      impossible for them to match.
    </p>
    <center>
      <code class="is-size-5"
        >for (let i = 0; i <= string.length - pattern.length; i++)</code
      >
    </center>
    <br />
    <h6 class="is-size-4 has-text-grey-darker">
      What check should be performed on each cycle?
    </h6>
    <p class="has-text-grey is-size-5">
      For each character in the string iterated, the pattern is also iterated.
      For each sub-loop, a <b>single check</b> is performed: does the character
      on the string and the relative on the pattern match?
    </p>
    <ul>
      <li class="has-text-grey is-size-5">
        Yup? Very well, increment the sub-counter (<code>j</code>) and proceed
        with the following character of the pattern.
      </li>
      <li class="has-text-grey is-size-5">
        Nope? Then break the cycle. On a three-character long pattern, if the
        second is already a unmatch, it will make little difference whether the
        third character matches; it is however a unmatch of the pattern.
      </li>
    </ul>
    <center>
      <code class="is-size-5">if (string[i + j] !== pattern[j]) break</code>
    </center>
    <br />
    <h6 class="is-size-4 has-text-grey-darker">
      It is out of the sub cycle. What now?
    </h6>
    <p class="has-text-grey is-size-5">
      It is sufficient to check if the sub-counter (<code>j</code>) is
      <i>equal to</i> the <i>length of the pattern</i>: if this is true it means
      that the pattern has been iterated completely, which is possible only if
      no unmatchs have occurred.
    </p>
    <p class="has-text-grey is-size-5">
      At this point the <code>i</code> represents the position at which an
      occurrence of the pattern is encountered.
    </p>
    <blockquote class="is-size-4">
      Does it come back to you but you haven't fully understood it yet? Play the
      <b>interactive demo</b> below!
    </blockquote>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    handleDemoScroll() {
      document.getElementById('visualize-button').scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
})
</script>
