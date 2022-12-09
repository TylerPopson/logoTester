<script setup lang="ts">
import type { describe } from 'node:test';
import type { title } from 'process';

    const props = defineProps([
        'title' as string,
        'description' as string,
        'image' as string,
    ]);
</script>

<template>
    <div class="flex w-full h-44 bg-emerald-400">
        <img class="aspect-square h-full" src="https://via.placeholder.com/150"/>
        <div class="flex flex-col mx-5 w-full gap-5 p-5">
            <h1 class="text-2xl font-bold">{{title}}</h1>
            <p class="text-lg">{{description}}</p>
            <div class="flex flex-row gap-5">
                <button class="bg-emerald-600 rounded-full p-1">
                    <v-icon name="co-pencil" scale="2"></v-icon>
                </button>
                <button class="bg-red-600 rounded-full p-1">
                    <v-icon name="co-trash" scale="2"></v-icon>
                </button>
            </div>
        </div>
    </div>
</template>