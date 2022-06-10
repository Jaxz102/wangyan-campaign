<template>
  <Navbar />
  <div class="bar"></div>
  <div class="sec">
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit libero volutpat sed cras. Risus at ultrices mi tempus imperdiet. Quis hendrerit dolor magna eget est. Tellus rutrum tellus pellentesque eu tincidunt tortor. Elementum tempus egestas sed sed risus pretium quam vulputate. Neque sodales ut etiam sit amet nisl purus in mollis.</p>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar2.vue';
import translate from '@/assets/translate.json'

export default {
    name: "About",
    components: {
        Navbar
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles.scss';
.bar{
    height: 80px;
    width: 100%;
}
.sec{
    height: 1000px;
    background-color: #fffbf0;
    background-image: url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    & > h1{
        font-size: $heading1;
        padding: 40px 0px 20px 0px;
    }

    & > p {
        font-size: $paragraph;
        width: clamp(375px, 75%, 1000px);
        text-align: left;
        margin: auto;
        padding: 0px 10px;

    }
}
</style>
