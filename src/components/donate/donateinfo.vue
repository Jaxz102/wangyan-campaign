<template>
    <section class="content-padding">
        <!-- <h1>DONATEEEE</h1> -->
        <p class="text">我们需要您的财政支持才能赢得竞选，这也是个人对确保我们民主系统运作的一种贡献，帮助 Yan Wang为万锦第二区市议员的所有居民努力工作。</p>
        <p class="text"><span class="text__head">捐款渠道：</span>您最多可以为 Yan Wang 的竞选活动捐款 1,200 加币，并且可以发送电子转账或个人支票。</p>
        <p class="text"><span class="text__head">支票捐款：</span>Yan Wang Campaign Ward 2 Markham</p>
        <p class="text"><span class="text__head">电子转账捐款：</span>Yan Wang Campaign Ward 2 Markham</p>
        <p class="text"><span class="text__head">电子邮箱：</span>yan@yanwangmarkham.ca</p>
        <h1>捐款说明：</h1>
        <ul>
            <li>最高捐款额$1200</li>
            <li>万锦市的选民和永久居民可获得万锦市政府75%返还，最高返款额$150</li>
        </ul>
        <p class="text">例：如果您的捐款金额从 50加币 到200 加币，那么返还75%，如果您的捐款金额从 200 加币到 1,200 加币，那么返还金额是 150 加币；</p>
        <p class="text">注意：捐款额低于 50 加币、非万锦选民或万锦永久居民的捐款无返还金额。</p>

        <p class="text">万锦市政府Rebate退款参考表格如下：</p>

        <table>
        <tr>
            <th>捐款金额</th>
            <th>政府返还</th>
            <th>实际金额</th>
        </tr>
        <tr>
            <td>$100</td>
            <td>$75</td>
            <td>$25</td>
        </tr>
        <tr>
            <td>$200</td>
            <td>$150</td>
            <td>$50</td>
        </tr>
        <tr>
            <td>$300</td>
            <td>$150</td>
            <td>$150</td>
        </tr>
        <tr>
            <td>$500</td>
            <td>$150</td>
            <td>$350</td>
        </tr>
        <tr>
            <td>$1200</td>
            <td>$150</td>
            <td>$1050</td>
        </tr>
        </table>

        <!-- <p class="text">详见万锦市网站有关返还金额的更多信息：<a href="https://www.electionsmarkham.ca/en/candidates/donating-to-a-candidate-s-campaign/">https://www.electionsmarkham.ca/en/candidates/donating-to-a-candidate-s-campaign/</a> </p> -->
        <p class="text">感谢您的支持！</p>
    </section>
</template>
<script>
import Volunteer from '@/components/home/Volunteer.vue';

export default {
    name: "Donate",
    components:{

    },
    props: {
        lang: 0,
    }

}
</script>
<style lang="scss" scoped>
@import '../../assets/styles.scss';
h1{
    text-align: left;
    margin-top: 20px;
    color: $primary-color;
}
p:not(:first-child){
    margin-top: 20px;
}
.text{
    font-size: $paragraph;
    text-align: left;
    
    &__head{
        font-weight: 600;
    }

}
ul{
    font-size: $paragraph;
    text-align: left;
    padding-left: 40px;

}
th{
    text-align: center;
    font-size: $paragraph;
    border: 1px solid #dddddd;
    padding: 8px 20px;
    color: white;
    
}
td{
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px 20px;
  font-size: $paragraph;
  width: 200px;
  font-weight: 600;

}

tr:nth-child(even) {
  background-color: $title-color;
  color: rgb(0, 0, 0);
  filter: drop-shadow(0,0,1px,black);
}
tr:nth-child(odd) {
  background-color: $primary-color;
  color: white;
}
table{
    margin: auto;
    margin-top: 20px;
}



@media only screen and (max-width: 500px){
    th{
        font-size: 18px;
        padding: 8px 10px;
    }
    td{
         font-size: 20px;
        // padding: 8px 10px;
    }

}
</style>