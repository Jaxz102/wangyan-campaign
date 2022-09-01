<template>
    <Support :lang="lang" />
</template>

<script>
// @ is an alias to /src
import Support from '@/views/Support.vue';

export default {
  name: 'SupportTrad',
  components: {
    Support
  },
  data(){
      return{
          lang: 1,
      }
  },    
  
}
</script>

