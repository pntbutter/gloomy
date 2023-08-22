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
        <header class="flex  items-center  justify-between  p-6  border-b  border-slate-700">
            <HeaderElements />
            <HeaderActions />
        </header>

        <div class="flex  divide-x  divide-slate-700  border-b  border-slate-700">
            <Character name="Red Guard" />
            <Character name="Demolitionist" />
            <Character name="Void Warden" />
            <InitiativeList />
        </div>
    </div>
</template>
