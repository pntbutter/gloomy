export const useCharacters = defineStore('characters', {
    state: () => ({
        units: [
            {
                name: 'Geminate',
                initiative: 99,
                hp: 10,
                max_hp: 10,
                xp: 0,
                conditions: [],
            },
            {
                name: 'Drifter',
                initiative: 99,
                hp: 10,
                max_hp: 10,
                xp: 0,
                conditions: [],
            },
            {
                name: 'Boneshaper',
                initiative: 99,
                hp: 10,
                max_hp: 10,
                xp: 0,
                conditions: [],
            },
        ]
    }),
})
