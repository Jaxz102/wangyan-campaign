<template>
    <section class="container content-padding">
        <!-- <h1 class="headingOne">{{title[lang]}}</h1> -->
        <p v-if="lang == 2 || lang == 1" class="intro">{{text.msg[lang][0]}}</p>
        <!-- <p>{{text.msg[lang][1]}}</p> -->
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est sit amet facilisis magna etiam tempor orci.</p> -->
        <section class="focus">
            <div class="focus__one focuscard">
                <footer></footer>
                <div class="focus__one--img" style="background-image: url('https://www.dreyergroup.ca/wp-content/uploads/2019/04/neighbourhood.jpg');"></div>
                <article>
                <h1 class="focus__one--head">{{text.first.header[lang]}}</h1>
                <ul>
                    <li v-for="point in text.first['desc'+lang]">{{point}}</li>
                </ul>
                <!-- <p class="focus__one--text">{{text.first.desc[lang]}}</p> -->
                </article>
            </div>
             <div class="focus__two focuscard">
                 <footer></footer>
                <div class="focus__two--img" :style="{'background-image': 'url('+require('@/assets/images/mentalhealth.jpeg') + ')'}"></div>
                <article>
                <h1 class="focus__two--head">{{text.second.header[lang]}}</h1>
                <ul>
                    <li v-for="point in text.second['desc'+lang]">{{point}}</li>
                </ul>
                </article>
           </div>
              <div class="focus__three focuscard">
                 <footer></footer>
                <div class="focus__three--img" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/1/1c/MarkhamCivicCenter5.jpg');"></div>
                <article>
                <h1 class="focus__three--head">{{text.third.header[lang]}}</h1>
                <ul>
                    <li v-for="point in text.third['desc'+lang]">{{point}}</li>
                </ul>
                <!-- <p class="focus__three--text">{{text.third.desc[lang]}}</p> -->
                </article>            
            </div>
        </section>
  </section>
</template>
<script>
import translate from "@/assets/translate.json";

export default {
    name: "Focuspoints",
    props: {
        lang: 0,
    },
    data(){
        return{
            text: translate.focus,
            title: ["Why should you vote for Yan Wang?", "你爲什麼要投票給王豔？", "我的焦点举措"]
        }
    }

}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';
.container{
    width: 100%;

    background-color: $background-color;
    // padding: 50px 40px 80px 40px;
    // min-height: calc(100vh - 80px);

    & > h1{
        font-size: $heading1;
        color: $primary-color;
    }

    & > p{
        font-size: $paragraph;
        text-align: left;
        margin-top: 10px;
        margin-bottom: 20px;
    }

}


.focuscard{
    width: calc(100% - 50px);
    position: relative;
    padding: 20px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    // height: 892px;
    background-color:transparent;
    transform: translateX(-10px);

    & > div{
        // border: solid 5px $primary-color;
        background-position: center;
        background-size: cover;
        width: 370px;
        height: 300px;
        z-index: 2;
        // transform: translateX(-120px);
        box-shadow: 0px 0px 8px 1px rgba(26, 26, 26, 0.215);
    }

    & > article{
        width: calc(100% - 290px);
        color: white;
        height: fit-content;
        z-index: 2;
        //  transform: translateX(-100px);
        // padding: 20px 20px 20px 20px;
        & > h1{
            // padding: 20px 10px;
            font-size: $heading1;
            text-align: left;
            color: white;
            
        }

        & > p{
            text-align: left;
            // padding: 0 20px;
            margin-top: 10px;
            font-size: $paragraph;
            filter: drop-shadow(0px 0 1px #1717172a);
            // padding-bottom: 40px;
            // color: white;
        }
        & > ul{
            text-align: left;
            padding-left: 25px;
        }
    }
    & > footer{
        background: rgb(0,125,121);
        background: linear-gradient(135deg, rgba(0,125,121,1) 0%, rgba(134,186,184,1) 100%);
        position: absolute;
        width: calc(100% - 100px);
        height: 100%;
        z-index: 0;
        left: 100px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

    }
}

.focus__one{
    margin-top: 0;
}
.focus{
    // display: flex;
    // flex-direction: row;
    width: 100%;
    // justify-content: space-between;
    // align-items: stretch;
    // gap: 50px;
    // margin-top: 40px;
   
}

// @media only screen and (max-width: 1320px){
//     .focus{
//         display: block;
//         // flex-direction: column;
//         // align-items: stretch;
//     }

//     .focuscard{
//         display: flex;
//         width: 100%;
//         height: 350px;
//         margin-top: 50px;

//         & > div{
//             width: 350px;
//             height: 100%;
//         }

//         & > article{
//             width: calc(100% - 350px);
//             height: 100%;
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             align-items: center;
//         }
//     }
// }
// @media only screen and (max-width: 1250px){
//     .focuscard{
//         height: 500px;
//     }
// }

@media only screen and (max-width: 1000px){
    .focuscard{
        display: flex;
        width: 100%;
        height: fit-content;
        background: rgb(0,125,121);
        background: linear-gradient(135deg, rgba(0,125,121,1) 0%, rgba(134,186,184,1) 100%);
        transform: none;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        & > div{
            width: 300px;
            height: 300px;

        }

        & > article{
            // width: 100%;
            // height: 100%;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;
        }
        & > footer{
            display: none;
        }

    }
}

@media only screen and (max-width: 800px){
    .focuscard{
        display: block;
        width: 100%;
        height: fit-content;
        background-color: $title-color;

        & > div{
            width: 100%;
            height: 300px;

        }

        & > article{
            margin-top: 20px;
            width: 100%;

            & > h1{
                text-align: center;
            }
            // & > p{
            //     width: 100%;
            // }
            // width: 100%;
            // height: 100%;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;
        }
        & > footer{
            display: none;
        }

    }
}
// @media only screen and (max-width: 1000px){
//     .focuscard{
//         width: 690px;
//         height: 350px;
//     }
// }

// @media only screen and (max-width: 750px){
//     .focus{
//         flex-direction: column;
//         align-items: center;
//     }

//     .focuscard{
//         display: block;
//         width: 350px;
//         height: 550px;

//         & > div{
//             width: 100%;
//             height: 300px;
//         }

//         & > article{
//             width: 100%;
//             height: 250px;
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             align-items: center;
//         }
//     }
// }

</style>