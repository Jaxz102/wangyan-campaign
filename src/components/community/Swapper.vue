<template>
    <section class="content-padding swapwrap">
        <div class="swapper">
            <h1 @click="changePage(1)" :class="[page == 1 ? 'selected' : 'unselected']" class="leftbutton"><p>{{title[lang][0]}}</p></h1>
            <!-- <h2>|</h2> -->
            <h1 @click="changePage(2)" :class="[page == 2 ? 'selected' : 'unselected']" class="rightbutton"><p>{{title[lang][1]}}</p></h1>
        </div>
        <Questions v-if="page == 1" :lang="lang"/>
        <Activities v-if="page == 2" :lang="lang"/>
    </section>


</template>

<script>
import Questions from "@/components/community/Questions.vue"
import Activities from "@/components/community/Activities.vue"
export default {
    name: "swapper",
    props:{
        lang: 0
    },
    data(){
        return{
            page: 1,
            title:[["Concerns", "Activities"], ["常見問題", "社區活動"], ["常见问题", "社区活动"]]
           
        }
    },
    components:{
        Questions,
        Activities
    },
    methods:{
        changePage(p){
            this.page = p
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles.scss';
.swapwrap{
    background-color: $background-color;
}
.swapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0px;
    user-select: none;
    // background-color: $title-color;

    & > h1{
        transition: all .3s;
        font-size: $paragraph;
        font-weight: 600;
        
        // padding: 5px 0px;
        width: 135px;
        height: 40px;

        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            cursor: pointer;
            // transform: translateY(-5px);
            // color: $primary-color;
        }
        & > p{

        }
    }

}
// .leftbutton{
//     border-top: solid 2px $primary-color;
//     border-left: solid 2px $primary-color;
//     border-bottom: solid 2px $primary-color;
//     border-right: none;
// }
// .rightbutton{
//     border-left: none;
//     border-top: solid 2px $primary-color;
//     border-right: solid 2px $primary-color;
//     border-bottom: solid 2px $primary-color;
    
// }
.selected{
    color: $primary-color;
    text-decoration: underline;
    // background-color: $primary-color;
   
}
.unselected{
    color: $primary-color;
    
    
    // padding-top: 8px;
    &:hover{
        color: $title-color;
        // background-color: $primary-color;
    }
}
</style>