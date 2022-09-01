<template>
    <main class="content-padding">

        <div class="voteactions" >
            <button class="startvote" @click="voteLink()">选民注册</button>
            <button class="white_button votesteps" @click="openPDF()"><img src="https://www.iconpacks.net/icons/2/free-pdf-download-icon-3388-thumb.png"><p>选民信息更新步骤</p></button> 
        </div>
        <p>2022年10月14日至10月24日，Markham 万锦市线上和线下的投票渠道同时对选民开放。</p>
        <div class="divider"></div>
        <h1>方式一：线上投票</h1>
        <p>10月14日至24日早10点至晚8点，使用个人电子设备(手机、电脑、平板电脑等)，或万锦市图书馆提供的电脑进行投票。</p>
        <a href="https://markham.bibliocommons.com/locations/?_ga=2.113146124.965856506.1649172318-1956973357.1649172318">查询图书馆营业时间</a>
        
        <div class="divider"></div>
        <h1>方式二：最后投票日之前（线下投票）</h1>
        <p>10月20日（星期四）至10月22日(星期六）早10点至晚8点，在万锦市指定的投票处做纸质选票投票。</p>

        <div class="divider"></div>
        <h1>方式三：最后投票日当天 （线上投票）</h1>
        <p>10月24日(星期一)为最后投票日。可以在早10点至晚8点期间，使用个人电子设备、万锦市图书馆提供的电脑、或者在指定的投票处使用投票专用触屏设备进行线上投票。</p>
        <a href="https://markham.bibliocommons.com/locations/?_ga=2.113146124.965856506.1649172318-1956973357.1649172318 ">指定投票地点查询</a>


        <div class="divider"></div>
        <h1>方式四：在Markham市选举办公室（线下投票）</h1>
        <p>10月14日至10月22日期间，通过预约在早10点至晚8点期间，在Markham Civic Centre 进行线下投票。</p>
        <p>地址和联系方式：</p>
        <p>Markham Civic Centre<br>101 Town Centre Blvd, Markham, ON L3R 9W3<br>Tel: (905) 477-7000</p>
        <!-- <a href="@/assets/voteStepsSimp.pdf" target="_blank"><button class="votesteps">投票步骤</button></a> -->
        <!-- <button class="votesteps" @click="openPDF()"><img src="https://www.iconpacks.net/icons/2/free-pdf-download-icon-3388-thumb.png"><p>选民信息更新步骤-></p></button>
        <button class="startvote" @click="voteLink()">投票注册</button> -->
    </main>
</template>
<script>


export default {
    name: "HowtovoteSimp",
    methods:{
        openPDF(){
            window.open("https://www.yanwangmarkham.ca/svote.pdf")
        },
        voteLink(){
            window.open("https://www.electionsmarkham.ca/en/voting/register-to-vote/")
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';
.divider{
    height: 20px;
    width: 100%;
}
h1{
    text-align: left;
    color: $primary-color;
    font-size: $heading1;
    
}
ul{
    text-align: left;
    font-size: $paragraph;
    padding-left: 25px;
}
p{
    text-align: left;
}
a{
    text-decoration: none;
    text-align: left;
    display: block;

}

.votesteps{
    @include button;
    width: fit-content;
    border: none;
    outline: none;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: all .3s;
    // &:hover{
    //     cursor: pointer;
    //     color: $primary-color-hover;
    //      background-color: $title-color;
    // }
    // &:hover img{
    //     transform: none;
    // }
    // &:hover p{
    //     transform: none;
    // }
    color: white;
    background-color: $title-color;

    & > img{
        width: 35px;
        display: block;
        // transform: translateX(-20px);
        // transition: all .3s;

    }
    & > p{
        // transform: translateX(-20px);
        transition: all .3s;
    }

}

.voteactions{
    display: flex;
    gap: 20px;
    padding-bottom: 20px
}
// .votesteps{

//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
    
//     & > img{
//         width: 35px;
//         display: block;
//         // transform: translateX(-10px);
//         transition: all .3s;

//     }


// }

.startvote{
    @include button;
    background-color: $primary-color;
    border: none;
    outline: none;
    margin-top: 20px;
    color: white;

    &:hover{
        background-color: #015d5a;
        cursor: pointer;
    }

}
</style>