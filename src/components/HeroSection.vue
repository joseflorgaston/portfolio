<template>
    <div class="hero-section">
        <h1 class="h1 text-shadow title font-sans">Jose Flor Gaston</h1>
        <h1 class="h2 text-shadow title-small font-sans">Mobile Developer</h1>
    </div>
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
    font-size:5rem;
    transition: all 500ms;
    font-size-adjust: 20px;
    color: #298efa !important;
    cursor: crosshair;
}
.title-small:hover {
    font-size:3rem;
    transition: all 500ms;
    font-size-adjust: 20px;
    color: #298efa !important;
    cursor: crosshair;
}
</style>