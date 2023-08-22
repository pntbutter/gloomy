export const useInitiative = defineStore('initiative', {
    state: () => ({
        units: [
            {
                name: 'Red Guard',
                initiative: 99,
            },
            {
                name: 'Demolitionist',
                initiative: 99,
            },
            {
                name: 'Void Warden',
                initiative: 99,
            },
            {
                name: 'Monster',
                initiative: 99,
            },
        ]
    }),
})
