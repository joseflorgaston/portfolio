<template>
  <div>
    <div class="hero">
      <AppBar class="appbar"></AppBar>
      <HeroSection></HeroSection>
    </div>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Timeline></Timeline>
    <TechStack></TechStack>
    <ContactMe></ContactMe>
  </div>
</template>

<script setup lang="ts">
import AppBar from './components/AppBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
import TechStack from './components/TechStack.vue';
import Timeline from './components/Timeline.vue';
import ContactMe from './components/ContactMe.vue';
</script>

<style scoped>
.appbar {
  width: 100vw;
  position: fixed;
}

.hero {
  background-image: url("https://i.giphy.com/media/YnlDGfCxyOIYTDp86I/giphy.webp");
  /* The image used */
  background-color: #04070b;
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
