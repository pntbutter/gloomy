export const useEnemies = defineStore('enemies', {
    state: () => ({
        types: [
            {
                name: 'Meanie',
                initiative: 99,
                max_hp_normal: 8,
                max_hp_elite: 12,
                units: [
                    {
                        type: 'normal',
                        hp: 8,
                        conditions: {
                            poison: false,
                            wound: false,
                            disarm: false,
                            immobilize: false,
                            muddle: false,
                            strengthen: false,
                            stun: false,
                        },
                    }
                ]
            },
        ]
    }),
})
