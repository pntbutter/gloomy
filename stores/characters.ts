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
                color: '#000000',
            },
            {
                name: 'Drifter',
                initiative: 99,
                hp: 10,
                max_hp: 10,
                xp: 0,
                conditions: [],
                color: '#000000',
            },
            {
                name: 'Boneshaper',
                initiative: 99,
                hp: 10,
                max_hp: 10,
                xp: 0,
                conditions: [],
                color: '#000000',
            },
        ]
    }),
    persist: true,
})
