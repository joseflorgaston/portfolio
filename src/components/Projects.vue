<template>
    <div class="projects">
        <h1 class="h1 text-shadow text-white font-sans">Proyectos</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 project">
            <div v-for="(item, i) in 10" :key="i">
                <div class="p-2 ml-3 mr-3 sm:p-4 lg:ml-12 lg:mr-6 rounded-xl md:p-8 bg-black grid grid-cols-1 xl:grid-cols-2 mb-12">
                    <img src="../assets/images/zardus.PNG" class="p-6">
                    <div class="p-2">
                        <h1 class="h2 light-blue">Zardus Admin</h1>
                        <div class="flex flex-wrap justify-around">
                            <div class="chip mt-2">Vue</div>
                            <div class="chip mt-2">Nuxt</div>
                            <div class="chip mt-2">Express</div>
                            <div class="chip mt-2">Node</div>
                        </div>
                        <span class="subtitle">Sistema de administracion de la empresa Zardus S.A.
                            Sistema web que calcula el stock de los productos, permite controlar los pedidos, compras,
                            gastos y ganancias de la empresa Zardus.
                        </span>
                        <div class="flex justify-evenly mt-3">
                            <button
                                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Proyecto
                            </button><button
                                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Source
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
let projects = [
    {

    }
]
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

.project {
    width: 100%;
}

.subtitle {
    margin-top: 20px !important;
    color: aliceblue;
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
</style>