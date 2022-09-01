<template>
    <div class="animated">  
        <h1>{{msg[messageType][lang]}}</h1>

    </div>
</template>

<script>
export default {
    name: "Message",
    data(){
        return{
            msg: [["Thanks for Joining Us!", "感謝您加入我們！", "感谢您加入我们!"], ["Thanks for Contacting!", "感謝您的聯繫!", "感谢您的联系!"]]
        }
    },
    props: {
        lang: 0,
        messageType: 0,
       
    }
    
}
</script>
<style lang="scss" scoped>


div{
    position: fixed;
    z-index: 6;
    width: 100%;
    height: fit-content;
    background-color: #42b883;
    animation-name: load;
    animation-duration: 3s;
    top: -80px;
}
@keyframes load {
  0% {transform: none;}
  17%{transform: translateY(80px);}
  83%{transform: translateY(80px);}
  100% {transform: translateY(-20px);}
}
h1{
    color: white;
    font-weight: 600;
    font-size: 2.4em;
    padding: 20px 30px;
}
</style>