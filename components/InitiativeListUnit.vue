<script>
export default {
    data() {
        return {
            open: false,
            temp_initiative: '',
        }
    },
    watch: {
        temp_initiative(v) {
            if (v.length === 2) {
                this.set_initiative();
            }
        }
    },
    methods: {
        set_initiative() {
            this.unit.initiative = this.temp_initiative;
            this.open = false;
            this.temp_initiative = '';
        }
    },
    props: [
        'unit',
    ],
}
</script>

<template>
    <div @click="open = true" :style="{ order: unit.initiative }">
        <button type="button" class="flex  items-center  gap-2  w-full  py-2  px-4  rounded  bg-slate-700/25  text-lg  touch-none" :style="'background-color:' + unit.color + ';'">
            <span class="mr-auto">{{ unit.name }}</span>
            <strong class="w-[2ch]  text-center">{{  unit.initiative }}</strong>
        </button>
    
        <div v-if="open" @click="open = false" class="modal-wrap">
            <div @click.stop class="modal-content">
                <header class="flex  items-center  justify-between  pb-3">
                    <h3 class="text-xl  font-bold">Set initiative</h3>

                    <button type="button" @click="open = false">
                        <IconClose />
                    </button>
                </header>

                <div class="grid  grid-cols-3  gap-2">
                    <button v-for="num in [1,2,3,4,5,6,7,8,9]" type="button" @click="temp_initiative += num" class="grid  place-content-center w-24  h-24  rounded  bg-slate-700  text-2xl  font-bold  transition  duration-75  active:bg-slate-700/50  active:scale-95">{{num}}</button>
                    <button type="button" @click="temp_initiative += '0'" class="grid  place-content-center w-24  h-24  rounded  bg-slate-700  text-2xl  font-bold  transition  duration-75  active:bg-slate-700/50  active:scale-95  col-start-2">0</button>
                    <button type="button" @click="set_initiative" class="grid  place-content-center w-24  h-24  rounded  bg-slate-700  text-2xl  font-bold  transition  duration-75  active:bg-slate-700/50  active:scale-95">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>
