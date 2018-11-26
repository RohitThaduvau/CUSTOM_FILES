<template>
<div class="images results__carousel">
  <ul class="results__carousel__images__thumbs">
    <li @click="setImage(i)" v-for="(image, i) in images" :key="i"><img :class="{ 'selected': selected === i }" :src="getImageUrl(image)" /></li>
  </ul>
  <img :src="selectedImage" class="results__carousel__feature-image" alt="" />
</div>
</template>

<script>
const imageAssets = require.context('../assets/images/', true, /^.*.(jpg|png)$/);

export default {
  name: 'images',
  data() {
    return {
      selected: 0,
    };
  },
  props: {
    images: Array,
  },
  computed: {
    selectedImage() {
      return this.getImageUrl(this.images[this.selected]);
    },
  },
  methods: {
    setImage(i) {
      this.selected = i;
    },
    getImageUrl(imgPath) {
      return imageAssets('./' + imgPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
