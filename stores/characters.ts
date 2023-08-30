export const useCharacters = defineStore('characters', {
    state: () => ({
        units: [
            {
                name: 'Red Guard',
                initiative: 99,
                hp: 18,
                max_hp: 18,
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
            },
            {
                name: 'Demolitionist',
                initiative: 99,
                hp: 14,
                max_hp: 14,
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
            },
            {
                name: 'Void Warden',
                initiative: 99,
                hp: 10,
                max_hp: 10,
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
            },
        ]
    }),
})
