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

        var mouseX: number | undefined;
        var mouseY: number | undefined;
        var mouseXInv: number | undefined;
        var mouseYInv: number | undefined;

        if (event instanceof MouseEvent) {
            mouseX = event.x;
            mouseY = event.y;
        } else {
            if (event.touches.item(0)?.clientX != undefined) {
                mouseX = event.touches.item(0)?.clientX;
            }
            if (event.touches.item(0)?.clientY != undefined) {
                mouseY = event.touches.item(0)?.clientY;
            }
        }
        if(mouseX && mouseY){
            mouseXInv = window.innerWidth - mouseX;
            mouseYInv = window.innerHeight - mouseY;
        }

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
                if (event.touches.item(0) != null) {
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
    
    <div id="home" class="absolute w-screen h-screen overflow-hidden bg-sound ">
        <div id="topLeft" class="absolute bg-sound bg-fixed w-1/2 h-1/2 top-0 left-0"></div>
        <div id="bottomRight" class="absolute bg-sound bg-fixed grayscale w-1/2 h-1/2 bottom-0 right-0"></div>
        <div id="bottomLeft" class="absolute bg-sound bg-fixed invert w-1/2 h-1/2 bottom-0 left-0"></div>
        <div id="topRight" class="absolute bg-sound bg-fixed hue-rotate-90 w-1/2 h-1/2 top-0 right-0"></div>
        <div class="relative w-full h-full text-center">
            <h1 class="text-white text-5xl">Vie</h1>
        </div>
    </div>
    
</template>