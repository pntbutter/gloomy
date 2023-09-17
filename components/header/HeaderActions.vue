<script>
export default {
    data() {
        return {
            elements: useElements(),
            characters: useCharacters(),
            enemies: useEnemies(),

            decreaseElements() {
                // decrease all the elements that are strong or waning
                for (const el in this.elements.elements) {
                    if (this.elements.elements[el] > -1) {
                        this.elements.elements[el]--;
                    }
                }
            },

            resetInitiative() {
                this.characters.units.forEach((unit) => {
                    unit.initiative = 99;
                });

                this.enemies.types.forEach((type) => {
                    type.initiative = 99;
                });
            },

            newRound() {
                this.decreaseElements();
                this.resetInitiative();
            }
        }
    },
}
</script>

<template>
    <div>
        <button type="button" @click="newRound" class="border  px-4  py-2.5  border-current">
            New round
        </button>
    </div>
</template>
