<template>
    <section class="bg">
        <section class="contact">
        <!-- <h1 class="contact__title">Contact Us</h1> -->
        <!-- <div class="modal"> -->
            <!-- <div class="info">
            <h1 class="info__title">Contact Info</h1>
            <div class="info__text">
                
                <p class="info__text--email">Email: yan@wangyan.ca</p>
                <div class="info__text--social">
                <a @click="openLink('https://www.facebook.com/yanwangmarkham')" class="fa fa-facebook"></a>
                <a @click="openLink('https://www.instagram.com/yanwangmarkham/?hl=en')" href="#" class="fa fa-instagram"></a>
                <a @click="openLink('https://twitter.com/yanwangmarkham?s=11&t=eFaST5UdhWavZ0fsH1PHhA')" href="#" class="fa fa-twitter"></a>
                </div>
            </div>
            </div>
            <form class="form"  id="contactform">
                <h1 class="form__title">{{translate.inTouch[lang]}}</h1>
                <input type="email" id="emailcontact" class="form__email" :placeholder="translate.email[lang]" v-model="email" required>
                <textarea class="form__msg" :placeholder="translate.enterMsg[lang]" v-model="content" required></textarea>
                <input class="form__submit" :class="{active: !processing, unactive: processing}" @click="send()" type="submit" :value="[processing ? translate.sending[lang] : translate.send[lang]]">
            </form> -->
            <Card :lang="lang"/>

        <!-- </div> -->
        

        
        </section>
    </section>
  
</template>

<script>
import translate from "@/assets/translate.json";
import Card from "@/components/forms/Card.vue";

export default {
    name: "Contact",
    data(){
        return{
            email: "",
            content: "",
            translate: translate.contact,
            processing: false,
        
        }
    },
    components: {
        Card
    },
    props:{
        lang: 0
    },
    
      

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

@mixin inputBar{
    display: block;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 20px 30px;
    // background-color: rgba(58, 58, 58, 0.463);
    background-color: rgba(181, 177, 169, 0.499);
    color: $text-color;
    border-radius: 5px;
    
}
.bg{
    width: 100%;
    height: fit-content;
   
    background-image: url('@/assets/images/mapblack.jpeg');
    background-size: cover;
    background-position: center;


    position: relative;
    

    
}
.contact{
    width: 100%;
    height: 100%;
    // background-color: rgba(28, 28, 28, 0.191);
    background-color: #007d7932;
     padding: 50px 0px;

    &__title{
        color: white;
        font-size: $heading1;
        padding: 0px 0px 30px 0px;
    }

}

// .modal{
//     width: 900px;
//     margin: auto;
//     // height: fit-content;
//     // background-color: #bab6ae;
//     // margin: auto;
//     // display: flex;
//     // flex-direction: row;
//     // justify-content: space-between;
//     // align-items: center;
//     // transform: translateX(20px);
// }


// .info{
//     color: white;
//     // background-color: rgba(255, 255, 255, 0.412);
//     background-color: $primary-color;
//     // box-shadow: 0px 0px 10px 1px rgba(255, 221, 136, 0.5);
//     // border: solid 5px $primary-color;
//     // position: absolute;
//     // top: 50%;
//     // left: 25%;
//     // transform: translate(-50%, -50%);
//     padding: 20px 30px;
//     // border-radius: 5px;
//     box-shadow: 3px 3px 4px 2px #13131376;
//     transform: translateX(-50px);


//     height: fit-content;
//     width: 400px;

//     &__title{
//         font-weight: 600;
//         font-size: $heading1;
//         text-align: left;
//         color: white;
        
//     }

//     &__text{
//         font-size: 25px;
//         text-align: left;
//         padding-top: 10px;

//         &--social{
//             display: flex;
//             flex-direction: row;
//             margin-top: 20px;
//             gap: 10px;
            
//             & > a{
//             display: block;
//         }
//         }

        
//     }
// }

// .form{
//     // position: absolute;
//     background-color: $background-color;
//     // box-shadow: 0px 0px 10px 1px rgba(255, 221, 136, 0.5);
//     // border: solid 5px $primary-color;
//     width: 500px;
//     // top: 50%;
//     // right: 25%;
//     // transform: translate(40%, -50%);
    
//     border-radius: 5px;
//     padding: 40px;

//     &__title{
//         font-size: $heading1;
//         text-align: left;
//         padding-bottom: 20px;
//         color: $primary-color;

//     }
//     &__email{
//         @include inputBar;
//         margin: auto;
//         width: 100%;
//     }

//     &__msg{
//         display: block;
//         outline: none;
//         border: none;
//         color: $text-color;
//         // background-color: rgba(58, 58, 58, 0.463);
//         background-color: rgba(181, 177, 169, 0.499);
//         padding: 20px 30px;
//         font-size: 20px;
//         border-radius: 5px;
//         font-family: Arial, Helvetica, sans-serif;
//         width: 100%;
//         height: 150px;
//         margin-left: auto;
//         margin-right: auto;
//         margin-top: 20px

//     }


//     &__submit{
//         @include button;
//         margin: auto;
//         outline: none;
//         border: none;
//         margin-top: 20px;
//         background-color: $primary-color;
//         color: white;
//         border-radius: 5px;

//         &:hover{
//             cursor: pointer;
//             background-color: $primary-color-hover;
//         }

//     }

// }

// .active{
//     background-color: $primary-color;
//     &:hover{
//         cursor: pointer;
//         background-color: $primary-color-hover;
//     }
// }

// .unactive{
//     background-color: grey;
// }

// @media only screen and (max-width: 1000px) {

//     .bg{
//         height: 700px;
//     }

//     // .modal{
//     //     width: 600px;
//     //     height: 460px;
//     //     position: relative;
//     //     transform: translateX(50px);
//     // }
//     .info{

//     position: static;
//     transform: translateX(-120px);
//     padding: 20px 20px;
//     width: 300px;
//     border-radius: 5px;

// }

//     .form{
//     position: absolute;
//     right: 0;
//     width: 400px;
//     height: 100%;
//     transform: none;
//     padding: 40px;
//     // margin-left: auto;
//     // margin-right: auto;
//     // margin-top: 30px;


//     }   
// }

// @media only screen and (max-width: 760px) {

//     .bg{
//         height: fit-content;
//     }

//     .contact{
//         &__title{
//             padding-bottom: 0;
//         }
//     }
//     // .modal{
//     //     display: flex;
//     //     flex-direction: column-reverse;
//     //     background: none;
//     //     position: static;
//     //     transform: none;
//     //     height: fit-content;
//     //     justify-content: center;
//     //     align-items: center;
//     //     margin-left: auto;
//     //     margin-right: auto;
//     //     width: 100%;
//     //     gap: 20px;
//     //     padding: 0;
//     // }
//     .info{
//     width: 100%;
//     position: static;
//     transform: none;
//     padding: 20px 50px;
//     transform: none;

//     border-radius: 0px;
//     // width: 400px;
//     &__text{
//         font-size: 20px;
//     }

// }

//     .form{
//         transform: none;
//     position: static;
   
//     width: 360px;
//     transform: none;
//     padding: 30px;
//     margin-left: auto;
//     margin-right: auto;
//     margin-top: 30px;

 

//     }   
// }

// @media only screen and (max-width: 400px) {

//     .contact{
//         &__title{
//             padding-bottom: 30px;
//         }
//     }

//     // .modal{
//     //     width: 100%;
//     // }
//     .info{
//         width: 100%;
//         border-radius: 0;
//     }
//     .form{
//         width: 360px;
//         margin: auto;
//     }
// }
</style>