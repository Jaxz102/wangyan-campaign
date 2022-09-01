<template>
        <FuncBar :lang="lang" />
        <!-- <Title2 v-if="lang == 0" :headingTitle="translate.nav[3][lang]" /> -->
        <Title v-if="lang == 2 || lang == 1" :lang="lang" :page="3"/> 
        <Navbar :lang="lang" :page="3"/>
    <!-- <div class="bar"></div> -->
        <Endorse :lang="lang" />
        <Footer :lang="lang" />
</template>

<script>
import FuncBar from '@/components/FuncBar.vue';
import Title from '@/components/Title.vue';
import Title2 from '@/components/Title2.vue';
import Navbar from '@/components/Navbar.vue';
import Endorse from '@/components/endorsements/Endorse.vue';
import Footer from '@/components/Footer.vue'
import translate from '@/assets/translate.json'

export default {
    namne: "Endorsements",
    components:{
        FuncBar,
        Title,
        Title2,
        Navbar,
        Endorse,
        Footer
    },
    props:{
        lang: 0,
    },
    data(){
        return{
            translate: translate
        }
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
