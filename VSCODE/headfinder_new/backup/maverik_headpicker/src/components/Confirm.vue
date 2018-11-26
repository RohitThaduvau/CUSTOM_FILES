<template>
<div class="wrapper">
  <div class="content-wrapper confirm">
    <div class="content-inner">
      <h2>Got it.</h2>

      <!--
        Uncomment for testing
        <div :key="i" v-for="(a,i) in this.$store.state.answers">
        <div>{{a.answer}}</div>
      </div>-->

      <p>You're a {{this.$store.state.answers[0].answerDescriptive}} with {{this.$store.state.answers[1].answerDescriptive}}.</p>

      <p>{{this.$store.state.answers[2].answerDescriptive}} and {{this.$store.state.answers[3].answerDescriptive}} are your go-to moves.</p>

      <router-link class="btn" to="/results">Check out your results</router-link>
      <router-link class="return-link" to="/" v-on:click.native="goBack()">Go Back</router-link>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'confirm',
  methods: {
    goBack() {
      this.$ga.event({
        eventCategory: 'Headfinder - Action',
        eventAction: 'Go Back',
        // eventLabel: '',
        // eventValue: '',
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
