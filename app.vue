<script>
export default {
    setup () {
        useHead({
            title: 'Gloomy',
            bodyAttrs: {
                class: 'bg-slate-800  text-slate-100'
            }
        })
    }
}
</script>

<template>
    <div class="">
        <header class="flex  items-center  justify-between  pl-4  pr-6  py-2  border-b  border-slate-700">
            <HeaderElements />
            <HeaderActions />
        </header>

        <div class="grid  grid-cols-4  min-h-[380px]  divide-x  divide-slate-700  border-b  border-slate-700">
            <CharacterUnits />
            <InitiativeList />
        </div>

        <EnemyTypes />
    </div>
</template>

<style>
    button {
        @apply touch-none;
    }

    .fade-in {
        animation: fade-in .25s;
    }
    @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
</style>
