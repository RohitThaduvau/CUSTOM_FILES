<template>
    <div class="carousel-tile__item-container">
        <a :href="params_carousel.href" class="carousel-tile__item__link">
            <figure class="carousel-tile__item__img" :style="{ 'background-image': 'url(' + params_carousel.imgSrc + ')' }"></figure>
        </a>
        <a v-show="params_carousel.showPrice" class="carousel-tile__item__copy-container">
            <div class="carousel-tile__item__copy-name">
                <span>{{ params_carousel.product_name }}</span>
            </div>
            <div class="carousel-tile__item__copy-sale-price" v-show="params_carousel.isSale">
                <span>{{ params_carousel.sale_price }}</span>
            </div>
            <div class="carousel-tile__item__copy-actual-price">
                <span>{{ params_carousel.actual_price }}</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: ['params_carousel']
}
</script>

<style lang="scss">
    //variables
    $tile-copy-color: #000;
    $break-desktop: 76.25em;
    $break-tab: 63.75em;
    $break-mobile: 35em;
    $break-mini-mobile: 22.5em;

    //mixins
    @mixin copy-style($font-style, $font-size) {
        color: $tile-copy-color;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-family: $font-style;
        font-size: $font-size;
    }
    .carousel-tile{
        &__item {
            &-container {
                flex: 1;
            }
            &__link {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                overflow: hidden;
                position: relative;
                min-height: 250px;
                &:before {
                    content: "";
                    display: block;
                    padding-top: 100%;
                }
            }
            &__img {
                position: absolute;
                top: 0;
                left: 0;
                height: 100.25%;
                width: 100.25%;
                margin: 0;
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: contain;
                -webkit-transition: -webkit-transform 0.3s ease;
                transition: -webkit-transform 0.3s ease;
                transition: transform 0.3s ease;
                transition: transform 0.3s ease, -webkit-transform 0.3s ease;
            }
            &__copy-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;
                line-height: 4rem; 
            }
            &__copy-name {
                @include copy-style(akzidenz-grotesk-pro-condens, 2rem);
                padding: 0 6px;
                letter-spacing: 1px;
                line-height: 2rem;
                text-align: center;
                padding-bottom: 1.5rem;
            }
            &__copy-sale-price {
                 @include copy-style(akzidenz-grotesk-pro-condens, 2.5rem);
                 color: #AFB1B4;
                 text-decoration: line-through;
            }
            &__copy-actual-price {
                 @include copy-style(akzidenz-grotesk-pro-condens, 3.5rem);
                 color: #ff1800;
            }
        }
    }
     @media only screen and (max-width: $break-tab) {
       .carousel-tile{
            &__item {
                &__copy-container {
                    line-height: 3rem; 
                }
                &__copy-name {
                    font-size: 1.35rem;
                    letter-spacing: 0;
                    line-height: 1.75rem;
                }
                &__copy-sale-price {
                    font-size: 1.75rem;
                }
                &__copy-actual-price {
                    font-size: 2.25rem;
                }
            }
       }
    }
    @media only screen and (max-width: $break-mobile) {
        .slick-initialized .slick-slide {
            opacity: 1 !important;
        }
       .carousel-tile{
            &__item {
                &__copy-container {
                    line-height: 2rem; 
                }
                &__copy-name {
                    font-size: 1.25rem;
                    letter-spacing: 0;
                    line-height: 1.5rem;
                    padding-bottom: 1rem;
                }
                &__copy-sale-price {
                    font-size: 1.25rem;
                }
                &__copy-actual-price {
                    font-size: 1.5rem;
                }
            }
       }
    }
</style>