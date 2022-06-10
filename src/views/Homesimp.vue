<template>
    <!-- <Navbar />
    <div class="bar"></div>
    <div class="banner">
        <img src="../assets/images/banner1.jpeg" alt="banner1">
        <div class="banner__text">
            <h1 class="banner__title">Lives in Ward 2</h1>
            <h2 class="banner__subtitle">Listener & Organizer<br>Credibility & Accountability</h2>
        </div>
        
    </div> -->
    <div class="home">
        <div class="home__text">
            <p class="home__text--first">新的可能性</p>
            <p class="home__text--second">真正的领导</p>
            <h1 class="home__title">王艳</h1>
            <h2 class="home__subtitle">竞选二区</h2>

            <section class="home__buttons">
                <button class="home__buttons--vote">如何投票</button>
                <button class="home__buttons--contact">联系</button>
            </section>
        </div>
        
        <img src="../assets/images/portrait.png" alt="">
    </div>
    <div class="message1">
        <h1>为王艳投票！</h1>
    </div>
    
    <section class="intro">


        <h1 class="intro__title">Yan's Story</h1>
        <p class="intro__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus. Nisl nisi scelerisque eu ultrices vitae auctor. Diam phasellus vestibulum lorem sed. Mauris nunc congue nisi vitae suscipit tellus mauris a. Fusce ut placerat orci nulla.</p>
    </section>
    
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles.scss";

@mixin button{
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    outline: none;
    
}

.home{
    width: 100%;
    height: 600px;
    background: rgb(37, 37, 37);
  
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;

    & > img{
        display: block;
        width: 450px;
        align-self: flex-end;

    }

    &__text{
        // position: absolute;
        // z-index: 4;
        // top: 50%;
        // left: 10%;
        transform: translateY(-20px);
        height: fit-content;
        


        &--first{
            color: white;
            font-size: 40px;
            font-weight: 100;
            line-height: 60px;
        }

        &--second{
            color: white;
            font-size: 50px;
            font-weight: 600;
            line-height: 50px;
        }
    }

    &__title{
        color: #ffdd88;
        font-size: 80px;
        font-weight: 600;
        
    }

    &__subtitle{
        color: white;
        font-size: 40px;
        font-weight: 200;
        line-height: 50px;
    }

    &__buttons{
        display: flex;
        flex-direction: row;
        margin: auto;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 20px;

        &--vote{
            @include button;
            background-color: #ffdd88;
            color: rgb(37, 37, 37);
            border: none;

            &:hover{
                cursor: pointer;
                background-color: #fce3a3;
            }
            
 
        }

        &--contact{
            @include button;
            background: none;
            border: solid 3px white;
            color: white;

            &:hover{
                cursor: pointer;
                background: rgba(255, 255, 255, 0.448);
            }
        }
    }


}

.message1{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    background-color: $primary-color;
    & > h1{
        margin: auto;
        text-align: center;
        color: $text-color;
        font-weight: 600;
        font-size: 45px;
    }
}
.intro{
    height: fit-content;
    
    &__title{
        font-size: 40px;
        font-weight: 600;
        color: $text-color;
        padding: 40px 0px 20px 0px;
    }
    &__text{
        padding: 10px 200px 60px 200px;
        color: $text-color;
        font-size: 30px;
        text-align: left;
        margin: auto;
    }


}
// .bar{
//     height: 80px;
//     visibility: hidden;
// }
// .banner{
//     width: 100%;
//     height: 500px;
//     overflow: hidden;
//     position: relative;
//     & > img{
//         width: 100%;
//         transform: translateY(-40px);
//         filter: brightness(0.75);
//     }
//     // background-image: url("../assets/images/banner1.jpeg");
//     // background-size: cover;
//     // background-position: center;

//     // &__title{
//     //     position: absolute;
//     //     font-size: 60px;
//     //     font-weight: 600;
//     //     color: pink;
//     //     top: 50px;
//     //     right: 100px;
//     // }

//     // &__subtitle{

//     // }
//     &__text{
//         position: absolute;
//         z-index: 2;
//         top: 50px;
//         right: 50px;
//         // background-color: blue;
//         & > h1{
//             text-align: left;
//             font-size: 60px;
//             font-weight: 600;
//             color: rgb(251, 209, 216);
            
//         }
//         & > h2{
//             text-align: left;
//             font-size: 40px;
//             font-weight: 600;
//             color: pink;

//         }
//     }

// }

@media screen and (max-width: 1000px) {
    .home{
        gap: 0px;
        &__text{
            background: rgba(37, 37, 37, 0.691);
            padding: 20px;
        }
    }
}
</style>
