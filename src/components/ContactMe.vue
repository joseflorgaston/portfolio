<template>
    <div>
        <div id="contact" class="contact-section section">
            <div class="wrapper">
                <header class="header">
                    <span class="h2">{{ subtitles[0] }}</span>
                </header>
                <article class="main">
                    <label for="email" class="block mb-2 text-md font-bold font-medium text-white dark:text-gray-300">
                        Email
                    </label>
                    <input type="text" id="email" v-model="form.email" @keyup="validate"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    <label for="issue"
                        class="mt-4 block mb-2 text-md font-bold font-medium text-white dark:text-gray-300">
                        {{ subtitles[1] }}
                    </label>
                    <input type="text" id="issue" v-model="form.subject" @keyup="validate"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    <label for="message"
                        class="mt-4 block mb-2 text-md font-bold font-medium text-white dark:text-gray-300">
                        {{ subtitles[2] }}
                    </label>
                    <textarea type="text" id="message" v-model="form.message" @keyup="validate"
                        class="bg-gray-50 border h-56 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                    <div class="flex justify-center">
                        <button @click="sendEmail" :disabled="!isValid"
                            class="bg-transparent mt-5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-width-50">
                            {{ subtitles[3] }}
                        </button>
                    </div>
                    <div class="mt-8 text-center">
                        <div class="mb-5">
                            <span class="h2 mb-12">{{ subtitles[4] }}</span>
                        </div>
                        <div class="grid grid-cols-3 gap-6 h-32">
                            <div class="flex justify-center">
                                <a href="https://github.com/joseflorgaston" class="hvr-grow"><img title="Github"
                                        src="https://icon-library.com/images/github-icon-white/github-icon-white-5.jpg"
                                        style="max-height: 60px;"></a>
                            </div>
                            <div class="flex justify-center">
                                <a href="https://www.linkedin.com/in/joseflorgaston/" class="hvr-grow"><img
                                        title="LinkedIn"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                                        style="max-height: 60px;"></a>
                            </div>
                            <div class="flex justify-center">
                                <a href="https://mail.google.com/mail/" class="hvr-grow"><img
                                        title="Gmail"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                                        style="max-height: 60px;"></a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <Modal></Modal>
        <LoadingModal></LoadingModal>
    </div>
</template>
<script setup lang="ts">
import { computed, Ref, ref, watch } from 'vue';
import Modal from './shared/Modal.vue';
import LoadingModal from './shared/LoadingModal.vue';
import { EmailForm } from '../../models/EmailForm';
import { useI18NStore } from '../store/i18n';
let form = ref({
    email: "",
    subject: "",
    message: "",
    to: "joseflorgaston@gmail.com"
} as EmailForm)
let isValid: boolean = false;
let loading = ref(false);
let subtitles: Ref<string[]> = ref(["Contactame", "Asunto", "Mensaje", "Enviar", "Mis Redes"])
const i18nStore = useI18NStore();
const lang = computed(() => {
    return i18nStore.lang;
});
watch(lang, async (newLang) => {
    if (newLang === 'English') subtitles.value = ["Contact me", "Subject", "Message", "Send", "Social Media"];
    if (newLang === 'Español') subtitles.value = ["Contactame", "Asunto", "Mensaje", "Enviar", "Mis Redes"];
});
function validate(): boolean {
    if (form.value.email.length == 0) return isValid = false;
    if (form.value.subject.length == 0) return isValid = false;
    if (form.value.message.length == 0) return isValid = false;

    return isValid = true;
};

function openDialog() {
    document.getElementById('my-modal')!.style.display = 'block';
}

watch(loading, async (newLoading) => {
    if (newLoading) {
        document.getElementById('loadingModal')!.style.display = 'block';
    } else {
        document.getElementById('loadingModal')!.style.display = 'none';
    }
});

function cleanForm() {
    form.value.email = '';
    form.value.subject = '';
    form.value.message = '';
    form.value.to = "joseflorgaston@gmail.com";
}

async function sendEmail() {
    loading.value = true;
    fetch("https://vast-inlet-72280.herokuapp.com/api/sendEmail", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: form.value.email,
            subject: form.value.subject,
            message: form.value.message,
            to: form.value.to,
        }),
    }).then(() => {
        loading.value = false;
        cleanForm();
        openDialog();
    });
}
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