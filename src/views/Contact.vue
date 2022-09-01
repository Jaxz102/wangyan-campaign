<template>
    <FuncBar :lang="lang" />
    <!-- <Title :lang="lang" :headingTitle="translate.title[lang]" :pagetype="pagetype"/> -->
     <Navbar :lang="lang"/>
    <!-- <Navbar2 :lang="lang"/> -->
    <!-- <div class="bar"></div> -->
    <!-- <HowtoEng v-if="lang == 0" :lang="0" />
    <HowtoSimp v-if="lang == 2" /> -->
    <ContactForm :lang="lang" />
   
    <Footer :lang="lang"/>
    
</template>

<script>
// @ is an alias to /src
import FuncBar from '@/components/FuncBar.vue';
import Title from '@/components/Title2.vue';
import Navbar from '@/components/Navbar.vue';
import Navbar2 from '@/components/Navbar2.vue';
import Footer from '@/components/Footer.vue'
import translate from '@/assets/translate.json';

import ContactForm from '@/components/contact/ContactForm.vue';

export default {
  name: 'Contact',
  components: {
    FuncBar,
    Title,
    Navbar,
    Navbar2,
    Footer,
    ContactForm
  },
    data(){
        return{
            translate: translate.contact,
            headingTitle: "",
            pagetype: "contactpage"
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
// .option__title{
//      color: $primary-color;
//         font-size: 2.5em;
//         font-weight: 600;
// }
.option{
    padding: 30px 0px;

    &__title{
        color: $primary-color;
        font-size: $heading1;
        font-weight: 600;
        text-align: left;
        padding-bottom: 20px;
    }
}

.option__content{
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
    height: fit-content;

    & > img{
        width: 125px;
    }

    & > ul{
        list-style:inside;
        text-align: left;
        font-size: 20px;

        & > li{
            & > span{
                font-weight: 600;
                color: $primary-color;
            }
        }
    }
}

@media screen and (max-width: 800px){
    .instructions{
        padding: 50px 30px;
    }
}
@media screen and (max-width: 650px){
    .option__content{
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    height: fit-content;
    }
}
</style>
