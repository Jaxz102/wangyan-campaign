<template>
    <FuncBar :lang="lang" />
    <!-- <Title2 v-if="lang == 0" :headingTitle="translate.nav[0][lang]" /> -->
    <Title v-if="lang == 2 || lang == 1" :lang="lang" :page="0"/> 
    <Navbar :lang="lang" :page="0"/>
    <!-- <div class="bar"></div> -->
    <Aboutme v-if="lang == 0" :lang="lang"/>
    <AboutmeSimp v-else :lang="lang"/>
    <Gallery :lang="lang"/>
    <Footer :lang="lang" />
  <!-- <div class="bar"></div>
  <div class="sec">
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit libero volutpat sed cras. Risus at ultrices mi tempus imperdiet. Quis hendrerit dolor magna eget est. Tellus rutrum tellus pellentesque eu tincidunt tortor. Elementum tempus egestas sed sed risus pretium quam vulputate. Neque sodales ut etiam sit amet nisl purus in mollis.</p>
      <img src="@/assets/images/wysport.jpeg" alt="sport">
  </div> -->
</template>
<script>
import translate from "@/assets/translate.json";
import FuncBar from '@/components/FuncBar.vue';
import Title from '@/components/Title.vue';
import Title2 from '@/components/Title2.vue';
import Navbar from '@/components/Navbar.vue';
import Aboutme from '@/components/about/Aboutme.vue';
import AboutmeSimp from '@/components/about/AboutmeSimp.vue';
import Gallery from '@/components/about/Gallery.vue';
import Footer from '@/components/Footer.vue'

export default {
    name: "About",
    components: {
        FuncBar,
        Title,
        Title2,
        Navbar,
        Aboutme,
        AboutmeSimp,
        Gallery,
        Footer
    },
    data(){
        return{
            headingTitle: "About Me",
            translate: translate
        }
    },
    props:{
        lang: 0,
    },
    methods:{
        contactScroll(){
          document.querySelector('.contactLocator').scrollIntoView({
            behavior: 'smooth'
        });
      },
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles.scss';
.bar{
    height: 80px;
    width: 100%;
}
.sec{
    height: 1000px;
    background-color: #fffbf0;
    background-image: url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    & > h1{
        font-size: $heading1;
        padding: 40px 0px 20px 0px;
    }

    & > p {
        font-size: $paragraph;
        width: clamp(375px, 75%, 1000px);
        text-align: left;
        margin: auto;
        padding: 0px 10px;

    }
}
img{
    width: 400px;
    margin-top: 40px;
    float: left;
}
</style>
