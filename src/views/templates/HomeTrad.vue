<template>
    <Home :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import Home from '@/views/Home.vue';

export default {
  name: 'HomeTrad',
  components: {
    Home
  },
  data(){
      return{
          lang: 1,
      }
  },    
  
}
</script>
<style lang="scss" scoped>

</style>
