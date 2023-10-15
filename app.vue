<script>
export default {
    setup () {
        useHead({
            title: 'Gloomy',
            bodyAttrs: {
                class: 'overflow-hidden  bg-slate-800  text-slate-100'
            }
        })
    }
}
</script>

<template>
    <div class="overflow-auto  h-screen  pb-24">
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

    .modal-wrap {
        @apply fixed  z-40  inset-0  grid  place-content-center  p-6  bg-slate-800/70  backdrop-blur-md  fade-in;
    }
    .modal-content {
        @apply flex  flex-col  gap-3  p-6  rounded  bg-slate-800  border-2  border-slate-700  shadow-xl;
    }
</style>
