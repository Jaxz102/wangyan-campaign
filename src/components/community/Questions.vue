<template>
    <main>
        <!-- <h1 class="question">问题一：潼潼姐不回杰克斯的消息怎么办？</h1>
        <p>答：这种女生最可恶，离她远点！</p> -->
        <p>{{translate.intro1[lang]}}</p>
        <p>{{translate.intro2[lang]}}</p>
        <div class="divider"></div>
        <h1 class="question">{{translate.q1.title[lang]}}</h1>
        <p>{{translate.q1.explanation[lang]}}</p>
        <p>{{translate.q1.answer[lang]}}</p>
        <p style="font-weight: 600">{{translate.q1.note[lang]}}</p>
        <div class="divider"></div>

        <h1 class="question">{{translate.q2.title[lang]}}</h1>
        <p>{{translate.q2.answer[lang]}}</p>
        <p style="font-weight: 600">{{translate.q2.contact[lang]}}</p>
        <div class="divider"></div>

        <h1 class="question">{{translate.q3.title[lang]}}</h1>
        <ol v-if="lang == 0">
                <li>Concerns regarding privately owned trees need to be negotiated with your neighbour.</li>
                <li>If the owner agrees to cut the tree, cuts resulting in a 30% or more reduction in volume need to be reported to the city; otherwise, there is no need.</li>
                <li>There are no government regulations on a tree’s height.</li>
                <li>The government may intervene if the tree has a severe disease. You may visit <a href="https://www.treesaregood.org/">treesaregood.org</a> and select a self-paid appraiser to confirm the tree’s condition and the seriousness of the disease. If the appraiser confirms the tree is infected with severe disease, please contact the government via (905) 477-5530. If the condition is unsafe, the government will request changes accordingly.</li>
        </ol>
        <ol v-else-if="lang == 2">
                <li>私人物业的树需要跟邻居商量解决</li>
                <li>如果私人业主同意剪树，且修剪幅度超过30%，居民需要向政府申请许可。30%以内的修剪则不需要获得政府许可。</li>
                <li>关于树的高度，政府没有规定限制。</li>
                <li>关于树的健康状况，如果树有非常严重疾病，政府可以干预处理。对于严重疾病的规定，居民可以在  <a href="https://www.treesaregood.org/" style="font-weight: 600">treesaregood.org</a> 网站上自费聘请一名咨询师上门评估。如果评估师确认树有严重疾病，居民可以拨打 9054775530 联系政府处理。</li>
                <li>对于树的修剪方式，政府没有规定限制。</li>
                <li>对于安全隐患，居民可以通过拨打电话：9054775530 申请政府评估。如果不安全，政府会要求作出相应改变。</li>
        </ol>
        <div class="divider"></div>
        <h1 class="question">{{translate.q4.title[lang]}}</h1>
        <p>{{translate.q4.answer[lang]}}</p>
        <div class="divider"></div>

        <h1 class="question">{{translate.q5.title[lang]}}</h1>
        <p>{{translate.q5.answer[lang]}}</p>
        <p style="font-weight: 600">{{translate.q5.note[lang]}}</p>
    </main>
</template>

<script>
import translate from '@/assets/translate.json'

export default {
    name: "Questions",
    props:{
        lang: 0,
    },
    data(){
        return{
            translate: translate.frequentQA
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles.scss';
// main{
//     padding: 0px calc((100% - 1150px) / 2);
// }
.title{
    text-align: center;
}
.highlight{
    color: $primary-color;
}
.divider{
    width: 100%;
    height: 5px;
    background-color: $primary-color;
    margin-top: 30px;
}
a{
    // color: $primary-color;
    text-decoration: none;
    color: black;
    // font-weight: 600;
}
.title{
    color: $primary-color;
    text-align: left;
    font-size: $heading1;
    margin-top: 30px;
}
.question{
    color: $primary-color;
    text-align: left;
    font-size: 1.2em;
    margin-top: 30px;
    font-weight: 600;
}
p{
    text-align: left;
    font-size: $paragraph;
    margin-top: 20px;

}
p:not(:first-child){
    
}
ol{
        display: block;
        text-align: left;
        margin: 0;
        margin-top: 10px;
        padding: 0;
        font-size: $paragraph;
        width: auto;
        margin-left: 100px;

        & > li{
            text-align: left;
            margin: 0;
            padding: 0;
            // font-size: $paragraph;
        }
    }

@media only screen and (max-width: 1400px){

    ol{
        width: 90%
    }
}
@media only screen and (max-width: 1000px){

    ol{
        width: 90%;
        margin-left: 50px;
    }
}
@media only screen and (max-width: 650px){

    ol{
        width: 90%;
        margin-left: 40px;
    }
}
</style>