<script setup lang="ts">
    import { onMounted } from "vue";

    let topLeftDiv: HTMLElement | null = null;
    let bottomRightDiv: HTMLElement | null = null;
    let topRightDiv: HTMLElement | null = null;
    let bottomLeftDiv: HTMLElement | null = null;

    onMounted(() => {
        topLeftDiv = document.getElementById("topLeft");
        bottomRightDiv = document.getElementById("bottomRight");
        topRightDiv = document.getElementById("topRight");
        bottomLeftDiv = document.getElementById("bottomLeft");
    });

    //function that updates the position of the background divs on mouse move or touch event
    function mouse(event: MouseEvent | TouchEvent) {

        var mouseX: number;
        var mouseY: number;
        var mouseXInv: number;
        var mouseYInv: number;

        if (event instanceof MouseEvent) {
            mouseX = event.x * .5 + (window.innerWidth/4);
            mouseY = event.y * .5 + (window.innerHeight/4);
        } else {
            mouseX = (event.touches.item(0)?.clientX ?? window.innerWidth/2) * .5  + window.innerWidth/4;
            mouseY = (event.touches.item(0)?.clientY ?? window.innerHeight/2) * .5 + window.innerHeight/4;
        }

        mouseXInv = window.innerWidth - mouseX;
        mouseYInv = window.innerHeight - mouseY;

        if (topLeftDiv && bottomRightDiv && topRightDiv && bottomLeftDiv) {
            if (event instanceof MouseEvent) {
                topLeftDiv.style.width = mouseX + "px";
                topLeftDiv.style.height = mouseY + "px";

                bottomRightDiv.style.width = mouseXInv + "px";
                bottomRightDiv.style.height = mouseYInv + "px";

                bottomLeftDiv.style.width = mouseX + "px";
                bottomLeftDiv.style.height = mouseYInv + "px";

                topRightDiv.style.width = mouseXInv + "px";
                topRightDiv.style.height = mouseY + "px";
            } else {
                if (event.touches.item(0)) {
                    topLeftDiv.style.width = mouseX + "px";
                    topLeftDiv.style.height = mouseY + "px";

                    bottomRightDiv.style.width = mouseXInv + "px";
                    bottomRightDiv.style.height = mouseYInv + "px";

                    bottomLeftDiv.style.width = mouseX + "px";
                    bottomLeftDiv.style.height = mouseYInv + "px";

                    topRightDiv.style.width = mouseXInv + "px";
                    topRightDiv.style.height = mouseY + "px";
                }
            }
        }
    }

    document.addEventListener("mousemove", mouse);
    document.addEventListener("touchmove", mouse);
</script>
<template>
    
    <div id="home" class="absolute w-screen h-screen overflow-hidden bg-slate-800 bg-no-repeat bg-center ">
        <div id="topLeft" class="absolute bg-vie-logo bg-no-repeat bg-center bg-fixed w-1/2 h-1/2 top-0 left-0"></div>
        <div id="bottomRight" class="absolute bg-vie-logo bg-no-repeat bg-center bg-fixed grayscale w-1/2 h-1/2 bottom-0 right-0"></div>
        <div id="bottomLeft" class="absolute bg-vie-logo bg-no-repeat bg-center bg-fixed invert w-1/2 h-1/2 bottom-0 left-0"></div>
        <div id="topRight" class="absolute bg-vie-logo bg-no-repeat bg-center bg-fixed hue-rotate-90 w-1/2 h-1/2 top-0 right-0"></div>
        <div class="relative w-full h-full text-center">
            <h1 class="text-white text-5xl">Vie</h1>
        </div>
    </div>
    
</template>