<template>
    <main class="content-padding endorsecont">
    <h1 v-if="lang == 2 || lang == 1">大家的评价</h1>
    <p v-if="lang == 2 || lang == 1">YAN是个政治素人，在万锦生活的二十多年里，有幸认识了众多良师益友、好邻居、小伙伴。你们是我的星空，是我生命中的花朵。YAN珍惜跟你们共度的每一分时光。</p>

    
    
    <Quote v-for="(quotation, index) in quotes" :lang="lang" :quote="quotation" :style="[index != 0 && index != 4 ? {'margin-top': '30px'} : {}]"/>
    </main>
</template>

<script>
import Quote from "@/components/endorsements/Quotes.vue";
import quotations from "@/assets/translate.json";
export default {
    name: "Endorse",
    props:{
        lang: 0,
    },
    components:{
        Quote
    },
    data(){
        return{
            quotes: quotations.quotes
        }
    },
    methods:{
        openLink(link){
            window.open(link)
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/styles.scss';

.endorsecont{
    background-color: $background-color;
    & > h1{
        color: $primary-color;
        font-size: $heading1;

    }

    & > p{
        font-size: $paragraph;
        text-align: left;
        margin-top: 10px;
        margin-bottom: 30px;
    }
}

.links{
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 25px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;

    &__node{
        width: calc((100% - 25px) / 2);
        padding: 20px;
        background-color: $background-color;
        box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.153);
        transition: all .3s;
        &--img{
            display: block;
            width: 100%;
            height: 250px;
            background-size: cover;
            background-position: center;
        }

        & > p{
            font-size:$paragraph;
            margin-top: 20px;
            font-weight: 600;
            color: rgb(75, 74, 72);

        }

        &:hover p{
            color: $primary-color;
            
        }
        &:hover{
            cursor: pointer;
            box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.153);

        }
   }
}

@media only screen and (max-width: 700px){
    .links{
        display: block;

        &__node{
            width: 100%;
            margin-top: 20px;
        }
    }
}
</style>