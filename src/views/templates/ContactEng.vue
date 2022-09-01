<template>
    <Contact :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import Contact from '@/views/Contact.vue';

export default {
  name: 'ContactEng',
  components: {
    Contact
  },
  data(){
      return{
          lang: 0,
      }
  },    
  
}
</script>
