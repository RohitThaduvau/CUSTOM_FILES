<template>
    <section class="handpicked-footer__container">
        <div class="handpicked-footer__item-container handpicked-footer__item-1">
            <a href="/en-CA/holiday-cyber-monday/?sz=40">
                <p>{{ tagline }} <img src="https://bauer.a.bigcontent.io/v1/static/Chevron-Black-Sketch" alt=""></p>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            tagline: 'See the Selection',
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

    .handpicked-footer {
        &__item {
            &-1{
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 4rem 2rem 6rem;

                a {
                    text-decoration: none;
                }
                img {
                    width: 8px;
                }
            } 
            &-container {
                & p {
                    @include copy-style(roboto, 1.75rem)
                }
            }
        }
    }
    @media only screen and (min-width: $break-desktop) {
       .handpicked-footer {
            &__item {
                &-1 img {
                    width: 8px;
                }
                &-container {
                    & p {
                        font-size: 2.0rem;
                    }
                }
            }
       }
    }
    @media only screen and (max-width: $break-mobile) {
        .handpicked-footer {
            &__item {
                &-1 img {
                    width: 6px;
                }
                &-container {
                    & p {
                       font-size: 1.5rem;
                    }
                }
            }

        }        
    }
</style>