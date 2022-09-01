<template>
    <nav class="funcnav">
        <img src="@/assets/images/LogoBanner.png" alt="" class="logo" @click="returnHome()">
        <ul>
            <li @click="navTo('/how-to-vote')">{{translate[0][lang]}}</li>
            <li @click="navTo('/support')">{{translate[1][lang]}}</li>
            <!-- <li @click="navTo('/joinus')">{{translate[2][lang]}}</li> -->
            <li @click="navTo('/contact')">{{translate[3][lang]}}</li>
        </ul>
        <button class="menu" :class="[opened ? 'opened' : '']"  aria-label="Main Menu" @click="trigger()">
            <svg width="100" height="100" viewBox="0 0 100 100">
                <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path class="line line2" d="M 20,50 H 80" />
                <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
        </button>
        <section :class="[show ? 'menushow' : 'menuhide']" id="mobileMenu">
            <p @click="navTo('/how-to-vote')">{{translate[0][lang]}}</p>
            <div></div>
            <p @click="navTo('/support')">{{translate[1][lang]}}</p>
            <div></div>
            <!-- <p @click="navTo('/joinus')">{{translate[2][lang]}}</p>
            <div></div> -->
            <p @click="navTo('/contact')">{{translate[3][lang]}}</p>
        </section>
    </nav>
</template>
<script>
import translate from "@/assets/translate.json"
export default {
    name: "FunctionBar",
    props:{
        lang: 0,
    },
    data(){
        return{
            translate: translate.functions,
            show: false,
            opened: false,
        }
    },
    methods:{
        navTo(link){
            if(this.lang == 1){
                this.$router.push(`/ct${link}`);
            }else if(this.lang == 2){
                this.$router.push(`/zh${link}`);
            }else{
                this.$router.push(link);
            }
            this.show = false;
            this.opened = false;

        },
        returnHome(){
            if(this.lang == 1){
                this.$router.push("/ct");
            }else if(this.lang == 2){
                this.$router.push("/zh");
            }else{
                this.$router.push("/");
            }
        },
        trigger(e){
            this.show = !this.show;
            this.opened = !this.opened

        }
    },
 

}
</script>
<style lang="scss" scoped>
@import "@/assets/styles.scss";

img{
    display: block;
    width: 300px;
    filter: drop-shadow(0 0 1px rgba(29, 29, 29, 0.234));

    &:hover{
        cursor: pointer;
        filter: brightness(110%);
    }
}

.funcnav{
    position: relative;
    height: 100px;
    padding-left: 30px;
    padding-right: 60px;
    background-color: #86bab8;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // border-bottom: solid 1px #bbb7b061;

    

}
ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 50px;

}
li{
    color: white;
    font-weight: 400;
    width: fit-content;
    font-size: 20px;
    transition: all .2s;
    

    &:hover{
        cursor: pointer;
        color: $primary-color;
          text-decoration: underline;
        // font-weight: 600;
        filter: drop-shadow(0 0 1px #098a864a);
        
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
  stroke: rgb(255, 255, 255);
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
    top: 100%;
    width: 100%;
    left: 0;
    margin: 0;
    border: 0;

    // left: 50%;
    // transform: translateX(-50%);
    // border: solid 1px rgb(177, 177, 177);
    transition: all .4s;
    
    background: #86bab8;
    
    overflow: hidden;
    z-index: 3;

    & > p{
        padding: 15px 0px;
        text-align: center;
        width: 100%;
        font-size: 20px;
        color:white;
        font-weight: 400;
        transition: all .3s;

        &:hover{
            cursor: pointer;
            // background-color: $primary-color;
            // color: $accent-color;
          
            background-color: $primary-color;
            // background-color: #015d5a;
        }
      

    }
    & > div{
        width: 100%;
        height: 1px;
        background-color: $primary-color;
        margin:auto;
    }
}
.menuhide{
    // display: block;
    
    // transform: translateY(-50px);

    height: 0;
    // z-index: -2;
}
.menushow{
    // display: block;
    height: 176px;
    border: solid 1px $primary-color;
    z-index: 5;

}


@media only screen and (max-width: 850px){

    ul{

        display: none;

    }

    img{
        position: absolute;
        left: 50%;
        width: 250px;
        transform: translateX(-50%);
    }
    
    .menu{
        display: flex;
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%) scale(.5);
    }
}
@media only screen and (max-width: 450px){
    img{
        left: 10px;
        transform: none;
        // transform: translateX(-50%);
    }
}
</style>