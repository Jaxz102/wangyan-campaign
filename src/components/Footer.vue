<template>
    <main >
       
         <img src="@/assets/images/LogoBannerWhite.png" alt="" class="logo">
       <section class="wrap">
       
            <div class="wrap__col">
                <h1> </h1>
                <p @click="navTo('/how-to-vote')">{{func[0][lang]}}</p>
                <p @click="navTo('/donate')">{{func[1][lang]}}</p>
                <p @click="navTo('/')">{{func[2][lang]}}</p>
                <p @click="navTo('/contact')">{{func[3][lang]}}</p>
            </div>
            <div class="wrap__col">
                <h1> </h1>
                <p @click="navTo('/about')">{{nav[0][lang]}}</p>
                <p @click="navTo('/focus')">{{nav[1][lang]}}</p>
                <p @click="navTo('/community')">{{nav[2][lang]}}</p>
                <p @click="navTo('/endorsements')">{{nav[3][lang]}}</p>
            </div>
            <div class="wrap__col">
                <h1>{{func[3][lang]}}</h1>
                <p2>{{email[lang]}}: yan@yanwangmarkham.ca</p2>
                <section class="sm">
                    <div class="sm__icon" @click="openLink('https://www.facebook.com/yanwangmarkham')"><a href="https://www.facebook.com/yanwangmarkham" class="fa fa-facebook"></a></div>
                    <div class="sm__icon" @click="openLink('https://www.instagram.com/yanwangmarkham/?hl=en')"><a href="#" class="fa fa-instagram"></a></div>
                    <div class="sm__icon" @click="openLink('https://twitter.com/yanwangmarkham?s=11&t=eFaST5UdhWavZ0fsH1PHhA')"><a href="#" class="fa fa-twitter"></a></div>
                        
                </section>
            </div>
       </section>
       <div class="divider"></div>
       <p class="copyright">@2022 Authorized by Yan Wang Campaign. <br> All Rights Reserved.</p>
    </main>
</template>
<script>
import translate from '@/assets/translate.json';
export default {
    name: "Footer",
    props:{
        lang: 0,
       
    },
    data(){
        return{
            func: translate.functions,
            nav: translate.nav,
            actions: ["Actions", "參與", "参与"],
            info: ["Information", "信息", "信息"],
            email: ["Email", "郵箱", "邮箱"]
        }
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
        openLink(social){
                window.open(social);
        },
    },
}
</script>
<style scoped lang="scss">
@import '@/assets/styles.scss';
.logo{
    width: 250px;
    margin-left: 70px;
    // height: 80px;
}
h1{
    font-size: $heading1;
    color: white;
}
.divider{
    width: calc(100% - 140px);
    height: 1px;
    background-color: $title-color;
    margin: auto;
    margin-top: 40px;
}
main{
    height: fit-content;
    width: 100%;
    background-color: #015d5a;
    padding-top: 30px;


    & > img{
        display: block;
        width: 300px;
        filter: drop-shadow(0px 0 1px #1717170a);
        margin-left: 40px;
    }
    & > div{
        width: 3px;
        background-color: white;
        height: 100%;

    }
    & > p{
        text-align: left;
        color: white;
        font-weight: 500;

    }
}
.wrap{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 200px;
    margin-left: 70px;
    width: calc(100% - 140px);
    padding-top: 10px;
    & > img{
        width: 250px;
        
    }
    &__col{
        padding-top: 10px;
        width: fit-content;
        & > h1{
            font-size: 1em;
            text-align: left;
            font-weight: 800;
            color: white;
            text-transform: uppercase;
        }
        & > p{
            color: white;
            font-size: 1em;
            text-align: left;
            color: $title-color;

            &:hover{
                cursor: pointer;
                color: #b4f9f7;
                text-decoration: underline;
            }
        }
        & > p2{
            color: $title-color;
            font-size: 1em;
            text-align: left;
            margin-left: 0;
            width: 100%;
        }
    }
}
.copyright{
    font-size: 16px;
    padding-bottom: 10px;
    color: $title-color;
    text-align: center;
    margin: auto;
    margin-top: 10px;
}

.fa {
    box-sizing: border-box;
    // margin: 5px 2px;
  }
.sm{
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    margin-top: 10px;
    


    &__icon{
        box-sizing: border-box;
        width: 50px;
        height: 50px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $primary-color;

        &:hover{
            cursor: pointer;
            background-color: $title-color;
        }
        

        & > a{
            box-sizing: border-box;
            color: white;
            display: block;
            font-size: 25px;
            padding: 0;
            text-align: center;
            text-decoration: none;
            width: fit-content;
            height: fit-content;
        }
    }
}
// .fa-facebook{
//     padding: 15px 25px;
// }
// .fa-instagram{
//     padding: 15px;
// }
// .fa-twitter{
//     padding: 15px;
// }

@media only screen and (max-width: 1050px){
.wrap{
    gap: 150px;
}

}
@media only screen and (max-width: 900px){
.wrap{
    // width: 760px;
    justify-content: space-between;
    gap: 100px;
}

}
@media only screen and (max-width: 780px){

.wrap{
    // width: 760px;
    flex-direction: column;
    justify-content: flex-start;

    gap: 20px;

}
.copyright{
    
    font-size: 14px;
}
}

@media only screen and (max-width: 650px){
.logo{
    margin-left: 40px;
    
}
.wrap{
    // width: calc(100% - 20px);
    margin-left: 40px;
    margin-right: 0;
    width: fit-content;
    &__col{
        width: fit-content;
        margin: 0;
    }
}
.divider{
     width: calc(100% - 80px);
}
}
</style>