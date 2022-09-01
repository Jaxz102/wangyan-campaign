<template>
    <main class="content-padding">
        <h1>{{translate.inquiry[lang][0]}}</h1>
        <!-- <p>邻里守望, 诚邀您与我们一起讨论社区话题!</p> -->
        <button class="white_button ab" @click="inquire()">{{translate.inquiry[lang][1]}}</button>
    </main>
</template>
<script>
import translate from '@/assets/translate.json';

export default {
    name: "Inquiry",
    props:{
        lang: 0,
    },
    data(){
        return{
            translate: translate.frequentQA
        }
    },
    methods: {
        inquire(){
            if(this.lang == 1){
                 window.open("https://forms.gle/4dBxy1QXX6SncksQ9")
            }else if(this.lang == 2){
                window.open("https://forms.gle/7C7uvgs9ZnNEPf9A9")
            }else{
                window.open("https://forms.gle/PvAfKqoLcRAjkbJJ9")
            }
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';

main{
    width: 100%;
    height: fit-content;
    background-color: $primary-color;

}
h1{
    color: white;
}
p{
    color: white;
    font-size: 26px;
    padding: 10px;
}
.ab{
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;

}
</style>