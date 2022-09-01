<template>
    <main class="containerquote" :style="[lang == 0 && !quote['quotes0'] ? {'display': 'none'} : {'display' : 'flex'}]">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#007d79"><path d="m31.3 34 4-8H26V12h14v14.4L36.2 34Zm-18 0 4-8H8V12h14v14.4L18.2 34Z"/></svg> -->
        <div :style="{'background-image': 'url(' + require(`@/assets/images/${quote.img}`) + ')'}" class="pfp"></div>
        <section class="quotecontainer">
            <div v-for="q in quote['quotes'+lang]" >
                <p v-for="(text, index) in q" v-if="index !== q.length-1" :class="[index != q.length-1 ? 'quote' : 'byline']">{{text}}</p>
            </div>
        </section>
        <!-- <p class="byline">- {{quote[quote.length-1]}}</p> -->
    </main>
</template>

<script>
export default {
    name: "Quote",
    props:{
        lang: 0,
        quote: {},
        // byline: ""
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles.scss';

.containerquote{
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
    background-color: $background-color;
    // margin-top: 25px;
    padding: 25px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;

    & > svg{
        transform: scale(1.4);
        color: $primary-color;

        display: block;
        margin: auto;
    }
}
.pfp{
    height: 150px;
    width: 150px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    overflow: hidden;
    border: solid $primary-color 4px;
}
.quotecontainer{
    width:  calc(100% - 180px);

}
// p{
//     font-size: 20px;
//     margin-top: 5px;
//     font-weight: 400;
// }
.quote{
    text-align: left;
    padding: 0px 30px;
    position: relative;
    font-size: $paragraph;
    &::before{
        display: block;
        position: absolute;
        content: "";
        background-image: url('@/assets/quote.svg');
        width: 40px;
        height: 40px;
        transform: translate(-45px, -15px) rotate(180deg);
        
    }

    &::after{
        display: block;
        position: absolute;
        content: "";
        background-image: url('@/assets/quote.svg');
        width: 40px;
        height: 40px;

        right: 0;
        transform: translate(5px, -30px);
    }
}
.byline{
    text-align: right;
    color: $primary-color;
    font-weight: 600;
    margin-top: 10px;
    padding: 0px 30px;
    font-size: $paragraph;

    &::before{
        content: "- ";
    }
}

@media only screen and (max-width: 800px){
    .containerquote{
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .pfp{
        height: 150px;
        width: 150px;
    }
    .quotecontainer{
        width:  calc(100% - 20px);

    }
    .quote{
        margin-top: 10px;
    }
}

@media only screen and (max-width: 600px){
    .containerquote{
        padding: 20px 20px;
    }
    .quotecontainer{
        width:  100%;

    }
    .quote{
        padding: 0 10px;
        &::before{
            display: none;
        }
        &::after{
            display: none;
        }
    }
}
</style>