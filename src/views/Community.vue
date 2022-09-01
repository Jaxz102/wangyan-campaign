<template>
    <FuncBar :lang="lang" />
    <!-- <Title2 v-if="lang == 0" :headingTitle="translate.nav[2][lang]" /> -->
    <Title v-if="lang == 2 || lang == 1" :lang="lang" :page="2"/> 
    <Navbar :lang="lang" :page="2"/>
    <Swapper :lang="lang"/>
    <Inquiry :lang="lang" />
    <div class="contactLocator"></div>
    <!-- <Contact :lang="lang"/> -->
    <Footer :lang="lang" />
</template>
<script>
import translate from "@/assets/translate.json";
import FuncBar from '@/components/FuncBar.vue';
import Title from '@/components/Title.vue';
import Title2 from '@/components/Title2.vue';
import Navbar from '@/components/Navbar.vue';
import Swapper from '@/components/community/Swapper.vue';
import Inquiry from '@/components/community/Inquiry.vue';
import Contact from '@/components/home/Contact.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "Community",
    components: {
        FuncBar,
        Title,
        Title2,
        Navbar,
        Swapper,
        Inquiry,
        Contact,
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

</style>
