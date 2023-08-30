<script>
export default {
    setup () {
        useHead({
            title: 'Gloomy',
            bodyAttrs: {
                class: 'bg-slate-800  text-slate-100  overscroll-none'
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

        <div class="flex  divide-x  divide-slate-700  border-b  border-slate-700">
            <CharacterUnits />
            <InitiativeList />
        </div>
    </div>
</template>
