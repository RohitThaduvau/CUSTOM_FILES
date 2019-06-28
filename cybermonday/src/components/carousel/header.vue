<template>
    <section class="handpicked-tile__container">
        <div class="handpicked-tile__item-container handpicked-tile__item-1">
            <div class="handpicked-tile__item__snowflakes">
                <img src="https://bauer.a.bigcontent.io/v1/static/Gradient-Snowflakes" alt="">
            </div>
            <div>
                <h2>{{ title }}</h2>
                <p>{{ tagline }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title: 'all stars',
            tagline: 'trending now'
        }
    }
}
</script>

<style lang="scss">
    //variables
    $tile-copy-color: #000;
    $break-desktop: 76.25em;
    $break-tab: 48em;
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

    .handpicked-tile {
        &__item {
            &-1{
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 3rem 2rem 5rem;
            } 
            &-container {
                & h2 {
                    @include copy-style(akzidenz-grotesk-pro-condens, 4.5rem);
                }
                & p {
                    @include copy-style(roboto, 1.5rem)
                }
            }
            &__snowflakes {
                padding-left: 5%;
            }
        }
    }
    @media only screen and (min-width: $break-desktop) {
       .handpicked-tile {
            &__item {
                &-container {
                    & h2 {
                        font-size: 5.5rem;
                    }
                    & p {
                        font-size: 1.6rem;
                    }
                }
            }
       }
    }
    @media only screen and (max-width: $break-mobile) {
        .handpicked-tile {
            &__item {
                &-container {
                    & h2 {
                        font-size: 3rem;
                    }
                    & p {
                       font-size: 1rem;
                    }
                }
                &__snowflakes {
                    max-width: 9rem;
                }
            }

        }        
    }
</style>