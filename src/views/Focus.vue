

<template>
    <FuncBar :lang="lang" />
    <!-- <Title2 v-if="lang == 0" :headingTitle="translate.nav[1][lang]" /> -->
    <Title v-if="lang == 2 || lang == 1" :lang="lang" :page="1"/> 
    <Navbar :lang="lang" :page="1" />
  <!-- <div class="bar"></div> -->
    <FocusPage :lang="lang"/>
    <Footer :lang="lang" />
  
</template>
<script>
import FuncBar from '@/components/FuncBar.vue';
import Title from '@/components/Title.vue';
import Title2 from '@/components/Title2.vue';
import Navbar from '@/components/Navbar.vue';
import FocusPage from '@/components/focus/Focuspoints.vue';
import Footer from '@/components/Footer.vue'
import translate from '@/assets/translate.json'

export default {
    name: "Focus",
    components: {
        FuncBar,
        Title,
        Title2,
        Navbar,
        FocusPage,
        Footer
    },
    data(){
        return{
            headingTitle: "Focuses",
            translate: translate,
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

</style>
