<template>
  <div >
    <p>Your got {{correctAnswers}} answers out of 10 questions </p>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('ScoreScreen', {
  data: function () {
    return {}
  },
})

export default {
  name: 'ScoreScreen',
  props: {
    correctAnswers: Number,
  }
}
</script>