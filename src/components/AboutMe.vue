<template>
    <div class="about-me-section">
        <div
            class="max-width grid md:grid-cols-2 grid-cols-1 items-center grid shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
            <AboutMeImage1 />
            <div class="mt-6 md:mt-2">
                <h5 class="mb-2 h2 text-center font-sans light-blue tracking-tight">
                    Acerca de mi
                </h5>
                <p class="mb-3 md:px-6 font-normal leading-5 text-white-700 mt-3 md:mt-8 dark:text-gray-400">
                    Desarrollador Full-Stack con 3+
                    años de experiencia generando
                    código para empresas de distintos
                    sectores. Creé tanto aplicaciones
                    móviles, como páginas web muy
                    concurridas y con excelentes reseñas.
                    Especialista en solución de problemas
                    y trabajo en equipo.
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import AboutMeImage1 from './AboutMeImage.vue';
</script>
<style scoped>
.about-me-section {
    z-index: 3;
    padding: calc(30vh) 0;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    text-align: justify;
    width: 100%;
    height: fit-content;
    line-height: normal;
    background-image: linear-gradient(#010206, #17365c);
}

.max-width {
    max-width: 1000px;
}

.about-me {
    min-height: 10rem;
    max-height: 800px;
}
</style>