<template>
    <div id="professional_experience" class="timeline-area timeline-section">
        <div class="container">
            <div class="timelines mb-8">
                <span class="h2 text-shadow font-sans">Experiencia Laboral</span>
            </div>
            <div class="all-timelines">
                <!--SINGLE TIMELINE-->
                <div class="single-timeline d-flex-2">
                    <div class="timeline-blank"></div>
                    <div class="timeline-text d-flex-2" style="align-items: flex-start;">
                        <span>
                            <h6> Ene 2020 / Ene 2021 — ZentCode</h6>
                            <br>
                            <div class="flex flex-row my-1 sm:my-3">
                                <span style="font-weight: bold;">Full Stack Developer</span>
                            </div>
                            <ul class="text-start md:pl-10">
                                <li class="py-1">
                                    ● Developed and app that controls all company’s expenses, increasing the
                                    accountability and responsibility.<br>
                                </li>
                                <li class="py-1">
                                    ● Refactored some of the old projects following the SOLID principles, making
                                    them
                                    scalable.
                                </li>
                            </ul>
                            <br>
                            <div class="my-1 sm:my-3 flex">
                                <span class="tech-stack" style="font-weight: bold; width: fit-content;">Stack:</span>
                                <span class="pl-1" style="width: fit-content !important;">Vuejs, NodeJs</span>
                            </div>
                        </span>
                        <div class="t-square"></div>
                    </div>
                </div>
                <!--SINGLE TIMELINE-->
                <div class="single-timeline d-flex-2">
                    <div class="timeline-blank"></div>
                    <div class="timeline-text d-flex-2" style="align-items: flex-start;">
                        <span>
                            <h6>Rugertek S.A. — Ene 2021 / Jun 2022 </h6>
                            <br>
                            <div class="flex flex-row my-1 sm:my-3">
                                <span style="font-weight: bold;">Software Engineer</span>
                            </div>
                            <ul class="md:text-end md:pl-10">
                                <li class="py-1">
                                    ● Trained an entire team of 4 people in Vue, Flutter and Node, reducing their
                                    task
                                    completion time by 50% <br>
                                </li>
                                <li class="py-1">
                                    ● Created the frontend part of an admin dashboard template, reducing time for
                                    future
                                    company’s projects.
                                </li>
                                <li class="py-1">
                                    ● Successfully modified numerous apps that increased good user-reviews by 70%
                                </li>
                                <li class="py-1">
                                    ● Developed and implemented a task management system. Increasing efficiency
                                    levels
                                    by 40%.
                                </li>
                            </ul>
                            <br>
                            <div class="flex flex-row my-1 sm:my-3">
                                <span class="left-timeline" style="font-weight: bold;">Stack:</span>
                                <span class="left-timeline pl-1">Vuejs, Flutter, NodeJs, .netCore C#</span>
                            </div>
                        </span>
                        <div class="t-square"></div>
                    </div>
                </div>
                <!--SINGLE TIMELINE-->
                <div class="single-timeline d-flex-2">
                    <div class="timeline-blank"></div>
                    <div class="timeline-text d-flex-2" style="align-items: flex-start;">
                        <span>
                            <h6 class="text-start">jun 2022 / Ahora — ITTI Digital </h6>
                            <br>
                            <div class="flex flex-row my-1 sm:my-3">
                                <span style="font-weight: bold;">Software Engineer</span>
                            </div>
                            <ul class="text-start md:pl-10">
                                <li class="py-1">
                                    ● Trained an entire team of 4 people in Vue, Flutter and Node, reducing their
                                    task
                                    completion time by 50% <br>
                                </li>
                                <li class="py-1">
                                    ● Created the frontend part of an admin dashboard template, reducing time for
                                    future
                                    company’s projects.
                                </li>
                                <li class="py-1">
                                    ● Successfully modified numerous apps that increased good user-reviews by 70%
                                </li>
                                <li class="py-1">
                                    ● Developed and implemented a task management system. Increasing efficiency
                                    levels
                                    by 40%.
                                </li>
                            </ul>
                            <br>
                            <div class="flex my-1 sm:my-3">
                                <span class="tech-stack" style="font-weight: bold; width: fit-content;">Stack:</span>
                                <span class="pl-1" style="width: fit-content !important;">Vuejs, Flutter, NodeJs,
                                    .netCore C#</span>
                            </div>
                        </span>
                        <div class="t-square"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.timeline-section {
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
    background-image: linear-gradient(#010206, #17365c);
}

body {
    background-color: #1d2123;
    font-family: "Inter", sans-serif;
}

ul {
    list-style: none;
    margin: 0 !important;
}

a {
    text-decoration: none !important;
    display: inline-block;
}

img {
    max-width: 100%;
}

button:focus {
    outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

p {
    font-size: 14px;
    line-height: 26px;
    margin: 0;
}

.container {
    width: 100%;
    max-width: 1140px;
    padding: 0 15px;
    box-sizing: border-box;
    margin: 0 auto;
}

.timelines h2 {
    text-align: center;
    color: #fff;
    font-weight: 600;
    margin-bottom: 40px;
    font-size: 32px;
}

.d-flex-2 {
    display: flex;
    align-items: center;
}

.timeline-area {
    padding: 80px 0;
}

.all-timelines {
    position: relative;
}

.timelines h2 {
    text-align: center;
    color: #fff;
    font-weight: 600;
    margin-bottom: 40px;
}

.all-timelines::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 2px;
    background: #0066d4;
    top: 20px;
}

.single-timeline {
    margin-bottom: 22px;
}

.timeline-blank {
    width: 50%;
}

.timeline-text {
    width: 50%;
    padding-left: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
}

.timeline-text h6 {
    color: #f0f1f2;
    font-weight: 900;
    display: inline-block;
    font-size: 1rem;
}

.timeline-text span {
    color: #f0f1f2;
    display: block;
    width: 100%;
}

.single-timeline:nth-child(even) .timeline-text span {
    text-align: right;
}

.t-square {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    left: -6px;
    background: #298efa;
}

.single-timeline:nth-child(even) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}

.single-timeline:nth-child(even) .t-square {
    right: -6px;
    left: unset;
}

.single-timeline:nth-child(even) .timeline-text {
    padding-left: 0;
    padding-right: 30px;
    text-align: right;
}

.tech-stack {
    margin-left: 2.5rem;
}

@media all and (max-width: 991px) {}

@media all and (max-width: 768px) {
    .all-timelines::before {
        right: unset;
        top: 0;
    }

    .left-timeline {
        width: fit-content !important
    }

    .tech-stack {
        margin-left: 0px;
    }

    .single-timeline:nth-child(2n) .timeline-text {
        padding-left: 30px;
        padding-right: 0;
        text-align: left;
    }

    .single-timeline:nth-child(2n) .t-square {
        left: -6px;
        right: unset;
    }

    .timeline-blank {
        display: none;
    }

    .timeline-text {
        width: 100%;
    }

    .single-timeline:nth-child(even) .timeline-text span {
        text-align: left !important;
    }
}

@media all and (max-width: 575px) {}

@media all and (max-width: 360px) {
    .all-timelines::before {
        top: 32px;
    }
}
</style>