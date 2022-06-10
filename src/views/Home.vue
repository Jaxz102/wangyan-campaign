<template>
    <Navbar />
    <div class="home">
        <div class="home__text">
            <!-- <p class="home__text--first">New Possibilities</p> -->
            <p class="home__text--second">{{translate.text[0][lang]}}</p>
            <h1 class="home__title">{{translate.text[1][lang]}}</h1>
            <h2 class="home__subtitle">{{translate.text[2][lang]}}</h2>

            <section class="home__buttons">
                <button class="home__buttons--vote">{{translate.buttons[0][lang]}}</button>
                <button class="home__buttons--contact" @click="contactScroll()">{{translate.buttons[1][lang]}}</button>
            </section>
        </div>
        
        <img src="../assets/images/portrait.png" alt="">
    </div>
    
    
    <section class="intro">
        <img src="../assets/images/banner1.jpeg" class="intro__img" alt="">
        <div class="intro__bg"></div>
        <div class="intro__story">
            <h1 class="intro__story--title">Yan's Story</h1>
            <p class="intro__story--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus. Nisl nisi scelerisque eu ultrices vitae auctor. Diam phasellus vestibulum lorem sed. Mauris nunc congue nisi vitae suscipit tellus mauris a. Fusce ut placerat orci nulla.</p>
        </div>
    </section>

    <div class="message1">
        <h1>VOTE FOR WANG YAN!</h1>
    </div>
    <section class="contact">
        <h1>Contact Us</h1>
        <input type="email" class="contact__email" placeholder="Your Email">
        <textarea placeholder="Enter your Message"></textarea>
        <button class="contact__submit">Submit</button>

        <div class="contact__info">
            <p class="contact__info--num">Phone: 555-555-555</p>
            <p class="contact__info--email">Email: wangyan@gmail.com</p>
        </div>
        
    </section>
    
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import translate from "@/assets/translate.json"
export default {
  name: 'HomeView',
  components: {
    Navbar
  },
  data(){
      return{
          lang: 0,
          translate: translate.intro,
      }
  },    
  methods: {
      navTo(link){
          this.$router.push(link);
      },
      contactScroll(){
          document.querySelector('.message1').scrollIntoView({
            behavior: 'smooth'
        });
      }
  },
  mounted(){
      this.lang = this.$store.state.lang;
      console.log("HOME MOUNTED")
      
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles.scss";

@mixin button{
    display: block;
    width: 200px;
    height: 50px;
    font-size: 1.25em;
    font-weight: 600;
    outline: none;
    
}

.home{
    width: 100%;
    height: 600px;
    background: rgb(37, 37, 37);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    & > img{
        display: block;
        width: 450px;
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
        


        &--first{
            color: white;
            font-size: 3.13em;
            font-weight: 100;
            line-height: 60px;
        }

        &--second{
            color: white;
            font-size: 3.13em;
            font-weight: 600;
            line-height: 50px;
        }
    }

    &__title{
        color: #ffdd88;
        font-size: 5em;
        font-weight: 600;
        
    }

    &__subtitle{
        color: white;
        font-size: 2.5em;
        font-weight: 200;
        line-height: 50px;
    }

    &__buttons{
        display: flex;
        flex-direction: row;
        margin: auto;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 20px;

        &--vote{
            @include button;
            background-color: #ffdd88;
            color: rgb(37, 37, 37);
            border: none;

            &:hover{
                cursor: pointer;
                background-color: #fce3a3;
            }
            
 
        }

        &--contact{
            @include button;
            background: none;
            border: solid 3px white;
            color: white;

            &:hover{
                cursor: pointer;
                background: rgba(255, 255, 255, 0.448);
            }
        }
    }


}

.message1{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    background-color: $primary-color;
    & > h1{
        margin: auto;
        text-align: center;
        color: $text-color;
        font-weight: 800;
        font-size: 2.81em;
   
    }
}
.intro{
    height: fit-content;
    position: relative;
    background: none;
    // height: 500px;
    overflow: hidden;

    &__img{
        position: absolute;
        height: 100%;
        transform: translateX(-50px);
        top: 0;
        left: 0;
        z-index: -2;
  
    }

    &__bg{
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(270deg,#ffffff 33.4%,rgba(255,255,255,0.961265) 48.23%,rgba(255,255,255,0.815448) 58.4%,rgba(255,255,255,0.471765) 66.18%,rgba(255,255,255,0) 72.85%);
        z-index: -1;
    }
    
    &__story{

        width: 50%;
        padding: 40px 40px 60px 40px;
        // right: 50px;
        // z-index: 3;
        
        float: right;
        &--title{
            font-size: 2.5em;
            font-weight: 600;
            color: $text-color;
           
        }
        &--text{
            color: $text-color;
            font-size: 1.87em;
            text-align: left;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
        }
    }
}

.contact{
    height: fit-content;
    background-color: $text-color;
    padding: 40px 0px;

    & > h1{
        font-size: 3.13em;
        padding: 0px 0px 10px 0px;
        color: white;
        text-align: center;
        
    }

    &__email{
        width: 60%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        font-size: 1.2em;
        padding: 15px 30px;
        border: solid 3px white;
        outline: none;
        background: none;
        color: white;

    }

    & > textarea{
        width: 60%;
        height: 200px;
        font-size: 1.2em;
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 20px;
        border: solid 3px white;
        outline: none;
        background: none;
        color: white;
    }

    &__submit{
        @include button;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        border: none;
        
        background-color: $primary-color;

        &:hover{
            background-color: #fce3a3;
            cursor: pointer;
        }
    }

    &__info{
        display: flex;
        flex-direction: column;
        font-size: 1.2em;
        color: $primary-color;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        width: 60%;
        &--num{
     
        }
        &--email{
            margin-top: 10px;
        }
    }

   
}
// .bar{
//     height: 80px;
//     visibility: hidden;
// }
// .banner{
//     width: 100%;
//     height: 500px;
//     overflow: hidden;
//     position: relative;
//     & > img{
//         width: 100%;
//         transform: translateY(-40px);
//         filter: brightness(0.75);
//     }
//     // background-image: url("../assets/images/banner1.jpeg");
//     // background-size: cover;
//     // background-position: center;

//     // &__title{
//     //     position: absolute;
//     //     font-size: 60px;
//     //     font-weight: 600;
//     //     color: pink;
//     //     top: 50px;
//     //     right: 100px;
//     // }

//     // &__subtitle{

//     // }
//     &__text{
//         position: absolute;
//         z-index: 2;
//         top: 50px;
//         right: 50px;
//         // background-color: blue;
//         & > h1{
//             text-align: left;
//             font-size: 60px;
//             font-weight: 600;
//             color: rgb(251, 209, 216);
            
//         }
//         & > h2{
//             text-align: left;
//             font-size: 40px;
//             font-weight: 600;
//             color: pink;

//         }
//     }

// }

@media screen and (max-width: 1000px) {
    .home{
        flex-direction: column-reverse;
        gap: 0px;
        justify-content: center;
        align-items: center;
        height: fit-content;
        
        &__text{
           background: rgb(37,37,37);
            padding: 20px;
            transform: translateY(-50px);

        }

        & > img{
            display: block;
            width: 300px;
            align-self: center;
            margin-top: 10px;
        }

        &__buttons{
        display: flex;
        flex-direction: column;
        margin: auto;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 20px;

        &--vote{
            @include button;
            background-color: #ffdd88;
            color: rgb(37, 37, 37);
            border: none;

            &:hover{
                cursor: pointer;
                background-color: #fce3a3;
            }
            
 
        }

        &--contact{
            @include button;
            background: none;
            border: solid 3px white;
            color: white;
            
            margin: auto;

            &:hover{
                cursor: pointer;
                background: rgba(255, 255, 255, 0.448);
            }
        }
        }
    }

    .intro{
    &__img{
        transform: translateX(-150px);
  
    }
    }
}

@media only screen and (max-width: 700px){
    .message1{

        & > h1{

            font-size: 2em;
       
        }
    }
    
}
</style>
