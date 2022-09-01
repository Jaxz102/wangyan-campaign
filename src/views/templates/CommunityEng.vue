<template>
    <Community :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import Community from '@/views/Community.vue';

export default {
  name: 'CommunityEng',
  components: {
    Community
  },
  data(){
      return{
          lang: 0,
      }
  },    
  
}
</script>
