<template>
    <main class="main">
        <section class="info">
            <h1>Contact Info</h1>
            <div class="info__email">
                <div class="info__email--svg">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M6.125 33.333q-1.125 0-1.958-.833-.834-.833-.834-1.958V9.458q0-1.125.834-1.958.833-.833 1.958-.833h27.75q1.125 0 1.958.833.834.833.834 1.958v21.084q0 1.125-.834 1.958-.833.833-1.958.833ZM20 21.042 6.125 12.083v18.459h27.75V12.083Zm0-2.75 13.792-8.834H6.25ZM6.125 12.083V9.458v21.084Z" fill="#fff"/></svg>
                </div>
                <p class="contact__text">yan@yanwangmarkham.ca</p>
            </div>
            <div class="info__social">
                <a @click="openLink('https://www.facebook.com/yanwangmarkham')" class="fa fa-facebook"></a>
                <a @click="openLink('https://www.instagram.com/yanwangmarkham/?hl=en')" href="#" class="fa fa-instagram"></a>
                <a @click="openLink('https://twitter.com/yanwangmarkham?s=11&t=eFaST5UdhWavZ0fsH1PHhA')" href="#" class="fa fa-twitter"></a>
            </div>
        </section>
        <form id="contactform" class="form">
            <label for="" class="form__label">{{translate.email[lang]}}</label>
            <input type="email" id="emailcontact" class="form__input" placeholder="Eg. john@appleased.ca" v-model="email" required>
            <div style="height: 30px;"></div>
            <label for="" class="form__label">{{translate.enterMsg[lang]}}</label>
            <textarea name="message" class="form__input" id="" cols="30" rows="5" :placeholder="translate.msgPlace[lang]" v-model="content" required></textarea>
            <input class="form__button contact__button" :class="{active: !processing, unactive: processing}" @click="send()" type="submit" :value="[processing ? translate.sending[lang] : translate.send[lang]]">
        </form>
    </main>
</template>
<script>
import translate from "@/assets/translate.json";

export default {
    name: "Card",
    data(){
        return{
            email: "",
            content: "",
            translate: translate.contact,
            processing: false,
        }
    },  
    props:{
        lang: 0
    },
    methods:{
        send(){
            if(!this.processing && this.valadility()){
                this.processing = true;
                this.$root.loadScreen(this.lang, 1);
                const obj = {
                    email: this.email,
                    message: this.content,
                }
                // 
              
                fetch("https://wangyan-server.herokuapp.com/email", {method: 'POST', headers:{"Content-Type": "application/x-www-form-urlencoded"}, body: JSON.stringify(obj),}).then(res => {return res.json()}).then(data => {
                    this.processing = false;
                    this.$root.loadScreen(this.lang, 1);
                })
                
            } 
        },
        openLink(social){
                window.open(social);
        },
        valadility(){
            if(document.querySelector("#emailcontact").checkValidity()){
                return true
            };
            return false
        }
    },
    mounted(){
        var form = document.querySelector("#contactform");
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    }

}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';


.main{
    background-color: white;
    box-shadow: 0px 0px 4px 2px #13131376;
    //RESPONSIVE
    width: 900px;
    display: flex;
    flex-direction: row;
    margin: auto;

}

.info{
    width: 40%;
    background-color: $primary-color;
    padding: 20px 0px;
    border: none;
    padding: 40px 40px;

    &__email{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        margin-top: 10px;

        & > p{
            color: white;
        }
        &--svg{
            display: block;
            height: 32px;
            width: 32px;
            transform: scale(.8);
        }
    }

    &__social{
        display: flex;
        flex-direction: row;
        gap: 5px;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
    }

}

h1{
    color: white;
    font-size: $heading1;
    text-align: left;

}
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $background-color;
    width: 60%;
    padding: 40px 40px;
    border: none;
}

.contact__button{
    margin-right: 0;
    margin-left: auto;
    margin-top: 20px;
    font-size: $paragraph;
}

@media only screen and (max-width: 1000px){
    .main{
        width: calc(100% - 80px);
        
    }
}

@media only screen and (max-width: 970px){
    .main{
        flex-direction: column-reverse;
        align-items: center;
        width: 80%;
    }
    .info {
        width: 100%;
    }
    .form{
        width: 100%;
    }
}
@media only screen and (max-width: 500px){
    .main{
        width: 100%;
        background: none;
        gap: 40px;

    }
}
.fa {
    padding: 20px;
    font-size: 30px;
    width: 70px;
    text-align: center;
    text-decoration: none;
    // margin: 5px 2px;
  }

.fa:hover {
    opacity: 0.7;
    cursor: pointer;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-instagram {
    background: #125688;
    color: white;
  }

</style>