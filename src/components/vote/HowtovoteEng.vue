<template>
    <main class="content-padding">
        <!-- <h1 class="instructions__title">{{translate.header[0][lang]}}</h1>
        <h2 class="instructions__sub">Choose the voting option that works best for you</h2> -->
        
        <section class="option">
            <h1 class="option__title">{{translate.option1.title[lang]}}</h1>
            <section class="option__content">
                <img src="https://www.markham.ca/wps/wcm/connect/markham/6e69f998-a13c-4ee5-a460-f4b551b2b374/1/Mobile+Device+with+voting+icon+inside.png?MOD=AJPERES" alt="">
                <ul>
                    <li>{{translate.option1.bullet[0][lang]}}</li>
                    <li>{{translate.option1.bullet[1][lang]}}</li>
                    <li>{{translate.option1.bullet[2][lang]}}</li>
                    <!-- <a href="https://markham.bibliocommons.com/locations/?_ga=2.113146124.965856506.1649172318-1956973357.1649172318">Operating Hours</a> -->
                </ul>
                
            </section>
            
        </section>
        <div class="divider"></div>
        <section class="option">
            <h1 class="option__title">{{translate.option2.title[lang]}}</h1>
            <section class="option__content">
                <img src="https://www.markham.ca/wps/wcm/connect/markham/6e69f998-a13c-4ee5-a460-f4b551b2b374/2/Voter+Ballot+Box.png?MOD=AJPERES" alt="">
                <ul>
                    <li>{{translate.option2.bullet[0][lang]}}</li>
                    <li>{{translate.option2.bullet[1][lang]}}</li>
                    <!-- <li>Saturday, October 22 from 10 AM to 8 PM</li>
                    <li>Vote in person at any Voting Place across Markham</li> -->
                </ul>
                
            </section>
            
        </section>
         <div class="divider"></div>
        <section class="option">
            <h1 class="option__title">{{translate.option3.title[lang]}}</h1>
            <section class="option__content">
                <img src="https://www.markham.ca/wps/wcm/connect/markham/6e69f998-a13c-4ee5-a460-f4b551b2b374/1/Mobile+Device+with+voting+icon+inside.png?MOD=AJPERES" alt="">
                <ul>
                    <li>{{translate.option3.bullet[0][lang]}}</li>
                    <li>{{translate.option3.bullet[1][lang]}}</li>
                    <li>{{translate.option3.bullet[2][lang]}}</li>
                </ul>
                
            </section>
            
        </section>
         <div class="divider"></div>
        <section class="option">
            <h1 class="option__title">{{translate.option4.title[lang]}}</h1>
            <section class="option__content">
                <img src="https://www.markham.ca/wps/wcm/connect/markham/6e69f998-a13c-4ee5-a460-f4b551b2b374/4/Markham+Civic+Centre+Icon.png?MOD=AJPERES" alt="">
                <ul>
                    <li>{{translate.option4.bullet[0][lang]}}</li>
                    <li>{{translate.option4.bullet[1][lang]}}<span> Markham Civic Centre, 101 Town Centre Blvd. Markham, ON L3R 9W3 </span>{{translate.option4.bullet[2][lang]}}</li>
                    <li>{{translate.tele[lang]}}: (905) 477-7000</li>
                </ul>
                
            </section>
        </section>
        <h1></h1>
        <button class="startvote" @click="voteLink()">Register to Vote</button>
    </main>
</template>

<script>
// @ is an alias to /src

import translate from '@/assets/translate.json';
export default {
  name: 'HometovoteSeng',
  components: {

  },
    data(){
        return{
            translate: translate.howtovote,
            headingTitle: ""
        }
    },  
    methods:{
        voteLink(){
            window.open("https://www.electionsmarkham.ca/en/voting/register-to-vote/")
        }
    },
  props:{
    lang: 0,
  },

}
</script>
<style lang="scss" scoped>
@import "@/assets/styles.scss";

$howtopad: 60px;
.bar{
    height: 80px;
    visibility: hidden;
}
.divider{
    height: 2px;
    background-color: $primary-color;
    width: 100%;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 25px;
    // transform: scaleX(1.1);
}

.instructions{
    background-color: $background-color;
    height: fit-content;
    // padding: 50px 80px;


    &__title{
        color: $primary-color;
        font-size: 3em;
        text-align: left;
        padding: 0px 40px 0px 0px;
        margin: auto;
        font-weight: 600;
    }

    &__sub{
        color: $primary-color;
        font-size: 25px;
        text-align: left;
        padding: 10px 0px;
        margin: auto;
        font-weight: 400;
    }
}
// .option__title{
//      color: $primary-color;
//         font-size: 2.5em;
//         font-weight: 600;
// }
.option{
    padding: 0px 0px;

    &__title{
        color: $primary-color;
        font-size: $heading1;
        font-weight: 600;
        text-align: left;
        padding-bottom: 20px;
    }
}

.option__content{
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
    height: fit-content;

    & > img{
        width: 125px;
    }

    & > ul{
        list-style:inside;
        text-align: left;
        font-size: 20px;

        & > li{
            & > span{
                font-weight: 600;
                color: $primary-color;
            }
        }
    }
}

.startvote{
    @include button;
    background-color: $primary-color;
    border: none;
    outline: none;
    margin-top: 25px;
    color: white;
    width: fit-content;
    padding: 10px 20px;
    font-size: $paragraph;

    &:hover{
        background-color: #015d5a;
        cursor: pointer;
    }

}

@media screen and (max-width: 800px){
    .instructions{
        // padding: 50px 30px;
    }
}
@media screen and (max-width: 650px){
    .option__content{
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    height: fit-content;
    }
}
</style>
