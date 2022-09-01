<template>
    <section class="container ">
        <h1>{{title[lang]}}</h1>
        <p class="intro content-padding">{{msg[lang]}}</p>
        <div class="images">
            <div v-for="image in hobbyImg" :style="{'background-image': 'url(' + image + ')'}"></div>
        </div>
  </section>
</template>
<script>

export default {
    name: "Gallery",
    data(){
        return{
            hobbyImg: [require("@/assets/images/hobby1.jpeg"),
                      require("@/assets/images/hobby2.jpeg"),
                      require("@/assets/images/hobby3.jpeg"),
                      require("@/assets/images/hobby4.jpeg"),
                      require("@/assets/images/hobby5.jpeg"),
                      require("@/assets/images/hobby6.jpeg"),
                      require("@/assets/images/hobby7.jpeg"),
                      require("@/assets/images/hobby8.jpeg"),
                      require("@/assets/images/family3.jpeg"),
                      require("@/assets/images/hobby9.jpeg"),],
            title: ["In the Community","我的生活", "我的生活"],
            msg: ["In my free time, I enjoy playing sports, gardening, rock painting, and cooking. Everywhere I go, I wish to learn from my surroundings and grow with my community. I’m highly ambitious and love to jump at any opportunity I can find! ","在閒暇時間，我喜歡運動、園藝、岩畫和烹飪。無論走到哪裡，我都渴望從周圍的環境中學習，與身邊的社區共同成長。我總是熱切的抓住一切能讓我進步的機會！", "在闲暇时间，我喜欢运动、园艺、岩画和烹饪。 随时随地，我都渴望从周围的环境中学习，与身边的社区共同成长。 我总是热切的抓住一切机会，寻求进步！"],
        }
    },
    props: {
        lang: 0,
    },
    mounted(){


    }

}
</script>
<style lang="scss" scoped>
@import '../../assets/styles.scss';

.container{
    height: fit-content;
    background-color: $primary-color;
    padding: 40px 0px 80px 0px;
   
}
h1{
    text-align: center;
    margin: auto;
    color: white;
    font-size: $heading1;
   
}

.intro{
    font-size: $paragraph;
    // margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    // padding: 0px 20px 50px 20px;
    color: white;
    text-align: left;
    // width: clamp(365px, 75%, 1000px);
    

}
.images{
    display: grid;
    width: fit-content;

    grid-template-columns: 400px 400px 400px;
    margin-left: auto;
    margin-right: auto;
    // margin-top: 20px;
    // background-color: blue;
    justify-items: center;
    align-items: center;
    gap: 30px 30px;
    


    & > div{
        height: 300px;
        width: 100%;
        // width: 400px;
        
        box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.27);
        background-size: cover;
        background-position: center;
        transition: all .4s;

        // &:hover{
        //     border: solid 4px $accent-color;
        //     filter: brightness(110%);
        //     transform: scale(1.05);
           
        // }

    }
}

@media only screen and (max-width: 1300px){
    .images{
        grid-template-columns: 400px 400px;
    }
}

@media only screen and (max-width: 900px){
    .images{
        grid-template-columns: 400px;
    }
}
@media only screen and (max-width: 800px){
    p{
        width: 100%;
    }
}
@media only screen and (max-width: 500px){
    .images{
        width: 100%;
        grid-template-columns: 1fr;
    }
}
</style>