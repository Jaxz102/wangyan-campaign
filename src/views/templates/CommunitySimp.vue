<template>
    <Community :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import Community from '@/views/Community.vue';

export default {
  name: 'CommunitySimp',
  components: {
    Community
  },
  data(){
      return{
          lang: 2,
      }
  },    
  
}
</script>
