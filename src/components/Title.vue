<template>
    <main>
        

        <div :class="wrap">
            <h1 :class="`${type}__title`" class="wrap__title">"{{quote[lang][page]}}"</h1>
            <!-- <p :class="`${type}__byline`" class="wrap__byline">- Yan Wang <span v-if="lang == 2">王艳</span><span v-else-if="lang == 1">王艳</span></p> -->
        </div>
            <!-- <img :class="`${type}__img`" class="wrap__title" :src="require('@/assets/images/titlepic'+page+'.png')" alt=""> -->

       
    </main>
</template>
<script>

export default {
    name: 'Title',
    props:{
        lang: 0,
        page: 0,
        headingTitle: String,
    },
    data(){
        return{
            quote: [
                    ["I'm here to support you!", "Improve the quality of life for communities", "Your problems are my problems", "Putting others before myself"],
                    [],
                    ["为你而来，为你服务", "邻里守望，细致入微", "你的事，就是我的事", "将心比心，为人为己"]
                ],
            type: "imyan"
        }
    },
    methods:{
        navTo(link){
            if(this.lang == 1){
                this.$router.push(`/ct${link}`);
            }else if(this.lang == 2){
                this.$router.push(`/zh${link}`);
            }else{
                this.$router.push(link);
            }

        },
        returnHome(){
            if(this.lang == 1){
                this.$router.push("/ct");
            }else if(this.lang == 2){
                this.$router.push("/zh");
            }else{
                this.$router.push("/");
            }
        },
        trigger(e){
            this.show = !this.show;
            this.opened = !this.opened

        }
    },

}
</script>
<style lang="scss" scoped>
@import '@/assets/styles.scss';
main{
    height: 80px;
    width: 100%;
    background-color: $title-color;
    overflow: hidden;
    position: relative;
    padding: 0 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;



}
.logo{
    width: 300px;
    margin-left: 10px;
    display: block;

    &:hover{
        filter: brightness(110%);
        cursor: pointer;
    }
}
.wrap{

    width: auto;
    height: fit-content;

    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: flex-end;
}
h1{
    width: fit-content;
    color: white;
    font-size: 50px;
    text-align: center;
    margin-right: 0;
    padding-bottom: 20px;

    // transform: translateX(25px);

}
p{

    width: max-content;
    color: $primary-color;
    font-size: $heading1;
    text-align: right;
    width: 100%;
    font-weight: 600;



}
img{
    display: block;
    // transform: translateY(100px);
    // height: 520px;

 
}
.divcontainer{
    position: relative;
    margin-top: 20px;

}



@media only screen and (max-width: 950px) {
    main{
        height: fit-content;
        flex-direction: column;

    }
    h1{
        transform: none;
        text-align: center;
        font-size: 30px;
    }
    p{
        text-align: center;
    }
    img{
        height: 300px;
        margin-top: 10px;
    }
}
</style>
