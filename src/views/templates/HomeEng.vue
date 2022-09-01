<template>
    <Home :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import Home from '@/views/Home.vue';

export default {
  name: 'HomeEng',
  components: {
    Home
  },
  data(){
      return{
          lang: 0,
      }
  },
 
  
}
</script>
<style lang="scss" scoped>

</style>
