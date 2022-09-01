<template>
    <div class="home" :style="{'background-image': 'url(' + require('@/assets/images/Homepage_banner.jpg') + ')'}">
        
      
        <div class="topnav">
            <img src="@/assets/images/LogoBanner.png" alt="" class="logobanner">
            <section class="topnav__nav">
                <p type="normal" @click="navTo('/how-to-vote')">{{translate.buttons[0][lang]}}</p>
                <!-- <p @click="navTo('/how-to-vote')">{{translate.buttons[2][lang]}}</p> -->
                <p type="normal" @click="navTo('/support')">{{translate.buttons[1][lang]}}</p>
                <p type="support" @click="navTo('/contact')">{{translate.buttons[3][lang]}}</p>
                 <img @click="accessibility()" class="topnav__nav--access" src="https://www.markham.ca/wps/wcm/connect/markham/cb8656ac-dabe-4c3c-a68a-053515f17b76/eA_Icon-gray.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2QD4H901OGV160QC8BLCRJ1001-cb8656ac-dabe-4c3c-a68a-053515f17b76-m.O7ozf" alt="accessiblity" >
                <div class="lang" v-if="lang != 0">
                     <svg @click="show=!show" xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="lang__icon" fill="#FFF"><path d="M12 21.5q-1.95 0-3.688-.75-1.737-.75-3.025-2.038Q4 17.425 3.25 15.688 2.5 13.95 2.5 12q0-1.975.75-3.7t2.037-3.013Q6.575 4 8.312 3.25 10.05 2.5 12 2.5q1.975 0 3.7.75t3.012 2.037Q20 6.575 20.75 8.3q.75 1.725.75 3.7 0 1.95-.75 3.688-.75 1.737-2.038 3.024Q17.425 20 15.7 20.75q-1.725.75-3.7.75Zm0-1.525q.775-1 1.288-2.037.512-1.038.862-2.263h-4.3q.35 1.25.863 2.287Q11.225 19 12 19.975Zm-1.925-.275q-.575-.825-1.037-1.875-.463-1.05-.713-2.15h-3.4q.8 1.55 2.125 2.613 1.325 1.062 3.025 1.412Zm3.85 0q1.7-.35 3.025-1.412 1.325-1.063 2.125-2.613h-3.4q-.3 1.1-.75 2.162-.45 1.063-1 1.863ZM4.3 14.175h3.725q-.1-.55-.15-1.088-.05-.537-.05-1.087 0-.55.05-1.088.05-.537.15-1.087H4.3q-.15.5-.225 1.05Q4 11.425 4 12t.075 1.125q.075.55.225 1.05Zm5.225 0h4.95q.1-.55.15-1.075.05-.525.05-1.1 0-.575-.05-1.1-.05-.525-.15-1.075h-4.95q-.1.55-.15 1.075-.05.525-.05 1.1 0 .575.05 1.1.05.525.15 1.075Zm6.45 0H19.7q.15-.5.225-1.05Q20 12.575 20 12t-.075-1.125q-.075-.55-.225-1.05h-3.725q.1.55.15 1.087.05.538.05 1.088t-.05 1.087q-.05.538-.15 1.088Zm-.3-5.85h3.4q-.8-1.575-2.112-2.613-1.313-1.037-3.038-1.437.575.875 1.025 1.912.45 1.038.725 2.138Zm-5.825 0h4.3q-.35-1.25-.887-2.313Q12.725 4.95 12 4.025q-.725.925-1.262 1.987-.538 1.063-.888 2.313Zm-4.925 0h3.4q.275-1.1.725-2.138.45-1.037 1.025-1.912-1.75.4-3.05 1.437-1.3 1.038-2.1 2.613Z"/></svg>
                    <!-- <svg @click="show=!show" xmlns="http://www.w3.org/2000/svg" class="lang__icon" height="28" width="28" fill="#fff"><path d="M24 44Q19.8 44 16.15 42.425Q12.5 40.85 9.8 38.15Q7.1 35.45 5.55 31.775Q4 28.1 4 23.9Q4 19.7 5.55 16.075Q7.1 12.45 9.8 9.75Q12.5 7.05 16.15 5.525Q19.8 4 24 4Q28.2 4 31.85 5.525Q35.5 7.05 38.2 9.75Q40.9 12.45 42.45 16.075Q44 19.7 44 23.9Q44 28.1 42.45 31.775Q40.9 35.45 38.2 38.15Q35.5 40.85 31.85 42.425Q28.2 44 24 44ZM31.9 16.5H39.4Q37.75 13.05 34.875 10.75Q32 8.45 28.25 7.5Q29.5 9.35 30.375 11.5Q31.25 13.65 31.9 16.5ZM19.2 16.5H28.9Q28.35 13.85 27.05 11.375Q25.75 8.9 24 7Q22.4 8.35 21.3 10.55Q20.2 12.75 19.2 16.5ZM7.6 28.45H15.55Q15.4 27.1 15.375 26.025Q15.35 24.95 15.35 23.9Q15.35 22.65 15.4 21.675Q15.45 20.7 15.6 19.5H7.6Q7.25 20.7 7.125 21.65Q7 22.6 7 23.9Q7 25.2 7.125 26.225Q7.25 27.25 7.6 28.45ZM19.75 40.5Q18.5 38.6 17.6 36.4Q16.7 34.2 16.1 31.45H8.6Q10.5 35 13 37.025Q15.5 39.05 19.75 40.5ZM8.6 16.5H16.15Q16.7 13.8 17.55 11.675Q18.4 9.55 19.7 7.55Q15.95 8.5 13.15 10.75Q10.35 13 8.6 16.5ZM24 41.1Q25.75 39.3 26.925 36.975Q28.1 34.65 28.85 31.45H19.2Q19.9 34.45 21.075 36.85Q22.25 39.25 24 41.1ZM18.65 28.45H29.4Q29.6 26.9 29.65 25.925Q29.7 24.95 29.7 23.9Q29.7 22.9 29.65 21.975Q29.6 21.05 29.4 19.5H18.65Q18.45 21.05 18.4 21.975Q18.35 22.9 18.35 23.9Q18.35 24.95 18.4 25.925Q18.45 26.9 18.65 28.45ZM28.3 40.45Q31.9 39.3 34.775 37Q37.65 34.7 39.4 31.45H31.95Q31.3 34.15 30.425 36.35Q29.55 38.55 28.3 40.45ZM32.4 28.45H40.4Q40.75 27.25 40.875 26.225Q41 25.2 41 23.9Q41 22.6 40.875 21.65Q40.75 20.7 40.4 19.5H32.45Q32.6 21.25 32.65 22.175Q32.7 23.1 32.7 23.9Q32.7 25 32.625 25.975Q32.55 26.95 32.4 28.45Z"/></svg> -->
                    <div class="lang__select" v-if="show">
                        <p @click="swapLang('/')">English</p>
                        <p @click="swapLang('/ct')" v-if="lang != 1">繁體</p>
                        <p @click="swapLang('/zh')" v-if="lang != 2">简体</p>
                    </div>
                </div>
            </section>
            
        </div>
        
       

        <section class="banner">
            <main class="bannertextcontainer">
                <p class="banner__text">{{translate.text[0][lang]}}</p>
                <h1 class="banner__title">YAN WANG</h1>
                <p class="banner__text">{{msg[lang]}}</p>
                <section class="banner__action">
                    <button class="action_button" @click="navTo('/how-to-vote')">{{translate.buttons[0][lang]}}</button> 
                    <button class="action_button" @click="navTo('/support')">{{translate.buttons[1][lang]}}</button>
                    <!-- <button class="action_button" @click="$parent.contactScroll()">{{translate.buttons[2][lang]}}</button> -->
                   <button class="action_button" @click="navTo('/contact')">{{translate.buttons[3][lang]}}</button> 
                </section>
            </main>
        </section>
        <img src="@/assets/images/portrait.png" alt="" class="portrait">
        <!-- <div class="home__text">
            <p class="home__text--second">{{translate.text[0][lang]}}</p>
            <h1 class="home__title">{{translate.text[1][0]}}</h1>
            <h1 v-if="lang != 0" class="home__title">{{translate.text[1][lang]}}</h1>
            <h2 class="home__subtitle">{{translate.text[2][lang]}}</h2>

            <section class="home__buttons">
                <button class="form__button" @click="howtoVote()">{{translate.buttons[0][lang]}}</button>
                <button class="form__button" @click="$parent.contactScroll()">{{translate.buttons[1][lang]}}</button>
            </section>
            <section class="home__buttons">
                <button class="form__button" @click="howtoVote()">{{translate.buttons[2][lang]}}</button>
                <button class="form__button" @click="$parent.joinScroll()">{{translate.buttons[3][lang]}}</button>
            </section>
        </div> -->
        
        <!-- <img src="@/assets/images/portrait.png" alt=""> -->
    </div>
</template>

<script>
import translate from '@/assets/translate.json';
// import LogoBanner from '@/components/LogoBanner.vue'

export default {
    name: "Start",
    data(){
        return{
            translate: translate.intro,
            show: false,
            msg: ["Together, we will make this happen", "我们将共同实现这一目标", "为你而来，为你服务"]
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
        navTo(link){
            if(this.lang == 1){
                this.$router.push(`/ct${link}`);
            }else if(this.lang == 2){
                this.$router.push(`/zh${link}`);
            }else{
                this.$router.push(link);
            }
            
        },
        swapLang(link){
            this.$router.push(link);
            window.scrollTo(0,0);
        },
        accessibility(){
         window.open("https://www.essentialaccessibility.com/cityofmarkham/?utm_source=cityofmarkhamhomepg&utm_medium=iconsmall&utm_term=eachannelpage&utm_content=footer&utm_campaign=cityofmarkham")
    }
    },
    props: {
        lang: 0,
        
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';
.logobanner{
    display: block;
    width: 300px;
    // margin: auto;
    // margin-top: 10px;
    user-select: none;
    filter: drop-shadow(0px 0 1px #1717170a);
    
    &:hover{
        filter: brightness(110%);
        cursor: pointer;
    }

}
.topnav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 30px;


    &__nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        // padding-right: 50px;
        color: white;
        gap: 40px;
        font-size: $paragraph;

        & > p{
            display: block;
            &:hover{
                cursor: pointer;
            }
        }

        & > p[type="normal"]{
            &:hover{
                color: $primary-color;
            }
        }
        
        & > p[type="support"]{
            background-color: $primary-color;
            padding: 5px 20px;
            &:hover{
                background-color: $primary-color-hover;
            }
        }

        &--access{
            width: 60px;
            // position: absolute;
            // top: 50%;
            // right: 40px;
            // transform: translateY(-50%);

            &:hover{
                cursor: pointer;
            }
        }

    }

}
.lang{
    // position: absolute;
    // top: 40px;
    // transform: translateY(-50%);
    // right: 20px;
    position: relative;
    width: 24px;
    height: 24px;
    z-index: 4;
 
    &__icon{
        position: absolute;
        // transform: translate(-10px, -10px) scale(.6);
        
        top: 0;
        left: 0;
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
        right: -10px;
        border-radius: 5px;
        top: 33px;
    

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
    position: relative;
    background: $background-color;
    background-size: cover;
    background-position: center bottom;
    overflow: hidden;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    gap: 40px;
    

}
.portrait{
    position: absolute;
    right: 50%;
    bottom: -50px;
    transform: translate(110%, 0px);

}
.bannertextcontainer{
    position: absolute;
    width: 506px;
    top: 50%;
    left: 53%;
    transform: translate(-100%, -52%);

}
.banner{
    width: 100%;
    height: 250px;
    background-color: #007d79bf;
    color: white;
    margin-top: 40px;
    position: relative;

    &__text{
        font-size: 30px;
    }
    &__title{
        font-size: 90px;
        line-height: 80px;
    }
    &__action{
        display: none;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        margin: auto;
        justify-content: center;
        margin-top: 20px;
        & > button{
            display: block;
            width: 200px;
            padding: 10px 20px;
            border: solid 2px white;
            color: white;
            font-size: 20px;
            background-color: none;
            transition: all .3s;

            &:hover{
                cursor: pointer;
                background-color: #015d5a;
            }
        }
    }
}


@media only screen and (max-width: 1000px){
    .home{
        height: 820px;
    }
    .portrait{
        position: absolute;
        right: 50%;
        bottom: -50px;
        transform: translate(50%, -250px);
        width: 380px;
    }
    .topnav__nav{
        & > p{
            display: none;
        }
    }
    .banner{
        z-index: 2;
        position: absolute;
        bottom: 20px;
        height: 300px;
        background-color: $primary-color;

        &__action{
            display: flex;
        }

    }
    .bannertextcontainer{
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -51%);
    }
}
@media only screen and (max-width: 720px){
    .home{
        height: 900px;
    }
    .portrait{
        position: absolute;
        right: 50%;
        bottom: -50px;
        transform: translate(50%, -350px);
        width: 380px;
    }
    .banner{
        height: 420px;
        &__action{
            flex-direction: column;
            align-items: center;

        }
    }
}
@media only screen and (max-width: 600px){
    // .home{
    //     height: 960px;
    // }
    .portrait{

        transform: translate(50%, -320px);

    }
    .banner{

        height: 400px;


        &__text{
            font-size: 30px;
        }
        &__title{
            font-size: 70px;
            line-height: 70px;
        }

        &__action{
            flex-direction: column;
            width: fit-content;

        }


    }
}
@media only screen and (max-width: 450px){
    .banner{

        height: 380px;


        &__text{
            font-size: 20px;
        }
        &__title{
            font-size: 60px;
            line-height: 60px;
        }

        &__action{
            flex-direction: column;
            width: fit-content;

        }


    }
}



@media only screen and (min-width: 1400px){
    .home{
        background-position: 0px 70%;
    }
}
@media only screen and (min-width: 1500px){
    .home{
        background-position: 0px 60%;
    }
}
@media only screen and (min-width: 1600px){
    .home{
        background-position: 0px 50%;
    }
}
@media only screen and (min-width: 1700px){
    .home{
        background-position: 0px 40%;
    }
}


</style>