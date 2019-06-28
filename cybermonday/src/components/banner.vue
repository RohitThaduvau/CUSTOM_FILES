<template>
    <div>
        <section class="banner-tile__item-container">
            <a :href="params_banner.href" class="banner-tile__item__link">
                <div class="banner-tile__item__copy-container">
                   <div id="count-down-clock" class="count-down-clock__container">
                        <div class="count-down-clock__item">
                            <span class="count-down-clock__hours"></span>
                            <div class="count-down-clock__smalltext">Hours</div>
                        </div>
                        <div class="count-down-clock__item">
                            <span class="count-down-clock__minutes"></span>
                            <div class="count-down-clock__smalltext">Minutes</div>
                        </div>
                        <div class="count-down-clock__item">
                            <span class="count-down-clock__seconds"></span>
                            <div class="count-down-clock__smalltext">Seconds</div>
                        </div>
                    </div>
                    <div class="banner-tile__item__heading">
                        <img :src="imageSource" alt="">
                        <div class="banner-tile__item__subheading">
                            <p>score big with <span class="banner-tile__item__callout">20% off</span> apparel</p>
                        </div>
                    </div>
                    <div class="banner-tile__item__tagline">
                        <span>shop deals</span><img src="https://bauer.a.bigcontent.io/v1/static/chevron-magalog" alt="chevron">
                    </div>
                </div>
            </a>
        </section>
    </div>
</template>

<script>
export default {
    props: ['params_banner'],
    data() {
        return {
            counter: 1,
            imageSource: 'https://bauer.a.bigcontent.io/v1/static/Cyber-Monday-Slice-2',
        }
    },
    methods: {
        getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        },
        initializeClock(id, endtime) {
            var clock = document.getElementById(id);
            var hoursSpan = clock.querySelector('.count-down-clock__hours');
            var minutesSpan = clock.querySelector('.count-down-clock__minutes');
            var secondsSpan = clock.querySelector('.count-down-clock__seconds');
            var _this = this;
            function updateClock() {
                var t = _this.getTimeRemaining(endtime);
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
                if (_this.counter == 1) {
                    _this.imageSource = 'https://bauer.a.bigcontent.io/v1/static/Cyber-Monday-Slice-2';
                    _this.counter = 0;
                }else {
                     _this.imageSource = 'https://bauer.a.bigcontent.io/v1/static/Cyber-Monday-Slice-1';
                     _this.counter = 1;
                }

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        } 
    },
    mounted() {
        var deadline = new Date('Tue Nov 27 2018 00:00:00 GMT-0500 (Eastern Standard Time)');
        // var deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000);
        this.initializeClock('count-down-clock', deadline);
    }
}
</script>

<style lang="scss">
     //variables
    $tile-copy-color: #fff;
    $blue-background-color-light: #009CDA;
    $blue-background-color-dark: #002144;
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
    .banner-tile{
        &__item {
            &__link {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                overflow: hidden;
                position: relative;
                max-height: 55vh;
                background-color: #002943;
                min-height: 50vh;
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
                width: 100%;
                height: 100%;
                justify-content: space-around;
                align-items: center;
                padding: 0 2rem;
                & p {
                    @include copy-style(roboto, 1.6rem)
                }
                & span {
                    @include copy-style(roboto, 2.5rem)
                }
            }
            &__subheading {
                text-align: center;
            }
            &__tagline {
                img {
                    width: 16px;
                }
            }
            &__callout {
                color: #3CE0E1 !important;
                font-weight: bold;
            }
        }
    }
    .count-down-clock {
        &__container {
            color: #fff;
            display: flex;
            justify-content: space-evenly;
            font-weight: 100;
            text-align: center;
            span {
                 @include copy-style(akzidenz-grotesk-pro-condens, 2.5rem);
            }
        }
        &__item {
            padding: 0 2rem;
            line-height: 2.5rem;
        }
        &__smalltext {
	        @include copy-style(roboto, 2rem);
        }
    }
    @media only screen and (min-width: $break-desktop) {
       .banner-tile{
            &__item {
                &__copy-container {
                    & p {
                        font-size: 1.8rem;
                    }
                    & span {
                        font-size: 3rem;
                    } 
                }
                &__tagline {
                    img {
                        width: 20px;
                    }
                }
            }
       }
       .count-down-clock {
            &__item {
                padding: 0 2.5rem;
                line-height: 3rem;
            }
            &__smalltext {
                @include copy-style(roboto, 2.5rem);
            }
        }
    }
    @media only screen and (max-width: $break-mobile) {
        .banner-tile {
            &__item {
                &__copy-container {
                    & p {
                        font-size: 1.5rem;
                    }
                    & span {
                       font-size: 2.25rem;
                    } 
                }
            }
        }
        .count-down-clock {
            &__container {
                span {
                    font-size: 2.25rem;
                }
            }
            &__item {
                padding: 0 1rem;
                line-height: 2rem;
            }
            &__smalltext {
                @include copy-style(roboto, 1.5rem);
            }
        }
    }
    @media only screen and (max-width: $break-mini-mobile) {
       .banner-tile{
            &__item {
                &__copy-container {
                    & p {
                       font-size: 1.25rem;
                    }
                    & span {
                        font-size: 2rem;
                    } 
                }
            }
       }
       .count-down-clock {
            &__smalltext {
                @include copy-style(roboto, 1.25rem);
            }
        }
    }
</style>
