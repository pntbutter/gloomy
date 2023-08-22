<script>
export default {
    data() {
        return {
            show_edit: false,
            initiative: useInitiative(),

            deleteUnit(index) {
                if (confirm('Are you sure?')) {
                    this.initiative.units.splice(index, 1);
                }
            },
        }
    },
}
</script>

<template>
    <div class="relative  w-2/5  p-6">
        <header class="flex  items-center  justify-between  mb-6">
            <h2 class="text-xl  font-bold">Initiative</h2>

            <button @click="show_edit = !show_edit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6  h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            </button>
        </header>

        <div class="flex  flex-col  gap-4">
            <div v-for="(unit, index) in initiative.units" class="flex  items-center  gap-2" :style="{ order: unit.initiative }">
                <span class="mr-auto  text-xl">{{ unit.name }}</span>

                <input type="number" v-model="unit.initiative" min="1" max="99" class="w-24  px-4  py-2  bg-slate-900  rounded  text-xl  text-center">
            </div>
        </div>

        <Transition>
            <div v-if="show_edit" class="absolute  inset-0  p-6  bg-slate-700">
                <header class="flex  items-center  justify-between  mb-6">
                    <h3 class="text-xl  font-bold">Edit initiative</h3>

                    <button type="button" @click="show_edit = false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                <div class="flex  flex-col  gap-4">
                    <div v-for="(unit, index) in initiative.units" class="flex  items-center  gap-2">
                        <input type="text" v-model="unit.name" class="flex-auto  px-4  py-2  rounded  bg-slate-900">

                        <button type="button" @click="deleteUnit(index)" class="grid  place-content-center  w-8  h-8  text-red-500  opacity-75  transition  hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8  h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                            </svg>
                        </button>
                    </div>

                    <div class="order-last">
                        <button type="button" @click="initiative.units.push({ name: 'meanie', initiative: 99 })">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
