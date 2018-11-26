<template>
    <div class="question" :class="{'is-answered': isAnswered }">
      <h2 class="step__question">{{q.question}}</h2>
      <div role="radio" v-for="(a,i) in q.answers" v-bind:key="i" class="step__answer" :class="{'selected': i === selected}">
        <input type="radio" :id="'answer' + i" :value="a" @change="setAnswer({picked, id, i, q})" v-model="picked">
        <label class="step__answer__label" tabindex="0" :for="'answer' + i">{{a.answer}}</label>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      picked: null,
      selected: null,
      isAnswered: false,
    };
  },
  name: 'question',
  props: {
    id: Number,
    q: Object,
  },
  methods: {
    setAnswer(payload) {
      this.selected = payload.i;
      this.isAnswered = true;
      this.$store.commit('setAnswer', payload);
      this.$store.commit('updateScore');
      const currentStep = parseInt(this.$store.state.route.params.id, 10) || 0;
      this.$ga.event({
        eventCategory: 'Headfinder - Question',
        eventAction: payload.q.label,
        eventLabel: payload.picked.answer,
        // eventValue: '',
      });

      const doRoute = () => {
        if (currentStep < this.$store.state.questionsCount) {
          this.$router.push({
            name: 'step',
            params: {
              id: currentStep + 1,
            },
          });
        } else {
          this.$router.push({
            path: '/confirm',
          });
        }
        this.picked = null;
        this.selected = null;
        this.isAnswered = false;
      };
      setTimeout(doRoute, 500);
    },
  },
};
</script>

