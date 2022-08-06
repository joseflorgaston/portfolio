<template>
  <div>
    <div class="sticky top-0">
    </div>
    <div class="hero">
      <AppBar class="appbar"></AppBar>
      <HeroSection></HeroSection>
    </div>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <TechStack></TechStack>
  </div>
</template>

<script setup lang="ts">
import AppBar from './components/AppBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
import TechStack from './components/TechStack.vue';
</script>

<style scoped>
.appbar {
  width: 100vw;
  position: fixed;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.hero {
  background-image: url("https://i.giphy.com/media/YnlDGfCxyOIYTDp86I/giphy.webp");
  /* The image used */
  background-color: #cccccc;
  /* Used if the image is unavailable */
  height: 100vh;
  /* You must set a specified height */
  background-position: center;
  /* Center the image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  background-size: cover;
  /* Resize the background image to cover the entire container */
}
</style>
