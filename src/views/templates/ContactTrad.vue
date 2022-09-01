<template>
    <Contact :lang="lang"/>
</template>

<script>
// @ is an alias to /src
import Contact from '@/views/Contact.vue';

export default {
  name: 'ContactTrad',
  components: {
    Contact
  },
  data(){
      return{
          lang: 1,
      }
  },    
  
}
</script>
