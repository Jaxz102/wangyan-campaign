<template>
    <section class="container content-padding">
       
            <!-- <img class="about__img" src="@/assets/images/wysport.jpeg" alt="sport"> -->
            
                
                <div class="sect">
                    <div class="sect__img" :style="{'background-image': 'url(' + require('@/assets/images/family1.jpeg') + ')'}"></div>
                    <!-- <img src="@/assets/images/family1.jpeg" alt=""> -->
                    <div class="sect__text">
                        <h1 class="about__text--title">Markham, a place called home</h1>
                        <p class="about__text--content">Twenty-three years ago, my husband and I decided to choose Markham as a place to settle down. For two decades we have lived here with our beloved daughters, made heartfelt friends, and amicable neighbours. We live in a cozy home and are blessed to live in this beautiful city of Markham.</p>
                    </div>
                </div>

                <div style="width: 100%; height: 25px"></div>

                <div class="sect" type="right">
                    <div class="sect__img" :style="{'background-image': 'url(' + require('@/assets/images/yanteacher.png') + ')'}"></div>
                    <!-- <img src="@/assets/images/yanteacher.png" alt=""> -->
                    <div class="sect__text">
                        <h1 class="about__text--title">From an entrepreneur to a special needs educator</h1>
                        <p class="about__text--content">During my early years as a first-generation immigrant, my main goal was to pursue a career in entrepreneurship. My trading business entity here was quite successful but soon I realized that's not the only objective I immigrated to Canada for. I wanted to spend more time with my family, be part of the community, and live a meaningful life.</p>
                    </div>
                </div>
                <div style="width: 100%; height: 25px"></div>
                <p class="about__text--content">With those ideas in mind, I took a sharp turn in my career that I felt was more suitable for me. In 2012, I stepped into the special education field.  For different district school boards such as York Region, Durham, Durham Catholic, and Toronto. My job gave me opportunities to communicate with families from various backgrounds and to understand the problems they have been facing. I have then developed a passion for community well-being.</p>

                <div style="width: 100%; height: 25px"></div>

                <div class="sect" type="left">
                    <div class="sect__img" :style="{'background-image': 'url(' + require('@/assets/images/endorse1.jpeg') + ')'}"></div>
               
                    <div class="sect__text">
                        <h1 class="about__text--title">From an amateur host to a media professional</h1>
                        <p class="about__text--content">In 2017, I picked up interest as a broadcasting show host. It saw a lot of success and was a great experience for me. After that, I produced and hosted a radio program named “Charming Toronto” that aired on FM 105.9 radio station every week. Through this show, I was able to bring people together from a variety of professions, backgrounds and experiences. I am also very enthusiastic about promoting the Canadian values of diversity, equity, democracy, and inclusiveness.</p>
                    </div>
                </div>

                <div style="width: 100%; height: 25px"></div>

                <div class="sect" type="right">
                    <div class="sect__img" :style="{'background-image': 'url(' + require('@/assets/images/hobby4.jpeg') + ')'}"></div>
               
                    <div class="sect__text">
                        <h1 class="about__text--title">An active community leader</h1>
                        <p class="about__text--content">Volunteering has played an important part in my life. I work as Secretary-General of Huaqiao University Alumni Association Of Canada. And I always engage in hosting community events such as the new year celebrations, charity fundraising, and various sporting activities. The fulfilling and worthwhile experience motivates me to move forward.</p>
                    </div>
                </div>

                <div style="width: 100%; height: 25px"></div>
                <h1 class="about__text--title">Please support me!</h1>
                <p class="about__text--content">I am a strong leader, a brave advocator, a problem solver, and a good listener with a caring and inspiring heart. I am ready to step up to serve my community to the next level. Together, we can make our community stronger and healthier!</p>
      
  </section>
</template>
<script>
export default {
    name: "AboutMe",
    data(){
        return{
            aboutme: ["About Me", "關於我", "关于我"]
        }
    },
    props: {
        lang: 0,
    }

}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';
.container{
    width: 100%;
    // height: fit-content;
    background-color: $background-color;
    // padding: 40px 40px;
    
}

.sect{
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: stretch;

    &__img{
        min-height: 225px;
        width: 400px;
        background-position: center;
        background-size: cover;
        align-self: stretch;

    }
    &__text{
        width: calc(100% - 430px);
    }
}
.sect[type="right"]{
    flex-direction: row-reverse;
}



.about{
    // display: flex;
    // width: 100%;
    // flex-direction: row;
    // justify-content: space-between;
    // gap: 50px;

    // height: 100%;
    
    // background-color: blue;

   
    &__text{
        // background-color: red;
       

        &--title{
        
            color: $primary-color;
            font-size: $heading1;
            text-align: left;
            padding: 0px 0px 0px 0px;
            font-weight: 600;
        }
        &--content{
           
            text-align: left;
            font-size: $paragraph;
            // padding: 10px 0px 40px 0px;
        }

    }
}

// @media only screen and (max-width: 1000px){
   
//     .container{
//         // padding: 40px 20px 40px 20px;
//     }
//     .about{
//         width: 100%;
//     }
// }
@media only screen and (max-width: 910px){
   
    .sect{
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__img{
            margin: auto;
            width: 100%;
            max-width: 400px;
        }
        &__text{
            width: 100%;
        }
    }
    .sect[type="right"]{
        flex-direction: column;
    }

    
}
</style>