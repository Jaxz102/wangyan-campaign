import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/templates/HomeEng.vue'
import Hometrad from '../views/templates/HomeTrad.vue'
import Homesimp from '../views/templates/HomeSimp.vue'

import About from '../views/templates/AboutEng.vue'
import Abouttrad from '../views/templates/AboutTrad.vue'
import Aboutsimp from '../views/templates/AboutSimp.vue'

import Focus from '../views/templates/FocusEng.vue'
import Focustrad from '../views/templates/FocusTrad.vue'
import Focussimp from '../views/templates/FocusSimp.vue'

import Community from '../views/templates/CommunityEng.vue'
import Communitytrad from '../views/templates/CommunityTrad.vue'
import Communitysimp from '../views/templates/CommunitySimp.vue'

import Endorsements from '../views/templates/EndorsementsEng.vue'
import Endorsementstrad from '../views/templates/EndorsementsTrad.vue'
import Endorsementssimp from '../views/templates/EndorsementsSimp.vue'

import HowTo from '../views/templates/HowtoEng.vue'
import HowTotrad from '../views/templates/HowtoTrad.vue'
import HowTosimp from '../views/templates/HowtoSimp.vue'

import Support from '../views/templates/SupportEng.vue'
import Supporttrad from '../views/templates/SupportTrad.vue'
import Supportsimp from '../views/templates/SupportSimp.vue'

import Contact from '../views/templates/ContactEng.vue'
import Contacttrad from '../views/templates/ContactTrad.vue'
import Contactsimp from '../views/templates/ContactSimp.vue'

import Useless from '../views/Useless.vue'
import Testnav from '../components/home/Contact.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
        title: "Vote Yan Wang - 2022 Ward2 City Councillor"
    }
  },
  {
    path: '/ct',
    name: 'homecanto',
    component: Hometrad,
    meta:{
        title: "Vote Yan Wang - 2022 Ward2 City Councillor"
    }
  },
  {
    path: '/zh',
    name: 'homemando',
    component: Homesimp,
    meta:{
        title: "Vote Yan Wang - 2022 Ward2 City Councillor"
    }
  },
  //ABOUT SECTION PAGES
  {
    path: '/about',
    name: 'about',
    component: About,
    meta:{
        title: "Yan Wang - About"
    }
  },
  {
    path: '/ct/about',
    name: 'aboutcanto',
    component: Abouttrad,
    meta:{
        title: "Yan Wang 我是王豔"
    }
  },
  {
    path: '/zh/about',
    name: 'aboutmando',
    component: Aboutsimp,
    meta:{
        title: "Yan Wang 我是王艳"
    }
  },
//FOCUS SECTION PAGES
  {
    path: '/focus',
    name: 'focus',
    component: Focus,
    meta:{
        title: "Yan Wang - Focus"
    }
  },
  {
    path: '/ct/focus',
    name: 'focustrad',
    component: Focustrad,
    meta:{
        title: "Yan Wang 工作重點"
    }
  },
  {
    path: '/zh/focus',
    name: 'focussimp',
    component: Focussimp,
    meta:{
        title: "Yan Wang 工作重点"
    }
  },
  //COMMUNITY SECTION PAGES
  {
    path: '/community',
    name: 'community',
    component: Community,
    meta:{
        title: "Yan Wang - Community"
    }
  },
  {
    path: '/ct/community',
    name: 'communitytrad',
    component: Communitytrad,
    meta:{
        title: "Yan Wang 服務社區"
    }
  },
  {
    path: '/zh/community',
    name: 'communitysimp',
    component: Communitysimp,
    meta:{
        title: "Yan Wang 服务社区"
    }
  },
//ENDORSEMENTS SECTION PAGES
    {
        path: '/endorsements',
        name: 'endorsements',
        component: Endorsements,
        meta:{
            title: "Yan Wang - Endorsements"
        }
    },
    {
        path: '/ct/endorsements',
        name: 'endorsementstrad',
        component: Endorsementstrad,
        meta:{
            title: "Yan Wang 大家的評價"
        }
    },
    {
        path: '/zh/endorsements',
        name: 'endorsementssimp',
        component: Endorsementssimp,
        meta:{
            title: "Yan Wang 大家的评价"
        }
    },
  //HOW TO VOTE SECTION PAGES
  {
    path: '/how-to-vote',
    name: 'howto',
    component: HowTo,
    meta:{
        title: "Yan Wang - How to Vote"
    }
  },
  {
    path: '/ct/how-to-vote',
    name: 'howtotrad',
    component: HowTotrad,
    meta:{
        title: "Yan Wang 如何投票"
    }
  },
  {
    path: '/zh/how-to-vote',
    name: 'howtosimp',
    component: HowTosimp,
    meta:{
        title: "Yan Wang 如何投票"
    }
  },
  //SUPPORT SECTION PAGES
  {
    path: '/support',
    name: 'support',
    component: Support,
    meta:{
        title: "Yan Wang - Support"
    }
  },
  {
    path: '/ct/support',
    name: 'supporttrad',
    component: Supporttrad,
    meta:{
        title: "Yan Wang 捐款通道"
    }
  },
  {
    path: '/zh/support',
    name: 'supportsimp',
    component: Supportsimp,
    meta:{
        title: "Yan Wang 捐款通道"
    }
  },
  //CONTACT SECTION PAGES
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta:{
        title: "Yan Wang - Contact"
    }
  },
  {
    path: '/ct/contact',
    name: 'contacttrad',
    component: Contacttrad,
    meta:{
        title: "Yan Wang 聯繫"
    }
  },
  {
    path: '/zh/contact',
    name: 'contactsimp',
    component: Contactsimp,
    meta:{
        title: "Yan Wang 联系"
    }
  },

//   {
//     path: '/useless',
//     name: 'useless',
//     component: Useless
//   }
//   {
//     path: '/how-to-vote',
//     name: 'HowtoVote',
//     component: Howtovote,
//   },
    

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})


// const match = window.matchMedia("(pointer:coarse)");
// const isMobile = (match && match.matches);

let firstTime = true;
const lang = navigator.languages;

router.beforeEach(async (to, from) => {
    if(to.name.match(/home/g)){
        if(lang[0] == "zh-TW" || lang[0] == "zh-HK"){
            if(to.name != 'homecanto' && firstTime){
                firstTime = false;
                return {name: 'homecanto'}
            }
        }else if(lang[0] == "zh-CN" && firstTime){
            if(to.name != 'homemando'){
                firstTime = false;
                return {name: 'homemando'}
            }
        }else{
            if(to.name != 'home' && firstTime){
                firstTime = false;
                return {name: 'home'}
            }
        }
        
    }
    document.title = to.meta.title
    
})

export default router
