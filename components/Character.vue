<script>
export default {
    data() {
        return {
            hp: 10,
            xp: 0,
            conditions: {
                poison: false,
                wound: false,
                disarm: false,
                immobilize: false,
                muddle: false,
                strengthen: false,
                stun: false,
            }
        }
    },
    props: [
        'name',
    ]
}
</script>

<template>
    <div class="w-1/5  space-y-3  p-6">
        <h3 class="text-xl  font-bold  text-center">{{ name }}</h3>

        <div class="flex  items-center  justify-center  text-red-500">
            <button type="button" @click="hp--" class="touch-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            <strong class="w-14  text-xl  text-center">{{ hp }}</strong>

            <button type="button" @click="hp++" class="touch-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>

        <div class="flex  items-center  justify-center  text-sky-500">
            <button type="button" @click="xp--" class="touch-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            <strong class="w-14  text-xl  text-center">{{ xp }}</strong>

            <button type="button" @click="xp++" class="touch-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>

        <div class="pt-3">
            <div class="grid   gap-2">
                <button type="button" v-for="(applies, condition) in conditions" @click="conditions[condition] = !applies" class="p-2  pb-2.5  border  touch-none  transition" :class="{ 'text-slate-500  border-slate-700': !applies, 'bg-slate-200  text-slate-700  border-slate-200': applies }">
                    <span class="uppercase  text-xs  tracking-wide  font-bold  leading-none">{{ condition }}</span>
                </button>
            </div>
        </div>
    </div>
</template>
