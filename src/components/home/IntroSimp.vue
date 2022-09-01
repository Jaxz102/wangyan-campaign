<template>
    <section class="intro content-padding">

        <h1>“健康的社区环境，不仅是今天的舒适，也是明天的幸福”</h1>
        <p>大家好，我是王艳，是两个女儿的妈妈，是在二区生活了13年的居民。我和我的家庭在万锦生活了23年，我们把这里叫做家。我欣喜的看到社区的发展伴随着女儿的成长，对这个城市的一草一木都有深厚的情感。我更愿意这个社区保持活力和健康，兼顾城市发展的同时，保持生活的舒适与安宁。因此我决定参选二区议员，为我们的家园做更多贡献。</p>
        <p>作为一名特殊教育专家，我容易理解那些被忽视的需求，愿意以真诚和爱，去感知每一个声音。</p>
        <p>作为一名媒体工作者，专业主持人，我一直积极参与市政工作的跟踪报道，非常熟悉政府服务机制。我以万锦地区的多元文化特点为自豪。欣赏不同文化的魅力，尊重不同选择和独特性。</p>
        <p>作为一名创业者，我在商业实践中积累了丰富的运营经验，能够合理妥善的分配资源，脚踏实地的做事，而不会把问题留在纸面。我深知，一份成绩单，好过一百句漂亮话。</p>

        <p>最重要的是，我是一位母亲，我关注教育与未来。希望我们今天的努力，为我们的下一代创造出更多的发展机会，一个更美好的社区未来。</p>
        <p>参与本次选举，是我认真考虑后的决定。请投我一票！谢谢！</p>
    </section>
</template>
<script>
export default {
    name: "Intro",
    props: {
        lang: 0,
    }

}
</script>
<style lang="scss" scoped>
@import '../../assets/styles.scss';

.intro{
    background-color: $background-color;
    & > h1{
        color: $primary-color;
        font-size: $heading1;
    }

    & > p{
        font-size: $paragraph;
        text-align: left;
        margin-top: 20px;
    }
}
</style>