<template>
    <section class="intro">
        <img src="@/assets/images/banner1.jpeg" class="intro__img" alt="">
        <!-- <div class="intro__bg"></div> -->
        <div class="intro__story">
            <h1 class="intro__story--title">Yan's Message</h1>
            <p class="intro__story--text">I am deeply grateful for this city, its facilities, services, and fellow residents. I decided to join the race
            to become your next Ward 2 Councillor and bring my experience to the table. Together, I believe we can make our community stronger and healthier.</p>
        </div>
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
    height: fit-content;
    position: relative;

    overflow: hidden;
    background-color: $background-color;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;


    &__img{
        // position: static;
        // width: 55%;
        height: 400px;
        transform: scale(.8);
        border: solid 5px $primary-color;
        // transform: translateX(-50px);
        // top: 0;
        // left: 0;
        // z-index: -2;
  
    }

    &__bg{
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(270deg,#d7d3ca 33.4%,rgba(215, 211, 202,0.961265) 48.23%,rgba(215, 211, 202,0.815448) 58.4%,rgba(215, 211, 202,0.471765) 66.18%,rgba(215, 211, 202,0) 72.85%);
        z-index: -1;
    }
    
    &__story{
        height: fit-content;
        width: 500px;
        // padding: 40px 40px 60px 40px;       
        // float: right;
        &--title{
            font-size: 2.5em;
            font-weight: 600;
            color: $primary-color;
           
        }
        &--text{
            color: $text-color;
            font-size: 22px;
            text-align: left;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
        }
    }
}

@media only screen and (max-width: 1200px){
    .intro{
        // gap: 10px;
        justify-content: space-between;
        &__img{
            transform: none;
            border: none;
        }
        &__story{
            // width: 600px;
            width: 100%;
            padding: 0px 30px;
        }
    }
    
}

@media only screen and (max-width: 1000px){
    .intro{
        // gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        &__img{
            border: solid 5px $primary-color;
            width: 400px;
            height: auto;
        }
        &__story{
            width: 680px;
            padding: 0px 0px;
        }
    }
    
}
@media only screen and (max-width: 800px){
    .intro{
        // gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        &__img{
            border: solid 5px $primary-color;
            width: 400px;
            height: auto;
        }
        &__story{
            width: 100%;
            padding: 0px 20px;
        }
    }
    
}

</style>