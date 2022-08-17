<template>
    <nav class="semi-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-100">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#hero" class="text-link flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Jose</span>
            </a>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <a href="#about_me" class="block py-2 pr-4 pl-3 text-white-700 text-link rounded md:border-0md:p-0 dark:text-gray-400">
                            Acerca de mi
                        </a>
                    </li>
                    <li>
                        <a href="#projects"
                            class="block py-2 pr-4 pl-3 text-white-700 text-link rounded md:border-0md:p-0 dark:text-gray-400">
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a href="#professional_experience" class="block py-2 pr-4 pl-3 text-white-700 text-link rounded md:border-0md:p-0 dark:text-gray-400">
                            Experiencia
                        </a>
                    </li>
                    <li>
                        <a href="#technologies"
                            class="block py-2 pr-4 pl-3 text-white-700 text-link rounded md:border-0md:p-0 dark:text-gray-400">
                            Tecnologias
                        </a>
                    </li>
                    <li>
                        <a href="#contact"
                            class="block py-2 pr-4 pl-3 text-white-700 text-link rounded md:border-0md:p-0 dark:text-gray-400">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.semi-transparent {
    background-color: rgba(15, 25, 37, 0.6);
}
.text-link:hover {
    color: #298efa;
    cursor: pointer;
}
</style>