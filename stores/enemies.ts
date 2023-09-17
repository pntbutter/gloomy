export const useEnemies = defineStore('enemies', {
    state: () => ({
        types: [
            {
                name: 'Rat Monstrosity',
                initiative: 99,
                max_hp_normal: 8,
                max_hp_elite: 12,
                units: [
                    {
                        elite: false,
                        hp: 8,
                        conditions: [],
                    },
                ],
            },
            {
                name: 'Vermling Scout',
                initiative: 99,
                max_hp_normal: 8,
                max_hp_elite: 12,
                units: [
                    {
                        elite: true,
                        hp: 8,
                        conditions: [],
                    },
                    {
                        elite: false,
                        hp: 8,
                        conditions: [],
                    },
                ],
            },
        ]
    }),

    actions: {
        add_type() {
            this.types.push({
                name: 'Münster',
                initiative: 99,
                max_hp_normal: 8,
                max_hp_elite: 12,
                units: [
                    {
                        elite: true,
                        hp: 8,
                        conditions: [],
                    },
                ],
            })
        },
    },
})
