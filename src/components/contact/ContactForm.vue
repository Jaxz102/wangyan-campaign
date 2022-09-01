<template>
    <main class="content-padding">
        <img src="@/assets/images/markhamnight.jpeg" alt="" class="bgimg">
        <div class="bgcolor"></div>
        <div class="container">
            <section class="info">
                <h1>{{translate.inTouch[lang]}}</h1>
                <p>{{translate.email[lang]}}: yan@yanwangmarkham.ca</p>
                <section class="sm">
                    <div class="sm__icon" @click="openLink('https://www.facebook.com/yanwangmarkham')"><a href="https://www.facebook.com/yanwangmarkham" class="fa fa-facebook"></a></div>
                    <div class="sm__icon" @click="openLink('https://www.instagram.com/yanwangmarkham/?hl=en')"><a href="#" class="fa fa-instagram"></a></div>
                    <div class="sm__icon" @click="openLink('https://twitter.com/yanwangmarkham?s=11&t=eFaST5UdhWavZ0fsH1PHhA')"><a href="#" class="fa fa-twitter"></a></div>
                        
                </section>
            </section>

            <div class="form">
                <section v-if="status == 0">
                    <label for="" class="form__label">{{translate.email[lang]}}</label>
                    <input type="hidden" name="origin" :value="source[lang]">
                    <input type="email" name="email" placeholder="Eg. john@appleased.ca"  class="form__email" v-model="email" required>
                    <div style="height: 20px;"></div>
                    <label for="" class="form__label">{{translate.enterMsg[lang]}}</label>
                    <textarea name="message" form="formcontact" cols="30" rows="5"  class="form__msg" :placeholder="translate.msgPlace[lang]" v-model="content" required></textarea>
                    <button class="form__btn form__button" @click="submitMsg()">
                        
                        <div v-if="processing" class="lds-ring"><div></div><div></div><div></div><div></div></div>
                        <p v-else>{{translate.send[lang]}}</p>
                    </button>
                </section>

                <section v-else-if="status == 1">
                    <h1 class="thankmsg">{{translate.thanks[lang]}}</h1>
                </section>
            </div>
      
        </div>
    </main>
</template>
<script>
import translate from "@/assets/translate.json";

export default {
    name: "HowtovoteSimp",
    props:{
        lang: 0
    },
    data(){
        return{
            // source: ["http://localhost:3000/contact", "http://localhost:3000/ct/contact", "http://localhost:3000/zh/contact"],
            source: ["http://192.168.0.109:3000/contact", "http://192.168.0.109:3000/ct/contact", "http://192.168.0.109:3000/ct/contact"],
            translate: translate.contact,
            email: "",
            content: "",
            processing: false,
            status: 0
        }
    },
    methods: {
        openLink(social){
                window.open(social);
        },
        submitMsg(){
            this.processing = true;
            this.status = 1
            console.log(this.email)
             console.log(this.content)
             let info = {
                email: this.email,
                msg: this.content
             }
            // fetch("http://localhost:5001/email", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(info)}).then(res => {return res.json()}).then(data => {
            //     console.log(data)
            //     this.processing = false;
            //     this.status = 1
            // })
        }
    },
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';
$placeholdercolor: #729796;
$inputcolor: $nav-hover-color;
input, textarea{
    border-radius: 0;
}
.bgimg{
    position: fixed;
    height: 100vh;
    min-width: 100%;
    top: 40px;
    left: 50%;
    z-index: -2;
    transform: translateX(-50%);
    filter: brightness(80%) blur(5px) ;
}
.bgcolor{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
     background: rgb(0,125,121);
     background: linear-gradient(135deg, rgba(0,125,121,1) 0%, rgba(134,186,184,1) 100%);
    // background-color: $background-color;
     opacity: .7;
     z-index: -1;
}
main{
   
    // height: 400px;
    background: transparent;
    position: relative;
    overflow: hidden;
    // z-index: -2;
}
.container{
    display: flex;
    flex-direction: row;
    gap: 100px;
    justify-content: center;
}

.info{
    color: $background-color;
    text-align: left;
    & > h1{
        
        
        font-size: $heading1;
    }
    & > p{
        font-size: $paragraph;
        margin-top: 10px;
    }

}
.form{
    // display: flex;
    background-color: #f8fdfdc9;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    width: 600px;
    padding: 30px 40px;
    & > label{
      
    }
    & > *{
        display: block;
    }

    &__email{
        outline: none;
        border: none;
        background-color: transparent;
        padding: 10px 0px;
        width: 100%;
        font-size: $paragraph;
        transition: all .3s;
        border-bottom: solid 3px $placeholdercolor;
        color: $inputcolor;
        &::placeholder{
            color: $placeholdercolor;
        }

        &:focus{
            border-bottom: solid 3px #008f8a;
        }
    }

    &__msg{
        outline: none;
        border: none;
        background-color: transparent;
        padding: 10px 0px;
        width: 100%;
        font-size: $paragraph;
        color: $inputcolor;
        font-family: Arial, Helvetica, sans-serif;
        border-bottom: solid 3px $placeholdercolor;
        transition: all .3s;
        &::placeholder{
            color: $placeholdercolor;
        }
        &:focus{
            border-bottom: solid 3px #008f8a;
        }
    }

    &__btn{
        width: 100%;
        margin-top: 20px;
        font-size: $paragraph;
        position: relative;
    }
}


.sm{
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    margin-top: 10px;


    &__icon{
        box-sizing: border-box;
        width: 60px;
        height: 60px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;

        &:hover{
            cursor: pointer;
        }
        &:hover a{
            color: #a5e6e4;
        }

        & > a{
            box-sizing: border-box;
            color: white;
            display: block;
            font-size: 40px;
            padding: 0;
            text-align: center;
            text-decoration: none;
            width: fit-content;
            height: fit-content;
        }
    }
}

@media only screen and (max-width: 1230px){
    .form{
        width: 500px;
    }
}
@media only screen and (max-width: 1150px){
    .container{
        gap: 40px;
    }
}

@media only screen and (max-width: 1070px){
    .container{
        flex-direction: column-reverse;
        

    }
    .form{
        width: 100%;
    }
}
@media only screen and (max-width: 500px){
    .container{
        gap: 20px;
    }
    .form{
        padding: 20px 20px;
        width: calc(100% + 20px);
        transform: translateX(-10px);
    }

}

.thankmsg{
    color: $primary-color;
}







.lds-ring {
  display: inline-block;
  position: relative;
  width: 35px;
  height: 35px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 4px;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>