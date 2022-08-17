<template>
    <section id="hero">
        <div class="hero-section">
            <h1 class="h1 text-shadow hvr-grow title font-sans">José Flor Gastón</h1>
            <h1 class="h2 text-shadow hvr-grow title font-sans">Software Engineer</h1>
        </div>
    </section>
</template>
<script lang="ts" setup>

</script>
<style scoped>
.hero-section {
    z-index: 3;
    padding: calc(40vh - 100px) 0;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    line-height: 3.5rem;
}

.title:hover {
    color: #298efa !important;
}
</style>