<template>
    <section id="about_me">
        <div class="about-me-section">
            <div class="max-width grid-end grid md:grid-cols-2 grid-cols-1 items-center grid dark:bg-gray-800 p-5">
                <AboutMeImage1 class="order-last sm:order-first" />
                <div class="mt-6 md:mt-2">
                    <h5 class="mb-2 h2 text-center font-sans light-blue tracking-tight">
                        {{aboutMe.title}}
                    </h5>
                    <p class="mb-3 md:px-6 font-normal leading-5 text-white-700 mt-3 md:mt-8 dark:text-gray-400">
                        {{ aboutMe.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useI18NStore } from '../store/i18n';
import AboutMeImage1 from './AboutMeImage.vue';

const i18nStore = useI18NStore();
const lang = computed(() => {
    return i18nStore.lang;
});
let aboutMe = ref({
    title: "",
    description: ""
})

watch(lang, async (newLang) => {
    setAboutMe(newLang);
})

setAboutMe(lang.value);

function setAboutMe(newLang: string) {
    if (newLang === 'English') {
        aboutMe.value = {
            title: "About me",
            description: "Software engineer with +3 years of experience generating code for companies from different sectors with Flutter, Vuejs and Nodejs as my main stack. I developed both mobile and much visited web apps with excellent reviews. Problem solving and teamwork specialist"
        }
    }
    if (newLang === "Español") {
        aboutMe.value = {
            title: "Acerca de mi",
            description: "Desarrollador Full-Stack con 3+ años de experiencia generando código para empresas de distintos sectores. Creé tanto aplicaciones móviles, como páginas web muy concurridas y con excelentes reseñas. Especialista en solución de problemas y trabajo en equipo."
        }
    }
}

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