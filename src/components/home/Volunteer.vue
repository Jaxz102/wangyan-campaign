<template>
    <main>
        <h1>{{translate.title[lang]}}</h1>
        <!-- <p>{{translate.msg[lang]}}</p> -->
        <form class="form">
            <div class="form__name">
                <input class="form__name--first" type="text" :placeholder="translate.data[0][lang]" v-model="firstName" required>
                <input class="form__name--last" type="text" :placeholder="translate.data[1][lang]" v-model="lastName" required>
            </div>
            <p class="form__text">{{translate.selectAge[lang]}}</p>
            <div class="form__age">
                <input type="radio" id="0" value="0" v-model="age" required/>
                <label for="one" :class="{selected: age==0}">14 - 17</label>
                <div class="form__age--divide"></div>
                <input type="radio" id="1" value="1" v-model="age" required />
                <label for="two" :class="{selected: age==1}">18+</label>
            </div>
            <input class="form__email" type="email" :placeholder="translate.data[2][lang]" v-model="email" required>
            <input class="form__phone" type="tel" :placeholder="translate.data[3][lang]" v-model="phone" required>
            <!-- <button class="form__submit" :class="{active: !processing, unactive: processing}" @click="submit()" type="submit">{{processing ? "...Loading" : "Submit"}}</button> -->
            <input class="form__submit form__button" :class="{active: !processing, unactive: processing}" @click="submit()" type="submit" :value="[processing ? translate.loading[lang] : translate.submit[lang]]">
        </form>
        <div class="footer"></div>
    </main>
</template>
<script>
import translate from '@/assets/translate.json'
export default {
    name: 'Volunteer',
    data(){
        return{
            age: "",
            translate: translate.volunteer,
            firstName: "",
            lastName: "",
            age: -1,
            email: "",
            phone: "",
            processing: false,

        }
    },
    props: {
        lang: 0,
    },
    methods:{
        submit(){
            if(!this.processing && this.valadility()){
                this.processing = true;
                this.$root.loadScreen(this.lang, 0);
                let obj = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    phone: this.phone,
                    age: parseInt(this.age),
                }

                fetch("https://wangyan-server.herokuapp.com/", {method: 'POST', headers:{"Content-Type": "application/x-www-form-urlencoded"}, body: JSON.stringify(obj),}).then(res => {return res.json()}).then(data => {
                    this.processing = false;
                   this.$root.loadScreen(this.lang, 0);
                })

            }

            
        },
        valadility(){
            if(document.querySelector(".form__name--first").checkValidity() && document.querySelector(".form__name--last").checkValidity() && document.querySelector(".form__email").checkValidity() && document.querySelector(".form__phone").checkValidity()){
                if(this.age == -1){
                    alert("Please select your age range")
                }else{
                    return true
                }
            };
            return false
        }

    },
    mounted(){
        var form = document.querySelector(".form");
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

         
    }

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
    // background-color: rgb(27, 27, 27);
    // background-color: #cdc9c0;
    background-color: rgb(232, 232, 232);
    color: $text-color;
    border-radius: 5px;
    
}
main{
    background-color: $background-color;
    height: fit-content;
}
h1{
    color: $primary-color;
    font-size: $heading1;
    padding-top: 40px;
}
p{
    color: $text-color;
    font-size: 20px;
    padding: 10px;
}
.form{
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;


    &__name{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & > input{
            width: calc((400px - 20px) / 2);
            @include inputBar;
        }
    }

    &__text{
        font-size: $paragraph;
        padding: 20px 0px 10px 0px;
        font-weight: 500;
    }

    &__age{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: $text-color;
        &--divide{
            width: 30px;
        }

        & > label{
            
            font-size: 20px;

        }

        & > input{
            height: 20px;
            width: 20px;
            accent-color: $primary-color;
            &:focus-within {
                color: $primary-color;
            }
            &:hover{
                cursor: pointer
            }
        }
    }

    &__email{
         @include inputBar;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 100%;
    }
    &__phone{
         @include inputBar;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 100%;
    }
    &__submit{
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        font-size: 1em;
       
    }
}
.active{
    background-color: $primary-color;
    &:hover{
        cursor: pointer;
        background-color: $primary-color-hover;
    }
}

.unactive{
    background-color: grey;
}

.selected{
    color: $primary-color;
    font-weight: 600;
}
.footer{
    height: 40px;
}

@media only screen and (max-width: 450px){
    .form{
        width: 370px;
        padding: 0px 10px;
        &__name{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & > input{
            width: calc((350px - 20px) / 2);
            @include inputBar;
        }
    }
    }
}
</style>