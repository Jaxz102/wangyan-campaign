<template>
    <Howtovote :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import Howtovote from '@/views/Howtovote.vue';

export default {
  name: 'HomeEng',
  components: {
    Howtovote
  },
  data(){
      return{
          lang: 2,
      }
  },    
  
}
</script>

