<template>
    <About :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import About from '@/views/About.vue';

export default {
  name: 'HomeEng',
  components: {
    About
  },
  data(){
      return{
          lang: 0,
      }
  },    
  
}
</script>
