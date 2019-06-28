<template>
    <div class="shop-tile__item-container" :class="params_shop.background">
        <a :href="params_shop.href" class="shop-tile__item__link">
            <div class="shop-tile__item__copy-container">
                <div class="shop-tile__item__copy-top">
                    <p style="color: #000;">{{ params_shop.tagLine }}</p>
                    <h2>{{ params_shop.for }}</h2>
                    <p style="font-family: akzidenz-grotesk-pro-condens;">{{ params_shop.shop }}<img class="shop-tile__item__chevron" src="https://bauer.a.bigcontent.io/v1/static/chevron-magalog" alt=""></p>
                </div>
                <!-- <div class="shop-tile__item__copy-bottom">
                    <p>{{ params_shop.shop }}</p>
                </div> -->
            </div>
            <figure class="shop-tile__item__img" :style="{ 'background-image': 'url(' + params_shop.imgSrc + ')' }"></figure>
        </a>
    </div>
</template>

<script>
export default {
    props: ['params_shop'],
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss">
    //variables
    $tile-copy-color: #fff;
    $blue-background-color-dark: #0397D2;
    $gradient-list: #3CE0E1,#3CE0E1, #0EB1E2;
    $break-desktop: 76.25em;
    $break-tab: 63.75em;
    $break-mobile: 35em;
    $break-mini-mobile: 22.5em;

    //mixins
    @mixin gradient($direction, $list) { 
        background: -ms-linear-gradient($direction, $list);
        background: -webkit-linear-gradient($direction, $list);
        background: -moz-linear-gradient($direction, $list);
        background: -o-linear-gradient($direction, $list);
        background: linear-gradient($direction, $list);  
    }
    @mixin copy-style($font-style, $font-size) {
        color: $tile-copy-color;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-family: $font-style;
        font-size: $font-size;
    }
    .shop-tile{
        &__item {
            &-container {
                flex: 1;
                @include gradient(left, $gradient-list);
            }
            &__link {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                overflow: hidden;
                position: relative;
                min-height: 250px;
                &:hover figure{
                    transform: scale(1.1);
                }
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
                background-size: cover;
                -webkit-transition: -webkit-transform 0.3s ease;
                transition: -webkit-transform 0.3s ease;
                transition: transform 0.3s ease;
                transition: transform 0.3s ease, -webkit-transform 0.3s ease;
            }
            &__copy-container {
                position: absolute;
                z-index: 2;
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-between;
                padding: 2rem;
                & h2 {
                    @include copy-style(akzidenz-grotesk-pro-condens, 4.5rem);
                    margin-top: 0;
                }
                & p {
                    @include copy-style(roboto, 1.5rem)
                }
                & span {
                    @include copy-style(akzidenz-grotesk-pro-condens, 4.5rem)
                }
            }
            &__chevron {
                width: 12px;
            }
        }
        &__item-container.bg__dark {
            background: $blue-background-color-dark;
        }
        &__item-container.bg__light {
            @include gradient(left, $gradient-list);
        }
    }
    @media only screen and (min-width: $break-desktop) {
       .shop-tile{
            &__item {
                &__copy-container {
                   & h2 {
                        font-size: 5.5rem;
                    }
                    & p {
                        font-size: 1.6rem;
                    }
                    & span {
                        font-size: 5.5rem;
                    } 
                }
            }
       }
    }
    @media only screen and (max-width: $break-tab) {
        .shop-tile {
            &__item {
                &-container {
                    width: 50%;
                    float: left;
                }
            }
        }
        .shop-tile__item-container.bg__light:nth-child(3) {
            background: $blue-background-color-dark;
        }
        .shop-tile__item-container.bg__dark:nth-child(4) {
            @include gradient(left, $gradient-list);
        }
    }
    @media only screen and (max-width: $break-mobile) {
        .shop-tile {
            &__item {
                &-container {
                    width: 50%;
                    float: left;  
                }
                &__copy-container {
                   & h2 {
                        font-size: 3rem;
                    }
                    & p {
                        font-size: 1.25rem;
                    }
                    & span {
                       font-size: 3rem;
                    } 
                }
                &__chevron {
                    width: 8px;
                }
            }
        }
    }
    @media only screen and (max-width: $break-mini-mobile) {
       .shop-tile{
            &__item {
                &__copy-container {
                   & h2 {
                        font-size: 2rem;
                    }
                    & p {
                       font-size: 1rem;
                    }
                    & span {
                        font-size: 2rem;
                    } 
                }
            }
       }
    }
</style>