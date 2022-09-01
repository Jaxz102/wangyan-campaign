<template>
    <Support :lang="lang" />
</template>

<script>
// @ is an alias to /src
import Support from '@/views/Support.vue';

export default {
  name: 'SupportSimp',
  components: {
    Support
  },
  data(){
      return{
          lang: 2,
      }
  },    
  
}
</script>

