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
    <div class="grow  space-y-3  p-6">
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
            <div class="flex  flex-wrap  items-center  justify-center">
                <button type="button" v-for="(applies, condition) in conditions" @click="conditions[condition] = !applies" class="w-24  p-2  touch-none  transition" :class="{ 'grayscale  opacity-30': !applies }">
                    <img :src="'/conditions/' + condition + '.svg'" class="">
                </button>
            </div>
        </div>
    </div>
</template>
