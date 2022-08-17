<template>
    <section id="projects">
        <div class="projects pt-8">
            <h1 class="h2 text-shadow text-white font-sans mb-5 sm:mb-8">Proyectos</h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 project">
                <div v-for="(project, i) in projects" :key="i">
                    <div
                        class="p-2 ml-3 mr-3 sm:p-4 lg:ml-12 lg:mr-6 rounded-xl md:p-8 bg-black grid grid-cols-1 xl:grid-cols-2 mb-12">
                        <img :src="project.imgUrl" @mouseover="mouseOver(i.toString(), project.gifUrl)"
                            @mouseleave="mouseLeave(i.toString(), project.imgUrl)" :id="'img-' + i"
                            class="p-6 hvr-grow project-img">
                        <div class="p-2">
                            <span class="h3 hvr-grow project-title" @click="goToProject(project.projectUrl)">{{
                                    project.name
                            }}</span>
                            <div class="flex flex-wrap justify-around">
                                <div v-for="(tech, k) in project.techStack" :key="k" class="chip mt-2">{{ tech }}</div>
                            </div>
                            <div style="min-height: 5rem;">
                                <span class="subtitle">{{ project.description }} </span>
                            </div>
                            <div class="flex justify-evenly mt-3">
                                <button
                                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-width-50"
                                    @click="goToProject(project.projectUrl)">
                                    Link to project
                                </button>
                                <button @click="goToProject(project.githubUrl)"
                                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-width-50">
                                    Source Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
let projects = [
    {
        name: "Zardus Admin",
        imgUrl: "/src/assets/images/zardus.png",
        gifUrl: "/src/assets/images/zardus.gif",
        techStack: ["Vue", "Nuxt", "Express", "Node"],
        description: "Sistema de administracion de la empresa Zardus S.A. Sistema web que calcula el stock de los productos, permite controlar los pedidos, compras, gastos y ganancias de la empresa Zardus.",
        projectUrl: "https://zardus-admin.com",
        githubUrl: "https://github.com/joseflorgaston/zardus-admin/commits/main"
    },
    {
        name: "AM Solutions",
        imgUrl: "/src/assets/images/amsolutions.jpg",
        gifUrl: "/src/assets/images/amsolutions.gif",
        techStack: ["Vue", "Vite", "Bootstrap", "JQuery"],
        description: "Landing page de la empresa AM Solutions. Desarrollada con VueJs, Vite y Bootstrap",
        projectUrl: "https://spiffy-clafoutis-b219f9.netlify.app/",
        githubUrl: "https://github.com/joseflorgaston/startup"
    },
    {
        name: "Comic",
        imgUrl: "/src/assets/images/comic.png",
        gifUrl: "/src/assets/images/comic.gif",
        techStack: ["Flutter", "Dart", "Express", "Node"],
        description: "Web Abb desarrollada en Flutter, permite la busqueda de comics, sus detalles y autores.",
        projectUrl: "https://github.com/joseflorgaston/comics-webapp",
        githubUrl: "https://github.com/joseflorgaston/comics-webapp"
    },
    {
        name: "Otapp",
        imgUrl: "/src/assets/images/otapp.png",
        gifUrl: "/src/assets/images/otapp.png",
        techStack: ["Flutter", "Dart", ".NetCore", "C#"],
        description: "Aplicación móvil de compra, renta y venta de vehículos desarrollada en Flutter para IOS y Android.",
        projectUrl: "https://github.com/joseflorgaston/comics-webapp",
        githubUrl: "https://github.com/joseflorgaston/comics-webapp"
    },
]
function goToProject(url: string) {
    window.open(url, '_blank')?.focus();
}
function mouseOver(id: string, src: string) {
    let imageElement = document.getElementById("img-" + id) as HTMLImageElement;
    imageElement.src = src;
    console.log(imageElement.src);
}
function mouseLeave(id: string, src: string) {
    let imageElement = document.getElementById("img-" + id) as HTMLImageElement;
    imageElement.src = src;
}
</script>
<style scoped>
.projects {
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: fit-content;
    line-height: normal;
    background-image: linear-gradient(#17365c, #010206);
}

.max-width-50 {
    max-width: 48% !important;
}

.project {
    width: 100%;
}

.project-img {
    cursor: pointer;
}

.subtitle {
    margin-top: 20px !important;
    color: aliceblue;
    min-height: 10rem !important;
}

.chip {
    width: fit-content;
    min-width: 80px;
    padding: 0.5rem;
    margin: 0.5rem 0px 1rem 0px;
    width: fit-content;
    border-radius: 2rem;
    background-color: #298efa;
    color: white;
}

.project-title {
    color: #298efa;
}

.project-title:hover {
    text-decoration: underline;
    cursor: pointer;
}

@media only screen and (max-width:600px) {
    .chip {
        min-width: 20%;
        width: fit-content;
        overflow: hidden;
        max-width: 26%;
        margin: 20 auto;
        padding: 3%;
    }
}
</style>