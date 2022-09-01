<template>
    <Endorsements :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import Endorsements from '@/views/Endorsements.vue';

export default {
  name: 'CommunityTrad',
  components: {
    Endorsements
  },
  data(){
      return{
          lang: 0,
      }
  },    
  
}
</script>
