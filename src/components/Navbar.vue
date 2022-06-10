<template>
    <main>
        <div class="langselect">
            <p class="langselect__select" @click="changeLang(0)">en</p>
            <p>|</p>
            <p class="langselect__select" @click="changeLang(1)">繁體</p>
            <p>|</p>
            <p class="langselect__select" @click="changeLang(2)">简体</p>

        </div>
        <nav class="nav">
            <p @click="navTo('/about')">{{translate[0][lang]}}</p>
            <p @click="navTo('/focus')">{{translate[1][lang]}}</p>
            <p @click="navTo('/community')">{{translate[2][lang]}}</p>
        </nav>
    </main>
</template>

<script>
import translate from "@/assets/translate.json"
export default {
    name: "Navbar",
    data(){
        return{
            translate: translate.nav,
            lang: 0,
        }
    },
    methods: {
        navTo(link){
            this.$router.push(link);
        },
        changeLang(lang){
            this.lang = lang;
            this.$store.commit("changeLanguage", lang);
            localStorage.setItem("language", lang);
            window.location.reload();
        }
    },
    mounted(){
        console.log("BAR MOUNTED")
        this.lang = this.$store.getters.getLang;
    }
    
}
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";

main{
    background-color: $text-color;
    width: 100%;
    height: fit-content;
    position: relative;

}
.langselect{
    position: absolute;
    color: rgb(87, 87, 87);
    display: flex;
    flex-direction: row;
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
    gap: 10px;

    & > p{
        font-size: 1em;
    }

    &__select{
        &:hover{
            color: white;
            cursor: pointer;
        }
    }
    
}
.nav{
    display: flex;
    flex-direction: row;
    height: fit-content;
    justify-content: center;
    align-items: center;
    gap: 0px;
    padding: 30px;

    & > p{
        color: white;
        height: fit-content;
        font-size: 1.2em;
        width: 150px;
        text-align: center;

        &:hover{
            cursor: pointer;
            color: $primary-color;
            text-decoration: underline;
        }
    }
}

@media only screen and (max-width: 800px){
    .langselect{
        position: static;
        margin: auto;
        transform: none;
        justify-content: center;
        align-items: center;
        padding-top: 15px;
       
    }

    .nav{
        padding-top: 20px;
        font-size: 1.3em;

    }
  
}

@media only screen and (max-width: 400px){
    .langselect{
        position: static;
        margin: auto;
        transform: none;
        justify-content: center;
        align-items: center;
        padding-top: 15px;
       
    }
    .nav{
        flex-direction: column;
        gap: 5px;
    }
}
</style>
