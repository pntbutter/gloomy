<script>
export default {
    data() {
        return {
            enemies: useEnemies(),
        }
    },
}
</script>

<template>
    <div class="col-span-4  grid  grid-cols-2  gap-px  bg-slate-700  border-b  border-slate-700">
        <EnemyType v-for="(enemy, index) in enemies.types" :enemy="enemy" :key="index" />

        <div class="grid  place-content-center  bg-slate-800" :class="{ 'col-span-2': enemies.types.length % 2 == 0 }">
            <button type="button" @click="enemies.add_type()" class="flex  items-center  gap-2  p-4">
                <IconPlus /> Add new enemy type
            </button>
        </div>
    </div>
</template>
