<script>
export default {
    props: [
        'element',
        'value',
    ]
}
</script>

<template>
    <button type="button" class="grid  place-content-center  w-16  h-16  rounded-full  border  border-current  uppercase  text-xs  tracking-wide" :class="{ 
        'text-slate-500': value === -1, 
        'text-amber-500': value === 0,
        'text-green-500': value === 1,
    }">
        {{ element }}
    </button>
</template>
