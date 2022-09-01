<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
    <Message v-if="showMessage" :lang="lang" :messageType="msg"/>
    <Loading v-if="processing" />
    <button class="backtotop" v-if="show" @click="backToTop()"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#FFF"><path d="M22.3 40.15v-25.8L10.25 26.4 7.85 24 24 7.85 40.15 24l-2.4 2.4L25.7 14.35v25.8Z"/></svg></button>
  <router-view />


</template>
<script>
import Loading from '@/components/Loading.vue'
import Message from '@/components/Message.vue'
export default {
    name: "App",
    data(){
        return{
            processing: false,
            showMessage: false,
            messageDuration: 0,
            lang: 0,
            msg: 0,
            show: false
        }
    },
    components: {
        Loading,
        Message
    },
    methods: {
        startTimer(seconds){
            setTimeout(function(){
                this.messageDuration = seconds;
                 if(this.messageDuration > 0){
                    this.startTimer(this.messageDuration-1);
                }else{
                    this.showMessage = false;
                }
            }.bind(this), 1000);
        },
        loadScreen(lang, form){
            this.processing = !this.processing;
            
            if(this.processing == false){
                this.lang = lang
                this.msg = form
                this.showMessage = true;
                this.startTimer(2);
                
            }
        },
        backToTop(){
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    },
    mounted(){
        var lastScrollTop = 0;
        window.onscroll = () => {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
                if (st > lastScrollTop){
                    this.show = false
                } else {
                    this.show = true
                }
            }else{
                this.show = false
            }
            lastScrollTop = st <= 0 ? 0 : st; 
        }
    }

}
</script>
<style lang="scss">
@import "./assets/styles.scss";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(37,37,37);
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;

}
.backtotop{
    width: 50px;
    height: 50px;
    position: fixed;
    z-index: 10;
    bottom: 25px;
    right: 25px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: $title-color;
    // box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.489);
    border-radius: 10px;

   &:hover{
    cursor: pointer;
   }
}
</style>
