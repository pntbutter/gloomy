<script>
export default {
    props: [
        'element',
        'value',
    ]
}
</script>

<template>
    <button type="button" class="relative  w-20  h-20  p-2">
        <img :src="'/elements/' + element + '.svg'" class="block  w-full">

        <div class="absolute  inset-0  bg-slate-800  origin-top  transition  opacity-75  pointer-events-none" :class="{ 
            'scale-y-100': value === -1, 
            'scale-y-50': value === 0,
            'scale-y-0': value === 1,
        }"></div>
    </button>
</template>
