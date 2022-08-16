<template>
    <div class="tech-stack">
        <div class="container fluid">
            <span class="h2 text-shadow font-sans">Stack Tecnologico</span>
            <div class="flex flex-wrap justify-evenly">
                <div v-for="(logo, i) in logos" :key="i" class="p-5 logo">
                    <img :src=logo.src :class="logo.class" />
                    <span class="font-sans text-xl">{{ logo.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
let logos = [
    {
        src: "https://www.svgrepo.com/show/353884/html-5.svg",
        name: "Html 5",
        class: "logo html hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/353623/css-3.svg",
        name: "Css 3",
        class: "logo css hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/355081/js.svg",
        name: "Javascript",
        class: "logo javascript hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/303600/typescript-logo.svg",
        name: "Typescript",
        class: "logo typescript hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/374175/vue.svg",
        name: "Vue Js",
        class: "logo vue hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/373940/nuxt.svg",
        name: "Nuxt",
        class: "logo nuxt hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/373623/git.svg",
        name: "Git",
        class: "logo git hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/341847/github.svg",
        name: "GitHub",
        class: "logo github hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/354527/vuetifyjs.svg",
        name: "Vuetify",
        class: "logo vuetify hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/353498/bootstrap.svg",
        name: "Bootstrap",
        class: "logo bootstrap hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/374118/tailwind.svg",
        name: "Tailwind",
        class: "logo tailwind hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/373604/flutter.svg",
        name: "Flutter",
        class: "logo flutter hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/353631/dart.svg",
        name: "Dart",
        class: "logo dart hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/353668/dotnet.svg",
        name: ".NET",
        class: "logo dotnet hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/353622/c-sharp.svg",
        name: "C#",
        class: "logo c-sharp hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
        name: "SQL SERVER",
        class: "logo sql hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg",
        name: "Node Js",
        class: "logo node hvr-grow"
    },
    {
        src: "https://www.svgrepo.com/show/331488/mongodb.svg",
        name: "Mongo DB",
        class: "logo mongo hvr-grow"
    },

];
</script>
<style>
.tech-stack {
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
    background-image: linear-gradient(#17365c, #010206 );
}

.tech-stack-logo {
    height: 250px;
    width: auto;
    max-width: 10rem !important;
}

.logo {
    width: 16em;
    padding: 1.5em;
    will-change: filter;
}

@media only screen and (max-width: 800px) {
    .logo{
        width: 10em;
    }
}
.logo:hover {
    cursor: pointer;
    transition: all 500ms;
}

.logo:focus {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.html:hover {
    filter: drop-shadow(0 0 2em #e44d26)
}
.logo.css:hover {
    filter: drop-shadow(0 0 2em #264de4)
}
.logo.javascript:hover {
    filter: drop-shadow(0 0 2em #f1dc50)
}
.logo.typescript:hover {
    filter: drop-shadow(0 0 2em #007acc)
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.nuxt:hover {
    filter: drop-shadow(0 0 2em #108775)
}
.logo.vuetify:hover {
    filter: drop-shadow(0 0 2em #7bc6ff)
}
.logo.bootstrap:hover {
    filter: drop-shadow(0 0 2em #563d7c)
}
.logo.tailwind:hover {
    filter: drop-shadow(0 0 2em #44a8b3)
}
.logo.flutter:hover {
    filter: drop-shadow(0 0 2em #41d0fd)
}
.logo.dart:hover {
    filter: drop-shadow(0 0 2em #00d2b8)
}
.logo.dotnet:hover {
    filter: drop-shadow(0 0 2em #106fb6)
}
.logo.c-sharp:hover{
    filter: drop-shadow(0 0 2em #a179dc)
}
.logo.sql:hover {
    filter: drop-shadow(0 0 2em #a91d22)
}
.logo.node:hover {
    filter: drop-shadow(0 0 2em #8cc84b)
}
.logo.mongo:hover {
    filter: drop-shadow(0 0 2em #13aa52)
}
.logo.git:hover {
    filter: drop-shadow(0 0 2em #dd4c35)
}
.logo.github:hover {
    filter: drop-shadow(0 0 2em #fff)
}
</style>