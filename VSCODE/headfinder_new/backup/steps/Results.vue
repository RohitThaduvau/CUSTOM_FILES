<template>
<div class="wrapper wrapper--white">
  <div class="content-wrapper results">
      <div class="content-inner">
        <hide-at :breakpoints="{medium: 1025}" breakpoint="largeAndAbove">
            <carousel class="results__carousel" :perPage="1" paginationColor="#808080" paginationActiveColor="#c8102e" :paginationSize="15">
            <slide v-for="(img,i) in recommendedProduct.productImages" v-bind:key="i"><img :src="getImageUrl(img)" alt=" " />
            </slide>
          </carousel>
        </hide-at>

        <show-at :breakpoints="{medium: 1025}" breakpoint="largeAndAbove">
          <images :images="recommendedProduct.productImages" />
        </show-at>

        <h2 class="results__product-name">{{recommendedProduct.name}}
        <span class="results__byline">Is the perfect Head for the way you play!</span></h2>

        <div class="results__product-description">
          <p class="results__product-description__intro">{{recommendedProduct.shortDescription}}</p>
          <div v-html="recommendedProduct.description">{{recommendedProduct.description}}</div>
        </div>

        <div class="results__purchase-options" id="price-block" :class="{'is-sticky': isSticky }">
          <span class="results__purchase-options__price">{{recommendedProduct.price}}<span class="results__purchase-options__price__label">MSRP.</span></span>
          <span class="results__purchase-options__link"><a :href="recommendedProduct.itemUrl" target="_blank" @click="track(recommendedProduct)">GET ONE!</a></span>
        </div>

        <div class="results__related-product">
          <p class="results__related-product__intro">You might also like</p>
          <h2 class="results__related-product__name">{{altRecommendedProduct.name}}</h2>
          <div class="results__related-product__description">
            <p>{{altRecommendedProduct.shortDescription}}</p>
          </div>
        </div>

        <!--<ol>
          <li v-for="(result, i) in scores" :key="i">
            <b>{{result.id}}:</b> {{result.value}}
          </li>
        </ol>-->
      </div>
    </div>
  </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import { showAt, hideAt } from 'vue-breakpoints';
import Images from './Images';

const imageAssets = require.context('../assets/images/', true, /^.*.(jpg|png)$/);

export default {
  name: 'results',
  components: {
    Carousel,
    Slide,
    Images,
    hideAt,
    showAt,
  },
  data() {
    return {
      isSticky: true,
    };
  },
  methods: {
    getImageUrl(imgPath) {
      return imageAssets('./' + imgPath);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    handleScroll() {
      const el = document.getElementById('price-block');
      const footerHeight = document.getElementById('footer').clientHeight;
      const top = el.offsetTop - footerHeight;
      if (window.scrollY >= top) {
        this.isSticky = false;
        this.destroyed();
      } else {
        this.isSticky = true;
      }
    },
    track(payload) {
      this.$ga.event({
        eventCategory: 'Headfinder - Action',
        eventAction: 'Result CTA',
        eventLabel: payload.id,
        // eventValue: '',
      });
    },
  },
  computed: {
    scores() {
      return this.$store.state.scores;
    },
    recommendedProduct() {
      const score = this.$store.state.scores[0];
      const products = this.$store.state.products;
      let recommendedProduct;
      for (const i in products) {
        recommendedProduct = products[i];
        if (score.id === recommendedProduct.id) {
          break;
        }
      }
      // ga event tracking
      this.$ga.event({
        eventCategory: 'Headfinder - Result',
        eventAction: 'Primary',
        eventLabel: this.$store.state.scores[0].id,
        eventValue: this.$store.state.scores[0].value,
      });

      return recommendedProduct;
    },
    altRecommendedProduct() {
      const score = this.$store.state.scores[1];
      const products = this.$store.state.products;
      let altProduct;
      for (const i in products) {
        altProduct = products[i];
        if (score.id === altProduct.id) {
          break;
        }
      }
      // ga event tracking
      this.$ga.event({
        eventCategory: 'Headfinder - Result',
        eventAction: 'Secondary',
        eventLabel: this.$store.state.scores[1].id,
        eventValue: this.$store.state.scores[1].value,
      });

      return altProduct;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
