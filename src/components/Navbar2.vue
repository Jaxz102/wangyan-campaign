<template>
    <main>
        <h1 @click="navTo('/')">{{name[lang]}}</h1>
        <nav class="nav">
            <div @click="navTo('/about')"><p>{{translate[0][lang]}}</p></div>
            <div @click="navTo('/focus')"><p>{{translate[1][lang]}}</p></div>
            <div @click="navTo('/community')"><p>{{translate[2][lang]}}</p></div>
        </nav>
            <button class="menu" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu" @click="show = !show">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
    <section :class="[show ? 'menushow' : 'menuhide']">
        <p @click="navTo('/about')">{{translate[0][lang]}}</p>
        <div></div>
        <p @click="navTo('/focus')">{{translate[1][lang]}}</p>
        <div></div>
        <p @click="navTo('/community')">{{translate[2][lang]}}</p>
    </section>
    </main>
</template>

<script>
import translate from "@/assets/translate.json"
export default {
    name: "Navbar2",
    data(){
        return{
            translate: translate.nav,
            lang: 0,
            name: ["YAN WANG", "王豔", "王艳"],
            show: false,
        }
    },
    methods: {
        navTo(link){
            this.$router.push(link);
        },
        changeLang(lang){
            this.lang = lang;
            this.$store.commit("changeLanguage", lang);
            localStorage.setItem("language", lang);
            window.location.reload();
        }
    },
    mounted(){
        console.log("BAR MOUNTED")
        this.lang = this.$store.getters.getLang;
    }
    
}
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";

main{

    width: 100%;
    height: 80px;
    position: fixed;
    background: white;
    // border-bottom: solid 1px rgba(208, 208, 208, 0.232);;
    box-shadow: 0px -1px 3px 1px rgba(0, 0, 0, 0.2);
    z-index: 3;

}
h1{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
    color: $text-color;

    &:hover{
        cursor: pointer;
    }
}

.nav{
    float: right;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    align-items: stretch;
    gap: 0px;
  
   


    & > div{
        color: $text-color;
        min-width: 150px;
        height: 100%;
        // padding: 30px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            cursor: pointer;
        
            // text-decoration: underline;
            background-color: $primary-color;
        }

        & > p{
            font-size: 1.2em;
            padding: 0px 25px;
        }
    }
}

.menu {
display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

section{
    position: absolute;
    top: 80px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: solid 1px rgb(177, 177, 177);;
    background: white;
    z-index: 3;

    & > p{
        padding: 15px 0px;
        text-align: center;
        width: 100%;
        font-size: 1.2em;
        color: $text-color;
        font-weight: 600;
        transition: all .3s;

        &:hover{
            cursor: pointer;
            background-color: $primary-color;
        }
      

    }
    & > div{
        width: 100%;
        height: 1px;
        background-color: rgb(177, 177, 177);
        margin:auto;
    }
}
.menuhide{
    display: none;
}
.menushow{
    display: block;
}
@media only screen and (max-width: 700px){

    .nav{

        display: none;

    }

    h1{
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    
    .menu{
        display: flex;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%) scale(.5);
    }
}

@media only screen and (max-width: 400px){
   
    // .nav{
    //     display: none;
    // }
}
</style>
