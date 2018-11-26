<template>
  <div id="app">
      <header class="header">
        <div class="content-inner">
          <div v-if="!isStart" class="header__return-link">
            <a href="#" v-on:click="returnToStart()"><img src="./assets/images/icon-return.svg" alt="Return to Start"></a>
          </div>
          <h1><a href="http://www.maveriklacrosse.com" target="_blank"><img src="./assets/images/maverik-logo.svg" alt="Maverik Head Picker" /></a></h1>
        </div>
      </header>

      <router-view class="view"></router-view>

      <footer class="footer" id="footer">
        <div class="content-inner">
          <a class="footer__logo footer__logo--cascade" href="http://cascadelacrosse.com/" target="_blank">Cascade Lacrosse</a>
          <a class="footer__logo footer__logo--maverik" href="http://maveriklacrosse.com/" target="_blank">Maverik Lacrosse</a>
        </div>
      </footer>
  </div>
</template>

<script>
require('./sass/_fonts.scss');

export default {
  name: 'app',
  computed: {
    isStart() {
      const id = parseInt(this.$route.params.id, 10);
      const path = this.$route.path;
      return isNaN(id) && path !== '/confirm' && path !== '/results';
    },
    isEnd() {
      const stepCount = this.$store.state.questionsCount;
      return stepCount === this.currentStep;
    },
    currentStep() {
      const id = parseInt(this.$route.params.id, 10);
      return (isNaN(id)) ? 1 : id;
    },
    nextStep() {
      const id = parseInt(this.$route.params.id, 10) || 0;
      return id + 1;
    },
  },
  methods: {
    returnToStart() {
      this.$ga.event({
        eventCategory: 'Headfinder - Action',
        eventAction: 'Return to Start',
        // eventLabel: '',
        // eventValue: '',
      });
      this.$store.state.answers.length = 0;
      this.$store.state.scores.length = 0;
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>

<style lang="scss">
@import "sass/normalize";
@import "sass/base";
@import "sass/layout";
@import "sass/steps";
@import "sass/results";
</style>
