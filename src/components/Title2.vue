<template>
    <main>
        <!-- <div class="bg" :style="{'background-image': 'url(https://images.unsplash.com/photo-1603298108410-e6f28ad2708d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmVpZ2hib3Job29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80)'}"></div>
        <div class="bg__shade"></div> -->
        <div class="text">
            <h1>{{headingTitle}}</h1>
            
            
            <!-- <div class="wrap">
                <button @click="prev()" class="wrap__prev"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8.025 22.2 6.05 20.225 14.275 12 6.05 3.775 8.025 1.8l10.2 10.2Z"/></svg></button>
                <div class="slider" id="slider">
                    <div class="slider__container" :class="{'transit': transit}" :style="{'transform': `translateX(${amount}px)`, 'width': `calc(${textWidth}px * ( 2 + ${questions.length} ))`}">
                        
                        <p :class="{'transit': transit}" :style="{'opacity': [this.amount == 0 ? 1 : 0], 'width': textWidth}">{{questions[questions.length-1]}}</p>
                        <p v-for="(question, index) in questions" :class="{'transit': transit}" :style="{'opacity': [this.amount == (index+1)*this.textWidth*-1? 1 : 0], 'width': textWidth}">{{question}}</p>
                         <p :class="{'transit': transit}" :style="{'opacity': [this.amount == (questions.length+1)*this.textWidth*-1? 1 : 0], 'width': textWidth}">{{questions[0]}}</p>

                    </div>
                </div>
                <button @click="next()" class="wrap__next"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8.025 22.2 6.05 20.225 14.275 12 6.05 3.775 8.025 1.8l10.2 10.2Z"/></svg></button>
            </div> -->
        </div>

    </main>
</template>
<script>
export default {
    name: "Title",
    data(){
        return{
            questions: ["When can road construction be completed?",
                        "Is my community safe and secure?",
                        "How can I prevent car thefts?",
                        "Does anyone clear snow on the sidewalks?",
                        "When will the city remove fallen trees?",
                        ],
            
            amount: -500,
            transit: true,
            enabled: true,
            time: 10,
            textWidth: 400,
        }
    },
    computed:{
        getTextWidth(){
            console.log(document.getElementsByClassName('slider').offsetWidth)
            return document.getElementsByClassName('slider').offsetWidth;
        }
    },
    props:{
        lang: 0,
        headingTitle: String,
        pagetype: String,
    },
    methods:{
        carousel(){
            setTimeout(function(){
                if(this.time == 0){
                    this.next();
                    this.time = 10;
                }else{
                    this.time = this.time - 1;
                }
                this.carousel();
       
            }.bind(this), 1000);
        },
        prev(){
            if(this.enabled){
                this.time = 10;
                this.enabled = false;
                this.transit = true;
                this.amount = this.amount + this.textWidth;
            }
            
        },
        next(){
            if(this.enabled){
                this.time = 10;
                this.enabled = false;
                this.transit = true;
                this.amount = this.amount - this.textWidth
            }
            
        },
        openPDF(){
            window.open("https://www.yanwangmarkham.ca/svote.pdf")
        },
        voteLink(){
            window.open("https://www.electionsmarkham.ca/en/voting/register-to-vote/")
        }
    },
    // mounted(){
    //     this.textWidth = document.getElementById("slider").offsetWidth;

    //     this.amount = (Math.floor(Math.random() * this.questions.length)+1) * this.textWidth * -1;
    //     this.carousel();
    //     const slider = document.querySelector(".slider__container");
    //     slider.addEventListener('transitionend', () => {
            
    //         if(this.amount == (this.questions.length+1) * this.textWidth * -1){
    //             this.transit = false
    //             this.amount = this.textWidth * -1;
    //         }else if(this.amount == 0){
    //             this.transit = false
    //             this.amount = this.questions.length * this.textWidth * -1;
    //         }
    //         this.enabled = true;

    //     });
        


    // }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles.scss";

main{
    background-color: $title-color;
    height: 150px;
    position: relative;
    
    
}
.bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-position:top;
    background-size:cover;
    filter: brightness(110%) contrast(90%) blur(2px);

    &__shade{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #d7d3ca6a;
    }
    

}
.text{
    position: absolute;
    width: 100%;
     text-align: left;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     
}
.smallertitle{
    font-size: 3em;
}
h1{
    color: white;
    font-size: 4em;
    text-align: center;
    width: 100%;
    line-height: 60px;
    padding: 0px 20px;

    
}
@media only screen and (max-width: 750px){
    h1{
        font-size: 3em;
    }
}
// .wrap{
//     display: flex;
//     flex-direction: row;
//     width: 600px;
//     height: fit-content;
//     justify-content: space-between;
//     transform: translateX(-70px);

//     &__prev{
//         & > svg{
//         transform: rotate(180deg);
//         }
//     }

//     // &__next{
//     //     & > svg{
//     //     transform: translateY(2px) translateX(1px);
//     //     }
//     // }

 
// }
// .slider{
//     width: 500px;
//     height: fit-content;
//     align-self: stretch;
//     overflow: hidden;
//     // width: calc(400px * 4);

//     &__container{
//         display: flex;
//         flex-direction: row;
//         height: fit-content;
//         // width: calc(500px * 8);

//     }
    
// }
// .transit{
//     transition: all 1s ease;
//     -webkit-transition:  all 1s ease;
//      -moz-transition:  all 1s ease;
//      -o-transition:  all 1s ease;
//      -ms-transition:  all 1s ease;
// }
// p{
//     width: 500px;
//     font-size: 25px;
//     padding: 0px 20px;
//     font-family: 'Times New Roman', Times, serif;
//     font-style:oblique;

    
// }
// button{
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     border: none;
//     outline: none;
//     background-color: rgba(255, 255, 255, 0.424);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     align-self: center;

//     &:hover{
//         cursor: pointer;
//         background-color: rgba(255, 255, 255, 0.675);
//     }

    
// }





// @media only screen and (max-width: 710px){

//     .voteactions{
//         justify-content: center;
//         align-items: center;
//         margin: auto;
//         flex-direction: column;
//         height: fit-content;
//         gap: 15px;
//         width: 300px;
//     }
//     .startvote{
//         margin: 0;
//     }
//     .votesteps{
//         margin: 0;
//         width: 200px;
//         & > img{
//             display: none;
//         }
//     }
   
//     .slider{
//         width: calc(100% - 120px);
        
//     }
//     .wrap{
//         width: 100%;
//         transform: none;
//     }
// }
// @media only screen and (max-width: 450px){
//     p{
//         font-size: 20px;
//     }
// }
</style>
