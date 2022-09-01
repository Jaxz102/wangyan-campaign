<template>
    <FuncBar :lang="lang" />
    <!-- <Title :lang="lang" :headingTitle="translate.title[lang]" :pagetype="pagetype"/> -->
    <Navbar :lang="lang"/>
    <Donate :lang="lang" />
    <Footer :lang="lang" />
    
</template>

<script>
// @ is an alias to /src
import FuncBar from '@/components/FuncBar.vue';
import Title from '@/components/Title2.vue';
import Navbar from '@/components/Navbar.vue';
import Navbar2 from '@/components/Navbar2.vue';
import Footer from '@/components/Footer.vue'
import translate from '@/assets/translate.json';
import Donate from '@/components/donate/donateinfo.vue';
export default {
  name: 'HomeView',
  components: {
    FuncBar,
    Title,
    Navbar,
    Navbar2,
    Footer,
    Donate

  },
    data(){
        return{
            translate: translate.support,
            headingTitle: "",
            pagetype: "donatepage"
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
@import "@/assets/styles.scss";

$howtopad: 60px;
.bar{
    height: 80px;
    visibility: hidden;
}
.divider{
    height: 2px;
    background-color: $primary-color;
    width: 100%;
    margin: auto;
    // transform: scaleX(1.1);
}

.instructions{
    background-color: $background-color;
    height: fit-content;
    padding: 50px 80px;


    &__title{
        color: $primary-color;
        font-size: 3em;
        text-align: left;
        padding: 0px 40px 0px 0px;
        margin: auto;
        font-weight: 600;
    }

    &__sub{
        color: $primary-color;
        font-size: 25px;
        text-align: left;
        padding: 10px 0px;
        margin: auto;
        font-weight: 400;
    }
}

</style>
