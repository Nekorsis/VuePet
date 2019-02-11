<template>
  <div >
    <p>{{count ? count : "no content"}}</p>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('button-counter', {
  data: function () {
    return {
      count: 11
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

export default {
  name: 'test-component',
  props: {
    count: String,
  }
}
</script>