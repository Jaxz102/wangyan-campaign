<template>
    <Navbar />
    <div class="bar"></div>
    <h1>HOW TO VOTE</h1>
    
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles.scss";

.bar{
    height: 80px;
    visibility: hidden;
}
</style>
