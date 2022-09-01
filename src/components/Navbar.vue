<template>
    <main class="mainnav">

        <!-- <div class="lang" v-if="lang != 0">
        <svg @click="show=!show" xmlns="http://www.w3.org/2000/svg" class="lang__icon" height="48" width="48" fill="#fff"><path d="M24 44Q19.8 44 16.15 42.425Q12.5 40.85 9.8 38.15Q7.1 35.45 5.55 31.775Q4 28.1 4 23.9Q4 19.7 5.55 16.075Q7.1 12.45 9.8 9.75Q12.5 7.05 16.15 5.525Q19.8 4 24 4Q28.2 4 31.85 5.525Q35.5 7.05 38.2 9.75Q40.9 12.45 42.45 16.075Q44 19.7 44 23.9Q44 28.1 42.45 31.775Q40.9 35.45 38.2 38.15Q35.5 40.85 31.85 42.425Q28.2 44 24 44ZM31.9 16.5H39.4Q37.75 13.05 34.875 10.75Q32 8.45 28.25 7.5Q29.5 9.35 30.375 11.5Q31.25 13.65 31.9 16.5ZM19.2 16.5H28.9Q28.35 13.85 27.05 11.375Q25.75 8.9 24 7Q22.4 8.35 21.3 10.55Q20.2 12.75 19.2 16.5ZM7.6 28.45H15.55Q15.4 27.1 15.375 26.025Q15.35 24.95 15.35 23.9Q15.35 22.65 15.4 21.675Q15.45 20.7 15.6 19.5H7.6Q7.25 20.7 7.125 21.65Q7 22.6 7 23.9Q7 25.2 7.125 26.225Q7.25 27.25 7.6 28.45ZM19.75 40.5Q18.5 38.6 17.6 36.4Q16.7 34.2 16.1 31.45H8.6Q10.5 35 13 37.025Q15.5 39.05 19.75 40.5ZM8.6 16.5H16.15Q16.7 13.8 17.55 11.675Q18.4 9.55 19.7 7.55Q15.95 8.5 13.15 10.75Q10.35 13 8.6 16.5ZM24 41.1Q25.75 39.3 26.925 36.975Q28.1 34.65 28.85 31.45H19.2Q19.9 34.45 21.075 36.85Q22.25 39.25 24 41.1ZM18.65 28.45H29.4Q29.6 26.9 29.65 25.925Q29.7 24.95 29.7 23.9Q29.7 22.9 29.65 21.975Q29.6 21.05 29.4 19.5H18.65Q18.45 21.05 18.4 21.975Q18.35 22.9 18.35 23.9Q18.35 24.95 18.4 25.925Q18.45 26.9 18.65 28.45ZM28.3 40.45Q31.9 39.3 34.775 37Q37.65 34.7 39.4 31.45H31.95Q31.3 34.15 30.425 36.35Q29.55 38.55 28.3 40.45ZM32.4 28.45H40.4Q40.75 27.25 40.875 26.225Q41 25.2 41 23.9Q41 22.6 40.875 21.65Q40.75 20.7 40.4 19.5H32.45Q32.6 21.25 32.65 22.175Q32.7 23.1 32.7 23.9Q32.7 25 32.625 25.975Q32.55 26.95 32.4 28.45Z"/></svg>
        <div class="lang__select" v-if="show">
            <p @click="swapLang('/')">English</p>
            <p @click="swapLang('/ct')" v-if="lang != 1">繁體</p>
            <p @click="swapLang('/zh')" v-if="lang != 2">简体</p>
        </div>
        </div> -->
        <nav class="nav">
            <div @click="navTo('/about')" :class="[page == 0 ? 'selecteddiv':'normaldiv']"><p>{{translate[0][lang]}}</p></div>
            <div @click="navTo('/focus')" class="darker" :class="[page == 1 ? 'selecteddiv':'normaldiv']"><p>{{translate[1][lang]}}</p></div>
            <!-- <div v-if="lang != 0" @click="navTo('/about')"><p>{{translate[2][lang]}}</p></div>-->
            <div @click="navTo('/community')" :class="[page == 2 ? 'selecteddiv':'normaldiv']"><p>{{translate[2][lang]}}</p></div>
            <div @click="navTo('/endorsements')" class="darker2" :class="[page == 3 ? 'selecteddiv':'normaldiv']"><p>{{translate[3][lang]}}</p></div> 

        </nav>
    </main>
</template>

<script>
import translate from "@/assets/translate.json"
export default {
    name: "Navbar",
    data(){
        return{
            translate: translate.nav,
            show: false,
            transparent: false,
            selected: [false, false, false, false],
        }
    },
    props:{
        lang: 0,
        page: 0
    },
    methods: {
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
        },
        divHovered(){

        }
    },
    mounted(){
        const el = document.querySelector(".mainnav")
        let options = {
            // root: document.querySelector('.mainnav'),
            rootMargin: '0px',
            threshold: [0.6]
        }

        let observer = new IntersectionObserver((e) => {
            this.transparent = false;
            console.log("HELLOOO")
        }, options);
        observer.observe(el)
    }
    
}
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";

.mainnav{
    // background-color: #007d797e;
    background-color: $primary-color;
    width: 100%;
    height: fit-content;
    position: sticky;   
    top: 0;
    z-index: 2;
    // border-bottom: solid 1px rgb(173, 173, 173);
    // box-shadow: 0px 0px 4px 0px rgba(29, 29, 29, 0.596);
}


.lang{
    position: absolute;
    top: 50%;
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
            color: white;

            &:hover{
                cursor: pointer;
                background-color: $accent-color;
            }
        }

    }

}

.normaldiv{
    background-color: none;
    & > p{
        color: white;
        
    }
    &:hover{
        cursor: pointer;
        background-color: #015d5a;
    }
    &:hover > p{
        color: white;
        // font-weight: 600;
    }
}
.selecteddiv{
    background-color: #015d5a;
    & > p{
        color: white;
        font-weight: 600;
    }
}
.nav{
    display: flex;
    flex-direction: row;
    height: 40px;
    justify-content: center;
    align-items: stretch;
    gap: 0px;

    // padding: 30px;

    & > div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;

        &:hover{
            cursor: pointer;
            // background-color: #015d5a;
        }

        // &:hover > p{
        //     color: $accent-color;
        // }
    

        & > p{
       
        height: fit-content;
        font-size: 20px;
        // width: 180px;
        width: fit-content;
        padding: 0 40px;
        text-align: center;
        background: none;
        font-weight: 600;
        transition: all .2s;
        // &:hover{
        //     cursor: pointer;
        //     color: $accent-color;
        //     // text-decoration: underline;
        // }
        }
    }
}
@media only screen and (max-width: 720px){
    .nav{
        & > div{
            flex: 1;
            & > p{
                width: 100%;
                font-size: 16px;
            }
        }
    }
}
@media only screen and (max-width: 650px){
    .nav{
        justify-content: space-evenly;
        & > div{
            flex: 1;
            & > p{
                padding: 0;
                font-size: 16px;
            }
        }
    }
}
@media only screen and (max-width: 500px){
    .nav{
        & > div{
            flex: 1;
            & > p{
                width: 100%;
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
    .darker{
        border-left: solid 1px #015d5a;
        border-right: solid 1px #015d5a;
    }
    .darker2{
        border-left: solid 1px #015d5a;
    }
}
// @media only screen and (max-width: 700px){

//     .lang{
//         right: 20px;
//     }
//     .nav{
//         margin-left: 10px;
//         flex-direction: column;
//         gap: 5px;
//         // & > p{
//         //     width: 90px;
            
//         // }

//     }
  
// }


</style>
