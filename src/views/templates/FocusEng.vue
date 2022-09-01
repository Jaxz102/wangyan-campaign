<template>
    <Focus :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import Focus from '@/views/Focus.vue';

export default {
  name: 'FocusEng',
  components: {
    Focus
  },
  data(){
      return{
          lang: 0,
      }
  },    
  
}
</script>
