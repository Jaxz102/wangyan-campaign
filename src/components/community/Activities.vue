<template>
    <main>
        <!-- <h1 class="title">社区照片</h1> -->
        <section class="links" v-if="lang == 2 || lang == 1">
        <div class="links__node" @click="openLink('https://mp.weixin.qq.com/s/ynhB53z3IQOlyxOJoyN9Qg')">
            <div class="links__node--img" :style="{'background-image': 'url(' + require('@/assets/images/endorse1.jpeg') + ')'}"></div>
            <p class="links__node--date">2022-06-20</p>
            <p class="links__node--title">我的花样姐姐邻居是社区名人</p>
            <p class="links__node--intro">前几天，一个国内群的年轻人问我，华人在海外是不是有“二等公民”的感觉？</p>
        </div>
        <div class="links__node" @click="openLink('https://microwei.net/appshare/593300/1779912/5235/shareweb')">
    
            <div class="links__node--img" style="background-image: url( https://img.weitt.us/content_cover/20220705/lLzSfZu-TfqX4P4QiXIbZw==.png)"></div>
            <p class="links__node--date">2022-07-06</p>
            <p class="links__node--title">我眼中的政治素人王艳</p>
            <p class="links__node--intro">1999年移民加拿大后，我们在2001年曾为当时的华人议员黄志华做过竞选义工。</p>
        </div>
        <div class="links__node" @click="openLink('http://www.hotspotnews.ca/portal.php?mod=view&aid=2119')">
            <div class="links__node--img" style="background-image: url(http://www.hotspotnews.ca/data/attachment/portal/202207/26/082751eq9wxs2qwlgf2gx2.jpg)"></div>
            <p class="links__node--date">2022-07-25</p>
            <p class="links__node--title">希望给予和反哺 - 王艳竞选万锦市第二区的市议员</p>
            <p class="links__node--intro">万锦市第二选区(Markham Ward 2)市议员候选人Yan Wang 王艳竞选筹款晚宴于7月23日晚在新世纪皇宫举行。</p>
        </div>
        <div class="links__node" @click="openLink('http://newstarnet.com/magazine/%E5%85%85%E6%BB%A1%E6%9A%96%E6%84%8F%E5%92%8C%E6%B8%A9%E6%83%85%EF%BC%8C%E4%B8%87%E9%94%A6%E5%B8%82%E7%AC%AC%E4%BA%8C%E9%80%89%E5%8C%BA%E5%B8%82%E8%AE%AE%E5%91%98%E5%80%99%E9%80%89%E4%BA%BA%E7%8E%8B/')">
            <div class="links__node--img" style="background-image: url(http://newstarnet.com/magazine-picture/wangyan0725_1.jpg)"></div>
            <p class="links__node--date">2022-07-25</p>
            <p class="links__node--title">充满暖意和温情，万锦市第二区市议员候选人王艳举办筹款晚宴</p>
            <p class="links__node--intro">我是王艳，23年前，我和先生在万锦市安家，我们两个可爱的女儿在这里出生和长大。</p>
        </div>
        </section>
        <section v-else>
            <h1 style="text-align: center">COMING SOON!</h1>
        </section>

        
    </main>
</template>

<script>


export default {
    name: "Questions",
    props:{
        lang: 0,
    },
    data(){
        return{

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
main{
    
}
.title{
    text-align: center;
}
.divider{
    width: 100%;
    height: 5px;
    background-color: $primary-color;
    margin-top: 30px;
}
h1{
    color: $primary-color;
    text-align: left;
    font-size: $heading1;
    margin-top: 30px;
}
p{
    text-align: left;

}
.links{
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;

    &__node{
        width: calc((100% - 100px) / 2);
        // padding: 20px;
        background-color: $background-color;
        // box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.128);
        transition: all .3s;
        &--img{
            display: block;
            width: 100%;
            height: 250px;
            background-size: cover;
            background-position: center;
        }

        &--date{
            font-size: 15px;
            color: rgb(75, 74, 72);
            margin-top: 10px;

        }


        &--title{
            font-size:1.2em;
            margin-top: 10px;
            font-weight: 600;
            color: black;
        }

        &--intro{
            font-size: 18px;
            color: black;
            margin-top: 5px;
        }

        &:hover &--title{
            color: $primary-color;
            
        }
        &:hover &--img{
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

        }
        &:hover{
            cursor: pointer;
            // box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.153);

        }
   }
}

@media only screen and (max-width: 700px){
    .links{
        display: block;

        &__node{
            width: 100%;
            margin-top: 40px;

            &--intro{
                display: none;
            }
        }
    }
}


</style>