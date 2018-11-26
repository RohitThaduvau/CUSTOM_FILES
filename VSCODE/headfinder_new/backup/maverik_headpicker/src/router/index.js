// Components
import Step from '@/components/Step';
import Start from '@/components/Start';
import Confirm from '@/components/Confirm';
import Results from '@/components/Results';

import Vue from 'vue';
import Router from 'vue-router';
import VueCarousel from 'vue-carousel';

// data
import data from '../data.json';

Vue.use(Router);
Vue.use(VueCarousel);

export default new Router({
  routes: [
    { path: '/', component: Start },
    {
      path: '/step/:id',
      name: 'step',
      component: Step,
      props(route) {
        const id = parseInt(route.params.id, 10);
        return { id, questions: data.questions };
      },
    },
    { path: '/confirm', component: Confirm },
    { path: '/results', component: Results },
  ],
});
