<template>
  <div class="black__friday__container">
    <app-banner :params_banner="{
        href:'/en-CA/holiday-cyber-monday/?sz=48'
      }"></app-banner>
      <section class="shop-tile-container">
        <shopTile :params_shop="{
          href: '/en-CA/holiday-cyber-monday/holiday-cyber-monday-outerwear/',
          background: 'bg__light',
          tagLine: 'sale on',
          imgSrc: 'https://i1.adis.ws/i/bauer/Cyber-Monday-Tile-1@3x',
          for: 'outerwear',
          shop: 'shop deals'
        }"></shopTile>
        <shopTile :params_shop="{
          href: '/en-CA/holiday-cyber-monday/holiday-cyber-monday-apparel/?sz=33',
          background: 'bg__dark',
          tagLine: 'sale on',
          imgSrc: 'https://i1.adis.ws/i/bauer/Cyber-Monday-Tile-2@3x',
          for: 'apparel',
          shop: 'shop deals'
        }"></shopTile>
        <shopTile :params_shop="{
          href: '/en-CA/holiday-cyber-monday/holiday-cyber-monday-headwear/',
          background: 'bg__light',
          tagLine: 'sale on',
          imgSrc: 'https://i1.adis.ws/i/bauer/Cyber-Monday-Tile-3@3x',
          for: 'headwear',
          shop: 'shop deals'
        }"></shopTile>
        <shopTile :params_shop="{
          href: '/en-CA/holiday-cyber-monday/holiday-cyber-monday-game-winners/',
          background: 'bg__dark',
          tagLine: 'game',
          imgSrc: 'https://i1.adis.ws/i/bauer/Cyber-Monday-Tile-4@3x',
          for: 'winners',
          shop: 'shop hot deals'
        }"></shopTile>
    </section>
    <section class="slick__carousel__container">
      <carousel-header></carousel-header>
      <vue-slick ref="slick" :options="slickOptions">
        <vue-slide :params_carousel="{
          href:'/holiday-cyber-monday/holiday-cyber-monday-outerwear/team-travel-coat-senior-685754.html',
          imgSrc: 'https://i1.adis.ws/i/bauer/CyberMonday-Slider-1@3x',
          showPrice: true,
          isSale: true,
          product_name: 'Team Travel Coat Senior',
          sale_price: '$169.99',
          actual_price:'$135.99'
        }"></vue-slide>
        <vue-slide :params_carousel="{
          href:'/holiday-cyber-monday/holiday-cyber-monday-sticks/supreme-1s-griptac-stick-669667.html',
          imgSrc: 'https://i1.adis.ws/i/bauer/CyberMonday-Slider-669667@3x',
          showPrice: true,
          isSale: true,
           product_name: 'Supreme 1S Griptac Stick',
          sale_price: '$99.99-$339.99',
          actual_price:'$69.99-$237.99'
        }"></vue-slide>
        <vue-slide :params_carousel="{
          href:'/holiday-cyber-monday/holiday-cyber-monday-bags/bauer-youth-hockey-bag-688698161489.html',
          imgSrc: 'https://i1.adis.ws/i/bauer/Slider_360_Bag_2@3x',
          showPrice: true,
          isSale: true,
           product_name: 'Bauer Youth Hockey Bag',
          sale_price: '$24.99',
          actual_price:'$12.50'
        }"></vue-slide>
        <vue-slide :params_carousel="{
          href:'/holiday-cyber-monday/holiday-cyber-monday-protective/vapor-1x-pant-679657.html',
          imgSrc: 'https://i1.adis.ws/i/bauer/CyberMonday-Slider-5@3x',
          showPrice: true,
          isSale: true,
           product_name: 'Vapor 1X Pant',
          sale_price: '$239.99',
          actual_price:'$120'
        }"></vue-slide>
        <vue-slide :params_carousel="{
          href:'/holiday-cyber-monday/holiday-cyber-monday-apparel/flex-pant-651291.html',
          imgSrc: 'https://i1.adis.ws/i/bauer/CyberMonday-Slider-FlexPant@3x',
          showPrice: true,
          isSale: true,
          product_name: 'Flex Pant',
          sale_price: '$51.99-$57.99',
          actual_price:'$41.59-$46.39'
        }"></vue-slide>
        <vue-slide :params_carousel="{
          href:'/holiday-cyber-monday/holiday-cyber-monday-bags/laptop-backpack-688698265859.html',
          imgSrc: 'https://i1.adis.ws/i/bauer/Slider_Laptop_Bag_2@3x',
          showPrice: true,
          isSale: true,
          product_name: 'Laptop Backpack',
          sale_price: '$99.99',
          actual_price:'$79.99'
        }"></vue-slide>
      </vue-slick>
      <carousel-footer></carousel-footer>
    </section>
    <grid-block :params="{
      layout:'',
      href: {
        hrefSrc1: '/hockey-sticks/supreme-sticks/supreme-2s-pro-griptac-stick-657552.html',
        hrefSrc2: '/hockey-skates/vapor-skates/vapor-1x-skate-623598.html',
        hrefSrc3: '/hockey-sticks/nexus-sticks/nexus-2n-pro-griptac-stick-650043.html',
        hrefSrc4: '/en-CA/thegameisagift.html',
        hrefSrc5: '/hockey-helmets/re-akt-200-helmet-628587.html',
      },
      hasVideoCopy: true,
      videoCopy: {
        videoClass: 'has-video-copy',
        videoHeading: 'the game is a gift',
        videoTagline: 'a guide to holiday 2018 gift giving'
      },
      bgGradient: gradientHeroFirst,
      imgSrc1: 'https://s1.adis.ws/bauer/_vid/2s_pro_hp_video_3mb/7dd427b1-0f57-47dd-8700-942edaa37660/video/699b495b-d2b5-4113-9e47-4b35ba1d7f48.mp4',
      imgSrc2: 'https://i1.adis.ws/i/bauer/HP_vapor_1X_skate',
      imgSrc3: 'https://i1.adis.ws/i/bauer/HP_2Npro_stick',
      imgSrc4: '',
      imgSrc5: 'https://i1.adis.ws/i/bauer/HP_reakt_helmet',
      imgAlt: 'Product Image',
      copyTile: {
        heading: 'the game is a gift',
        tagline: '',
        price: '',
        taglineBottom: 'shop holiday!',
      }
    }"></grid-block>
     <grid-block :params="{
      layout:'hero-last',
      href: {
        hrefSrc1: '/hockey-skates/supreme-skates/supreme-2s-pro-skate-670664.html',
        hrefSrc2: '/hockey-skates/nexus-skates/nexus-2n-skate-643253.html',
        hrefSrc3: '/goalie-hockey-gear/goalie-pads/supreme-2s-pro-goal-pad-611485.html',
        hrefSrc4: '/en-CA/holiday-over-300/',
        hrefSrc5: '/goalie-hockey-gear/goalie-masks/nme-vtx-goal-mask-698481.html',
      },
      hasVideoCopy: false,
      videoCopy: {
        videoClass: '',
        videoHeading: '',
        videoTagline: ''
      },
      bgGradient: gradientHeroLast,
      imgSrc1: 'https://s1.adis.ws/bauer/_vid/2s_pro_skate_hp_video_3mb/7dd427b1-0f57-47dd-8700-942edaa37660/video/b0f52afe-fd31-43e4-86a6-69d093564bc0.mp4',
      imgSrc2: 'https://i1.adis.ws/i/bauer/HP_nexus_skate',
      imgSrc3: 'https://i1.adis.ws/i/bauer/HP_goalie_gear',
      imgSrc4: '',
      imgSrc5: 'https://i1.adis.ws/i/bauer/HP_msk_NMEVTX',
      imgAlt: 'Product Image',
      copyTile: {
        heading: 'celly-brate',
        tagline: 'with gift ideas over',
        price: '$300',
        taglineBottom: 'shop now !',
      }
    }"></grid-block>
    <grid-block :params="{
      layout:'',
      href: {
        hrefSrc1: '/hockey-sticks/vapor-sticks/vapor-1x-lite-griptac-stick-648720.html',
        hrefSrc2: '/hockey-accessories/hockey-bags/950-wheel-bag-666436.html',
        hrefSrc3: '/hockey-helmets/re-akt-200-helmet-combo-628182.html',
        hrefSrc4: '/en-CA/holiday-under-300/',
        hrefSrc5: '/hockey-pads-protection/body-shoulder-pads/vapor-1x-lite-shoulder-pad-681642.html',
      },
      hasVideoCopy: false,
      videoCopy: {
        videoClass: '',
        videoHeading: '',
        videoTagline: ''
      },
      bgGradient: gradientHeroFirst,
      imgSrc1: 'https://s1.adis.ws/bauer/_vid/1x_skate_hp_video_4mb/7dd427b1-0f57-47dd-8700-942edaa37660/video/68c40b9e-256f-45ae-8773-0ddeab535eca.mp4',
      imgSrc2: 'https://i1.adis.ws/i/bauer/HP_bag_1',
      imgSrc3: 'https://i1.adis.ws/i/bauer/HP_reakt_combo',
      imgSrc4: '',
      imgSrc5: 'https://i1.adis.ws/i/bauer/HP_vapor_vest',
      imgAlt: 'Product Image',
      copyTile: {
        heading: 'deke the halls',
        tagline: 'with gift ideas under',
        price: '$300',
        taglineBottom: 'shop now !',
      }
    }"></grid-block>
     <grid-block :params="{
      layout:'hero-last',
      href: {
        hrefSrc1: '/hockey-pads-protection/hockey-gloves/vapor-x900-lite-glove-610712.html',
        hrefSrc2: '/hockey-apparel/lifestyle-clothing/team-travel-coat-senior-685754.html',
        hrefSrc3: '/hockey-pads-protection/shin-guards/supreme-s190-shin-guard-638451.html',
        hrefSrc4: '/en-CA/holiday-under-200/',
        hrefSrc5: '/hockey-pads-protection/hockey-pants/nexus-n9000-pant-689925.html',
      },
      hasVideoCopy: false,
      videoCopy: {
        videoClass: '',
        videoHeading: '',
        videoTagline: ''
      },
      bgGradient: gradientHeroLast,
      imgSrc1: 'https://s1.adis.ws/bauer/_vid/x900_glove_hp_video_4mb/7dd427b1-0f57-47dd-8700-942edaa37660/video/ef6d3247-b5cc-4779-9637-f98654cb1593.mp4',
      imgSrc2: 'https://i1.adis.ws/i/bauer/HP_grey_jacket',
      imgSrc3: 'https://i1.adis.ws/i/bauer/HP_shin_guard',
      imgSrc4: '',
      imgSrc5: 'https://i1.adis.ws/i/bauer/HP_protective_pants',
      imgAlt: 'Product Image',
      copyTile: {
        heading: 'light the lamp',
        tagline: 'with gift ideas under',
        price: '$200',
        taglineBottom: 'shop now !',
      }
    }"></grid-block>
    <grid-block :params="{
      layout:'',
      href: {
        hrefSrc1: '/hockey-sticks/beginner-ice-hockey-sticks/nsx-griptac-stick-650643.html',
        hrefSrc2: '/hockey-helmets/youth-helmets/prodigy-youth-helmet-combo-601083.html',
        hrefSrc3: '/hockey-accessories/hockey-bags/laptop-backpack-688698265859.html',
        hrefSrc4: '/en-CA/holiday-under-100/',
        hrefSrc5: '/hockey-apparel/lifestyle-clothing/flex-jacket-682331.html',
      },
      hasVideoCopy: false,
      videoCopy: {
        videoClass: '',
        videoHeading: '',
        videoTagline: ''
      },
      bgGradient: gradientHeroFirst,
      imgSrc1: 'https://s1.adis.ws/bauer/_vid/nsx_stick_hp_video_2mb/7dd427b1-0f57-47dd-8700-942edaa37660/video/d5415e96-aa7f-406d-a0eb-2bec94f5fa88.mp4',
      imgSrc2: 'https://i1.adis.ws/i/bauer/HP_pink_helmet',
      imgSrc3: 'https://i1.adis.ws/i/bauer/HP_bagpack',
      imgSrc4: '',
      imgSrc5: 'https://i1.adis.ws/i/bauer/HP_red_jacket',
      imgAlt: 'Product Image',
      copyTile: {
        heading: 'Score Big',
        tagline: 'with gift ideas under',
        price: '$100',
        taglineBottom: 'shop now !',
      }
    }"></grid-block>
  </div>
</template>

<script>
// import { TweenLite, TimelineLite } from 'gsap';
import Banner from './components/banner';
import shop_tile from './components/shop-tiles';
import Header from './components/carousel/header';
import Slick from 'vue-slick';
import Slide from './components/carousel/slide';
import Footer from './components/carousel/footer';
import grid from './components/grid';
export default {
  data () {
    return {
        gradientHeroFirst: {
          bgGradient2:'grid-tile__item__bg__to-top',
          bgGradient3:'grid-tile__item__bg__to-left',
          bgGradient4:'grid-tile__item__bg__copy-tile',
          bgGradient5:'grid-tile__item__bg__to-top',
        },
        gradientHeroLast: {
          bgGradient2:'grid-tile__item__bg__to-top',
          bgGradient3:'grid-tile__item__bg__to-left',
          bgGradient4:'grid-tile__item__bg__copy-tile',
          bgGradient5:'grid-tile__item__bg__to-top',
        },
        slickOptions: {
          //options can be used from the plugin documentation
          centerMode: true,
          centerPadding: '15%',
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: true,
          accessibility: true,
          adaptiveHeight: false,
          draggable: true,
          edgeFriction: 0,
          swipe: true,
          responsive: [
              {
                breakpoint: 560,
                settings: {
                  centerPadding: '18%',
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              }
          ]
        }
    }
  },
  components: {
    appBanner: Banner,
    shopTile: shop_tile,
    carouselHeader: Header,
    vueSlick: Slick, 
    vueSlide: Slide,
    carouselFooter: Footer,
    gridBlock: grid
  },
  methods: {
    animations() {
      var banner_logo_animation = new TimelineLite();
      banner_logo_animation.timeScale(3);
      banner_logo_animation.from('#count-down-clock', 1, { ease: Bounce.easeOut, y: 250, x: -150 });
      banner_logo_animation.from('.banner-tile__item__heading', 2, { ease: Bounce.easeOut, y: 250, x: -150 });
      banner_logo_animation.from('.banner-tile__item__tagline', 1, { ease: Bounce.easeOut, y: 250, x: -150 });
    }
  },
  mounted() {
    // this.animations();
  }
}
</script>

<style lang="scss">
  :root { 
  --color-primary-light: #fff;
  --color-primary-dark: #000;
}
* {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font-size: 62.5%; 
}
body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  min-height: 100vh;
}
.black__friday__container {
   background-color: #fff;
}

//variables 
$break-tab: 63.75em;

.shop-tile-container {
  display: flex;
}
@media only screen and (max-width: $break-tab) {
    .shop-tile-container {
        display: initial;
    }
}

//slick carousel
.slick__carousel__container {
    .slick-slider {
      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
    }
    .slick-slider .slick-track, .slick-slider .slick-list {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    .slick-list {
      position: relative;
      display: block;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    .slick-track {
      position: relative;
      top: 0;
      left: 0;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .slick-track:before, .slick-track:after {
      display: table;
      content: '';
    }
    .slick-initialized .slick-slide {
      display: block;
      opacity: 0.4;
    }
    .slick-initialized .slick-slide.slick-active {
      opacity: 1;
    }
    .slick-slide {
      display: none;
      float: left;
      height: 100%;
      min-height: 1px;
    }
    *:focus {
      outline: none;
    }
    .slick-next {
      right: 0px;
    }
    .slick-prev {
        left: 0px;
    }
    .slick-prev, .slick-next {
      z-index: 10;
      font-size: 0;
      line-height: 0;
      position: absolute;
      top: 50%;
      display: block;
      width: 15%;
      height: 100%;
      padding: 0;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);
      cursor: pointer;
      color: transparent;
      border: none;
      outline: none;
      background: transparent;
    }
}
</style>
