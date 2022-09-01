<template>
    <div class="home">
        <div class="lang" v-if="lang != 0">
            <svg @click="show=!show" xmlns="http://www.w3.org/2000/svg" class="lang__icon" height="48" width="48" fill="#000"><path d="M24 44Q19.8 44 16.15 42.425Q12.5 40.85 9.8 38.15Q7.1 35.45 5.55 31.775Q4 28.1 4 23.9Q4 19.7 5.55 16.075Q7.1 12.45 9.8 9.75Q12.5 7.05 16.15 5.525Q19.8 4 24 4Q28.2 4 31.85 5.525Q35.5 7.05 38.2 9.75Q40.9 12.45 42.45 16.075Q44 19.7 44 23.9Q44 28.1 42.45 31.775Q40.9 35.45 38.2 38.15Q35.5 40.85 31.85 42.425Q28.2 44 24 44ZM31.9 16.5H39.4Q37.75 13.05 34.875 10.75Q32 8.45 28.25 7.5Q29.5 9.35 30.375 11.5Q31.25 13.65 31.9 16.5ZM19.2 16.5H28.9Q28.35 13.85 27.05 11.375Q25.75 8.9 24 7Q22.4 8.35 21.3 10.55Q20.2 12.75 19.2 16.5ZM7.6 28.45H15.55Q15.4 27.1 15.375 26.025Q15.35 24.95 15.35 23.9Q15.35 22.65 15.4 21.675Q15.45 20.7 15.6 19.5H7.6Q7.25 20.7 7.125 21.65Q7 22.6 7 23.9Q7 25.2 7.125 26.225Q7.25 27.25 7.6 28.45ZM19.75 40.5Q18.5 38.6 17.6 36.4Q16.7 34.2 16.1 31.45H8.6Q10.5 35 13 37.025Q15.5 39.05 19.75 40.5ZM8.6 16.5H16.15Q16.7 13.8 17.55 11.675Q18.4 9.55 19.7 7.55Q15.95 8.5 13.15 10.75Q10.35 13 8.6 16.5ZM24 41.1Q25.75 39.3 26.925 36.975Q28.1 34.65 28.85 31.45H19.2Q19.9 34.45 21.075 36.85Q22.25 39.25 24 41.1ZM18.65 28.45H29.4Q29.6 26.9 29.65 25.925Q29.7 24.95 29.7 23.9Q29.7 22.9 29.65 21.975Q29.6 21.05 29.4 19.5H18.65Q18.45 21.05 18.4 21.975Q18.35 22.9 18.35 23.9Q18.35 24.95 18.4 25.925Q18.45 26.9 18.65 28.45ZM28.3 40.45Q31.9 39.3 34.775 37Q37.65 34.7 39.4 31.45H31.95Q31.3 34.15 30.425 36.35Q29.55 38.55 28.3 40.45ZM32.4 28.45H40.4Q40.75 27.25 40.875 26.225Q41 25.2 41 23.9Q41 22.6 40.875 21.65Q40.75 20.7 40.4 19.5H32.45Q32.6 21.25 32.65 22.175Q32.7 23.1 32.7 23.9Q32.7 25 32.625 25.975Q32.55 26.95 32.4 28.45Z"/></svg>
            <div class="lang__select" v-if="show">
                <p @click="swapLang('/')">English</p>
                <p @click="swapLang('/ct')" v-if="lang != 1">繁體</p>
                <p @click="swapLang('/zh')" v-if="lang != 2">简体</p>
            </div>
        </div>
        <div class="home__text">
            <p class="home__text--second">{{translate.text[0][lang]}}</p>
            <h1 class="home__title">{{translate.text[1][0]}}</h1>
            <h1 v-if="lang != 0" class="home__title">{{translate.text[1][lang]}}</h1>
            <h2 class="home__subtitle">{{translate.text[2][lang]}}</h2>
            

            <section class="home__buttons">
                <button class="form__button" @click="howtoVote()">{{translate.buttons[0][lang]}}</button>
                <button class="form__button" @click="$parent.contactScroll()">{{translate.buttons[1][lang]}}</button>
            </section>
            <!-- <section class="home__buttons">
                <button class="form__button" @click="howtoVote()">{{translate.buttons[2][lang]}}</button>
                <button class="form__button" @click="$parent.joinScroll()">{{translate.buttons[3][lang]}}</button>
            </section> -->
        </div>
        
        <img src="@/assets/images/portrait.png" alt="">
    </div>
</template>

<script>
import translate from '@/assets/translate.json';

export default {
    name: "Start",
    data(){
        return{
            translate: translate.intro,
            show: false,
        }
    },
    methods:{
        howtoVote(){
            // window.open("https://www.markham.ca/wps/portal/home/about/2022-Municipal-Election/Ways-to-Vote/02-Ways-To-Vote")
            // window.open("https://yanwangmarkham.ca/House.php")
            this.$router.push("/how-to-vote")
            if(this.lang == 1){
                this.$router.push("/ct/how-to-vote")
            }else if(this.lang == 2){
                this.$router.push("/zh/how-to-vote")
            }else{
                this.$router.push("/how-to-vote")
            }
        },
        swapLang(link){
            this.$router.push(link);
            window.scrollTo(0,0);
        }
    },
    props: {
        lang: 0,
        
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.lang{
    position: absolute;
    top: 50px;
    transform: translateY(-50%);
    right: 40px;
 
    &__icon{
        transform: scale(.6);
        

        &:hover{
            cursor: pointer;
        }
    }

    &__select{
        background-color: white;
        position: absolute;
        width: 80px;
        z-index: 3;
        height: fit-content;
        right: 0;
        border-radius: 5px;
    

        &:after{
            position: absolute;
            top: -7px;
            right: 15px;
            width: 0; 
            height: 0; 
            border-left: 8px solid transparent;
            border-right: 8px solid transparent; 
            border-bottom: 8px solid rgb(255, 255, 255);
            content: '';
            display: block;
            z-index: 2;
        }

        & > p{
            padding: 5px 0px;
            border-radius: 5px;
            font-size: 16px;
            color: black;

            &:hover{
                cursor: pointer;
                 color: $primary-color;
                
            }
        }

    }

}
.home{
    width: 100%;
    height: 600px;
    background: $background-color;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    & > img{
        display: block;
        width: 420px;
        height: auto;
        align-self: flex-end;

    }

    &__text{
        // position: absolute;
        // z-index: 4;
        // top: 50%;
        // left: 10%;
        transform: translateY(-20px);
        height: fit-content;
        padding-left: 40px;
        min-width: 350px;
        background-color: $background-color;
        


        &--first{
            color: $text-color;
            font-size: 3.13em;
            font-weight: 100;
            line-height: 60px;
        }

        &--second{
            color: $text-color;
            font-size: 3.13em;
            font-weight: 600;
            line-height: 50px;
        }
    }

    &__title{
        color: $primary-color;
        font-size: 5em;
        font-weight: 600;
        
    }

    &__subtitle{
        color: $text-color;
        font-size: 2.5em;
        font-weight: 200;
        line-height: 50px;
    }

    &__buttons{
        display: flex;
        flex-direction: row;
        height: fit-content;
        margin: auto;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-top: 30px;
        

        // &--vote{
        //     @include button;
        //     background-color: $primary-color;
        //     color: white;
        //     border: none;

        //     &:hover{
        //         cursor: pointer;
        //         background-color: $primary-color-hover;
        //     }
            
 
        // }

        // &--contact{
        //     @include button;
        //     background: none;
        //     border: solid 3px $text-color;
        //     color: $text-color;

        //     &:hover{
        //         cursor: pointer;
        //         background: rgba(255, 255, 255, 0.492);
        //     }
        // }
    }


}

@media screen and (max-width: 1000px) {
    .home{
        flex-direction: column-reverse;
        gap: 0px;
        justify-content: center;
        align-items: center;
        height: fit-content;
        
        &__text{
        //    background: rgb(37,37,37);
            padding: 20px;
            transform: translateY(-50px);

        }

        & > img{
            display: block;
            width: 300px;
            align-self: center;
            margin-top: 10px;
        }

        // &__buttons{
        // display: flex;
        // flex-direction: row;
        // margin: auto;
        // justify-content: center;
        // align-items: center;
        // gap: 30px;
        // margin-top: 20px;

        // }
    }

    .intro{
    &__img{
        transform: translateX(-150px);
  
    }
    }
}

@media screen and (max-width: 500px) {
.home__buttons{
        display: flex;
        flex-direction: column;
        margin: auto;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 20px;

        }
}
</style>