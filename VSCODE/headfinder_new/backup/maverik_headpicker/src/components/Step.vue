<template>
<div class="wrapper">
  <div class="content-wrapper" :class="classes">
    <div class="content-inner">
      <div class="step">
        <Question :q="q" :id="id"></Question>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// Components
import Question from '@/components/Question';


export default {
  name: 'step',
  components: { Question },
  props: {
    id: Number,
    questions: Array,
  },
  computed: {
    q() {
      if ('questions' in this && this.questions) {
        return this.questions[this.id - 1];
      }
      return {};
    },
    classes() {
      const classes = {};
      classes[this.q.id] = true;
      return classes;
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
