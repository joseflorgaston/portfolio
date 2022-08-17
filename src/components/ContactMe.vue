<template>
    <form id="contact" class="contact-section section">
        <div class="wrapper">
            <header class="header">
                <span class="h2">Contactame</span>
            </header>
            <article class="main">
                <label for="email" class="block mb-2 text-md font-bold font-medium text-white dark:text-gray-300">
                    Email
                </label>
                <input type="text" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
                <label for="issue" class="mt-4 block mb-2 text-md font-bold font-medium text-white dark:text-gray-300">
                    Asunto
                </label>
                <input type="text" id="issue"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
                <label for="message"
                    class="mt-4 block mb-2 text-md font-bold font-medium text-white dark:text-gray-300">
                    Mensaje
                </label>
                <textarea type="text" id="message"
                    class="bg-gray-50 border h-56 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
                <center>
                    <button type="submit"
                        class="bg-transparent mt-5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-width-50">
                        Enviar
                    </button>
                </center>
                <div class="mt-8 text-center">
                    <div class="mb-5">
                        <span class="h2 mb-12">Mis redes</span>
                    </div>
                    <div class="grid grid-cols-3 gap-6 h-32">
                        <center><a href="https://github.com/joseflorgaston" class="hvr-grow"><img title="Github"
                                    src="https://icon-library.com/images/github-icon-white/github-icon-white-5.jpg"
                                    style="max-height: 60px;"></a></center>
                        <center><a href="https://www.linkedin.com/in/joseflorgaston/" class="hvr-grow"><img title="LinkedIn"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                                    style="max-height: 60px;"></a></center>
                        <center><a href="https://www.linkedin.com/in/joseflorgaston/" class="hvr-grow"><img title="Gmail"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                                    style="max-height: 60px;"></a></center>
                    </div>
                </div>
            </article>
        </div>
    </form>
</template>
<script setup lang="ts">

</script>
<style scoped>
.contact-section {
    padding-bottom: 3rem;
    padding-top: 3rem;
    z-index: 3;
    display: flex;
    border-radius: 10px !important;
    flex-direction: column;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: fit-content;
    line-height: normal;
    background-image: linear-gradient(#010206, #17365c);
}

.wrapper {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    font-weight: bold;
    text-align: center;
}

.wrapper>* {
    padding: 10px;
    flex: 1 100%;
}


.main {
    text-align: left;
}


@media all and (min-width: 600px) {
    .aside {
        flex: 2 0 0;
    }
}

@media all and (min-width: 800px) {
    .main {
        flex: 4 0px;
    }

    .aside-1 {
        order: 1;
    }

    .main {
        order: 2;
    }

    .aside-2 {
        order: 3;
    }

    .footer {
        order: 4;
    }
}

body {
    padding: 2em;
}
</style>