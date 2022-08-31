<template>
    <nav class="semi-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-100">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#hero" class="text-link flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">José</span>
            </a>
            <div class="w-full block w-auto" id="navbar-default">
                <ul
                    class="flex md:flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-3 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li v-for="(item, i) in navbarItems" :key="i">
                        <a :href="item.href"
                            class="hidden md:block py-2 pr-4 pl-3 text-white-700 text-link rounded md:border-0md:p-0 dark:text-gray-400">
                            {{ item.text }}
                        </a>
                    </li>
                    <li class="languaje-button">
                        <button @click="changeLanguaje"
                            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-1 px-2 hover:text-white md:py-2 md:px-4 border border-blue-500 hover:border-transparent rounded max-width-50 languaje-button">
                            {{ i18nStore.lang.slice(0, 2) }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { useI18NStore } from '../store/i18n';
import { Navbar } from '../../models/Navbar';
import { computed, reactive, Ref, ref, watch } from 'vue';

const i18nStore = useI18NStore();
let navbarItems: Ref<Navbar[]> = ref([]);
const lang = computed(() => {
    return i18nStore.lang;
});

watch(lang, async (newLang) => {
    setTitles(newLang);
})

setTitles(lang.value);

function setTitles(newLang: string) {
    if (newLang === "Español") {
        navbarItems.value = [
            {
                href: "#about_me",
                text: "Acerca de mi"
            },
            {
                href: "#projects",
                text: "Proyectos"
            },
            {
                href: "#professional_experience",
                text: "Experiencia"
            },
            {
                href: "#technologies",
                text: "Tecnología"
            },
            {
                href: "#contact",
                text: "Contacto"
            },
        ];
    }
    if (newLang === "English") {
        navbarItems.value = [
            {
                href: "#about_me",
                text: "About me"
            },
            {
                href: "#projects",
                text: "Projects"
            },
            {
                href: "#professional_experience",
                text: "Experience"
            },
            {
                href: "#technologies",
                text: "Technologies"
            },
            {
                href: "#contact",
                text: "Contact"
            },
        ];
    }
}
function changeLanguaje() {
    i18nStore.changeLanguage();
}

</script>
<style scoped>
.semi-transparent {
    background-color: rgba(15, 25, 37, 0.6);
}

.text-link:hover {
    color: #298efa;
    cursor: pointer;
}

@media only screen and (max-width:767px) {
    .languaje-button {
        height: fit-content;
        max-height: 30px;
    }
}
</style>