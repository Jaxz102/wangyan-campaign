<template>
    <Home :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import Home from '@/views/Home.vue';

export default {
  name: 'HomeSimp',
  components: {
    Home
  },
  data(){
      return{
          lang: 2,
      }
  },    
  
}
</script>
<style lang="scss" scoped>

</style>
