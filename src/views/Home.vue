<template>
    <div class="bannermsg">
        <h1>Vote on October 14th - 24th, 2022</h1>
        <!-- <img @click="accessibility()" src="https://www.markham.ca/wps/wcm/connect/markham/cb8656ac-dabe-4c3c-a68a-053515f17b76/eA_Icon-gray.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2QD4H901OGV160QC8BLCRJ1001-cb8656ac-dabe-4c3c-a68a-053515f17b76-m.O7ozf" alt="accessiblity" class="accessible"> -->
    </div>
    <Start :lang="lang" />
    <Navbar :lang="lang" />
    <Intro v-if="lang == 0" :lang="lang"/>
    <IntroSimp v-else-if="lang == 2" />
    <!-- <div class="volunteerLocator"></div>
    <div class="contactLocator"></div>
    <div class="votebanner">
        <h1>{{joinmsg[lang]}}</h1>
    </div>
    <Volunteer :lang="lang" /> -->
    
    <!-- <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyanwangmarkham%2Fposts%2Fpfbid02Mv7EtcYjwbsGAu7onwstkwJNwZxBZaS5AyKxyqvpZUYBuBZm5Ek8Lz6GrUfU17nql&show_text=true&width=500" width="500" height="731" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> -->
    <!-- <Contact :lang="lang"/> -->
    <Footer :lang="lang" />
    
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Start from '@/components/home/Start2.vue'
import Intro from '@/components/home/Intro.vue'
import IntroSimp from '@/components/home/IntroSimp.vue'
import Volunteer from '@/components/home/Volunteer.vue'
import Contact from '@/components/home/Contact.vue'
import Footer from '@/components/Footer.vue'
import translate from "@/assets/translate.json"

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Start,
    Intro,
    IntroSimp,
    Volunteer,
    Contact,
    Footer
  },
  data(){
      return{
          translate: translate.intro,
          processing: false,
          showMessage: false,
          messageDuration: 0,
          joinmsg: ["Join our Volunteer Program!", "加入我們的義工活動!", "加入我们的义工活动!"]
      }
  }, 
  props:{
    lang: 0,
  },
  methods: {

    navTo(link){
        this.$router.push(link);
    },
    joinScroll(){
        document.querySelector('.volunteerLocator').scrollIntoView({
            behavior: 'smooth'
        });
    },
      contactScroll(){
          document.querySelector('.contactLocator').scrollIntoView({
            behavior: 'smooth'
        });
      },
    accessibility(){
         window.open("https://www.essentialaccessibility.com/cityofmarkham/?utm_source=cityofmarkhamhomepg&utm_medium=iconsmall&utm_term=eachannelpage&utm_content=footer&utm_campaign=cityofmarkham")
    }
  },

}
</script>
<style lang="scss" scoped>
@import "@/assets/styles.scss";

.locator{
    height: 0; 
    width: 100%;
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
.bannermsg{
    height: fit-content;
    color: white;
    background-color: $primary-color;
    position: relative;

    & > h1{
        font-size: $paragraph;
        padding: 4px;
    }
    & > img{
        width: 60px;
        position: absolute;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);

        &:hover{
            cursor: pointer;
        }
    }
}
</style>
