<template>
    <section class="grid-tile-container" :class="params.layout">
        <div class="grid-tile__item-container grid-tile__item-1" :class="params.layout">
            <a :href="params.href.hrefSrc1" class="grid-tile__item__link" :class="params.videoCopy.videoClass">
                <!-- <div v-if="params.hasVideoCopy" class="grid-tile__item__video__copy-container">
                    <h2>{{ params.videoCopy.videoHeading }}</h2>
                    <img class="isspin" src="https://i1.adis.ws/i/bauer/snow-flake-white" alt="">
                    <span>{{ params.videoCopy.videoTagline }}</span>
                </div> -->
                <video class="grid-tile__item__video" playsinline autoplay muted loop>
                        <source :src="params.imgSrc1">
                        Your browser does not support the video tag.
                </video>
            </a>
        </div>
        <div class="grid-tile__item-container grid-tile__item-2"  :class="[params.layout, params.bgGradient.bgGradient2]">
            <a :href="params.href.hrefSrc2" class="grid-tile__item__link">
                <figure class="grid-tile__item__img" :style="{ 'background-image': 'url(' + params.imgSrc2 + ')' }"></figure>
            </a>
        </div>
        <div class="grid-tile__item-container grid-tile__item-3" :class="[params.layout,params.bgGradient.bgGradient3]">
            <a :href="params.href.hrefSrc3" class="grid-tile__item__link">
                <figure class="grid-tile__item__img" :style="{ 'background-image': 'url(' + params.imgSrc3 + ')' }"></figure>
            </a>
        </div>
        <div class="grid-tile__item-container grid-tile__item-4" :class="[params.layout,params.bgGradient.bgGradient4]">
            <a :href="params.href.hrefSrc4" class="grid-tile__item__link__copy">
                <div class="grid-tile__item__copy-container">
                    <div class="grid-tile__item__copy-heading">
                        <h2>{{ params.copyTile.heading }}</h2>
                    </div>
                    <div class="grid-tile__item__copy-tagline">
                        <p>{{ params.copyTile.tagline }}</p>
                    </div>
                    <div class="grid-tile__item__copy-price">
                        <span>{{ params.copyTile.price }}</span>
                    </div>
                    <div class="grid-tile__item__copy-bottom">
                        <p>{{ params.copyTile.taglineBottom }}</p>
                        <img class="isspin" src="https://i1.adis.ws/i/bauer/snow-flake-white" alt="">
                    </div>
                </div>
            </a>
        </div>
        <div class="grid-tile__item-container grid-tile__item-5" :class="[params.layout,params.bgGradient.bgGradient5]">
            <a :href="params.href.hrefSrc5" class="grid-tile__item__link">
                <figure class="grid-tile__item__img" :style="{ 'background-image': 'url(' + params.imgSrc5 + ')' }"></figure>
            </a>
        </div>
    </section>
</template>

<script>
export default { 
    props: ['params']
}
</script>

<style lang="scss">
    // variables
    $tile-copy-color: #fff;
    $bg-primary-light: #36A0DF;
    $gradient-list: #3CE0E1,#3CE0E1 ,#0EB1E2;
    $gradient-dark: #000000;
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
        letter-spacing: 2px;
        font-family: $font-style;
        font-size: $font-size;
    }
    @mixin spin-style($spin-speed, $spin-rotate) {
        -webkit-animation:spin $spin-speed linear infinite;
        -moz-animation:spin $spin-speed linear infinite;
        animation:spin $spin-speed linear infinite !important;
        @-moz-keyframes spin { 100% { -moz-transform: rotate($spin-rotate); } }
        @-webkit-keyframes spin { 100% { -webkit-transform: rotate($spin-rotate); } }
        @keyframes spin { 100% { -webkit-transform: rotate($spin-rotate); transform:rotate($spin-rotate); } }
    }
    .grid-tile {
        &-container {
            display: -ms-grid;
            display: grid;
            -ms-grid-columns: 1fr 1fr 1fr 1fr;
            -ms-grid-rows: 1fr 1fr;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
        &__item {
            &-1 {
                -ms-grid-row: 1;
                -ms-grid-row-span: 2;
                -ms-grid-column: 1;
                -ms-grid-column-span: 2;
                grid-row: 1/ -1;
                grid-column: 1/ span 2;
            }
            &-1.hero-last {
                -ms-grid-row: 1;
                -ms-grid-row-span: 2;
                -ms-grid-column: 3;
                -ms-grid-column-span: 2;
                grid-row: 1/-1;
                grid-column: 3/ span 2;
            }
            &-2 {
                -ms-grid-row: 1;
                -ms-grid-row-span: 1;
                -ms-grid-column: 3;
                -ms-grid-column-span: 1;
                grid-row: 1/ span 1;
                grid-column: 3/ span 1;
            }
            &-2.hero-last {
                -ms-grid-row: 1;
                -ms-grid-row-span: 1;
                -ms-grid-column: 1;
                -ms-grid-column-span: 1;
                grid-row: 1/ span 1;
                grid-column: 1/ span 1;
            }
            &-3 {
                -ms-grid-row: 1;
                -ms-grid-row-span: 1;
                -ms-grid-column: 4;
                -ms-grid-column-span: 1;
                grid-row: 1/ span 1;
                grid-column: 4/ span 1;
            }
            &-3.hero-last {
                -ms-grid-row: 2;
                -ms-grid-row-span: 1;
                -ms-grid-column: 1;
                -ms-grid-column-span: 1;
                grid-row: 2/ span 1;
                grid-column: 1/ span 1;
            }
            &-4 {
                -ms-grid-row: 2;
                -ms-grid-row-span: 1;
                -ms-grid-column: 3;
                -ms-grid-column-span: 1;
                grid-row: 2/ span 1;
                grid-column: 3/ span 1;
            }
            &-4.hero-last {
                -ms-grid-row: 1;
                -ms-grid-row-span: 1;
                -ms-grid-column: 2;
                -ms-grid-column-span: 1;
                grid-row: 1/ span 1;
                grid-column: 2/ span 1;
            }
            &-5 {
                -ms-grid-row: 2;
                -ms-grid-row-span: 1;
                -ms-grid-column: 4;
                -ms-grid-column-span: 1;
                grid-row: 2/ span 1;
                grid-column: 4/ span 1;
            }
            &-5.hero-last {
                -ms-grid-row: 2;
                -ms-grid-row-span: 1;
                -ms-grid-column: 2;
                -ms-grid-column-span: 1;
                grid-row: 2/ span 1;
                grid-column: 2/ span 1;
            }
            &__link {
                display: block;
                overflow: hidden;
                position: relative;
                &:hover figure{
                    transform: scale(1.1);
                }
                &:before {
                    content: "";
                    display: block;
                    padding-top: 100%;
                }
            }
            &__link.has-video-copy {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &__video__copy-container {
                position: absolute;
                z-index: 2;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                & h2 {
                   @include copy-style(akzidenz-grotesk-pro-condens, 4.5rem);
                   margin: 0;
                   max-width: 200px;
                }
                & span {
                   @include copy-style(akzidenz-grotesk-pro-condens, 2.5rem);
                }
                & img {
                    width: 50px;
                    padding: 3rem 0;
                }
            }
            &__video {
                position: absolute;
                top: 0;
                left: 0;
                object-fit: cover;
                height: 100.25%;
                width: 100.25%;
                margin: 0;
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
                top: 0;
                height: 100%;
                width: 100%;
                color: $tile-copy-color;
                line-height: 1.4;
                opacity: 1;
                padding: 1.5rem;
                position: relative;
                text-decoration: none;
                z-index: 1;
                -webkit-transition: opacity 0.3s ease;
                transition: opacity 0.3s ease;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                & h2 {
                   @include copy-style(akzidenz-grotesk-pro-condens, 4.5rem);
                   margin: 0;
                }
                & p {
                     @include copy-style(roboto, 1.5rem)
                }
                & span {
                     @include copy-style(akzidenz-grotesk-pro-condens, 4.5rem)
                }
            }
            &__copy-bottom {
                flex: 1;
                display: flex;
                justify-content: space-between;
                & p {
                    align-self: flex-end;
                }
                & img {
                    align-self: flex-end;
                    position: absolute;
                    right: 1.5rem;
                    height: 75px;
                    width: 75px;
                    @include spin-style(28s, 360deg);
                }
            }
            &__bg__to-top {
                @include gradient(top, $gradient-list)
            }
            &__bg__to-left {
                background: $bg-primary-light;
            }
            &__bg__copy-tile {
               background: $gradient-dark;
            }
        }
    }
    @media only screen and (min-width: $break-desktop) {
        .grid-tile {
            &__item {
                &__copy-container {
                    padding: 3rem 1rem;
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
                &__video__copy-container {
                    & h2 {
                        font-size: 5.5rem;
                        margin: 0;
                        max-width: 200px;
                    }
                    & span {
                        font-size: 3.5rem;
                        text-align: center;
                    }
                    & img {
                        padding: 3rem 0;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: $break-tab) {
        .grid-tile {
            &-container {
                display: -ms-grid;
                display: grid;
                -ms-grid-columns: 1fr 1fr 1fr;
                -ms-grid-rows: 1fr 1fr 1fr;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(3, 1fr);
            }
            &__item {
                &-1 {
                    -ms-grid-row: 2;
                    -ms-grid-row-span: 2;
                    -ms-grid-column: 1;
                    -ms-grid-column-span: 2;
                    grid-row: 2/ -1;
                    grid-column: 1/ span 2;
                }
                &-1.hero-last {
                    -ms-grid-row: 2;
                    -ms-grid-row-span: 2;
                    -ms-grid-column: 2;
                    -ms-grid-column-span: 2;
                    grid-row: 2/ -1;
                    grid-column: 2/ span 2;
                }
                &-2 {
                    -ms-grid-row: 1;
                    -ms-grid-row-span: 1;
                    -ms-grid-column: 3;
                    -ms-grid-column-span: 1;
                    grid-row: 1/ span 1;
                    grid-column: 3/ span 1;
                }
                &-2.hero-last {
                    -ms-grid-row: 1;
                    -ms-grid-row-span: 1;
                    -ms-grid-column: 1;
                    -ms-grid-column-span: 1;
                    grid-row: 1/ span 1;
                    grid-column: 1/ span 1;
                }
                &-3 {
                    -ms-grid-row: 2;
                    -ms-grid-row-span: 1;
                    -ms-grid-column: 3;
                    -ms-grid-column-span: 1;
                    grid-row: 2/ span 1;
                    grid-column: 3/ span 1;
                }
                &-3.hero-last {
                    -ms-grid-row: 2;
                    -ms-grid-row-span: 1;
                    -ms-grid-column: 1;
                    -ms-grid-column-span: 1;
                    grid-row: 2/ span 1;
                    grid-column: 1/ span 1;
                }
                &-4 {
                    -ms-grid-row: 1;
                    -ms-grid-row-span: 1;
                    -ms-grid-column: 1;
                    -ms-grid-column-span: 2;
                    grid-row: 1/ span 1;
                    grid-column: 1/ span 2;
                }
                &-4.hero-last {
                    -ms-grid-row: 1;
                    -ms-grid-row-span: 1;
                    -ms-grid-column: 2;
                    -ms-grid-column-span: 2;
                    grid-row: 1/ span 1;
                    grid-column: 2/ -1;
                }
                &-5 {
                    -ms-grid-row: 3;
                    -ms-grid-row-span: 1;
                    -ms-grid-column: 3;
                    -ms-grid-column-span: 1;
                    grid-row: 3/ span 1;
                    grid-column: 3/ span 1;
                }
                &-5.hero-last {
                    -ms-grid-row: 3;
                    -ms-grid-row-span: 1;
                    -ms-grid-column: 1;
                    -ms-grid-column-span: 1;
                    grid-row: 3/ span 1;
                    grid-column: 1/ span 1;
                }
            }
        }
    }
    @media only screen and (max-width: $break-mobile) {
        .grid-tile {
            &__item {
                &__copy-container {
                    padding: 1rem;
                    & h2 {
                        font-size: 3rem;
                    }
                    & p {
                        font-size: 1rem;
                    }
                    & span {
                        font-size: 3rem;
                    }
                }
                &__video__copy-container {
                    display: none;
                    & h2 {
                        font-size: 3rem;
                        margin: 0;
                        max-width: 200px;
                    }
                    & span {
                        font-size: 1.5rem;
                        text-align: center;
                    }
                    & img {
                        width: 40px;
                        padding: 1.5rem 0;
                    }
                }
                &__copy-bottom {
                    & img {
                        position: absolute;
                        right: 1.5rem;
                        height: 40px;
                        width: 40px;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: $break-mini-mobile) {
        .grid-tile {
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
                &__video__copy-container {
                    & h2 {
                        font-size: 2rem;
                        margin: 0;
                        max-width: 200px;
                    }
                    & span {
                        font-size: 1rem;
                        text-align: center;
                    }
                    & img {
                        width: 40px;
                        padding: 1rem 0;
                    }
                }
            }
        }
    }
</style>