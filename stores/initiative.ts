export const useInitiative = defineStore('initiative', {
    state: () => ({
        units: [
            {
                name: 'Red Guard',
                initiative: 99,
                is_character: true,
            },
            {
                name: 'Demolitionist',
                initiative: 99,
                is_character: true,
            },
            {
                name: 'Void Warden',
                initiative: 99,
                is_character: true,
            },
            {
                name: 'Monster',
                initiative: 99,
                is_character: false,
                
            },
        ]
    }),

    actions: {
        addUnit() {
            this.units.push({
                name: 'Meanie', 
                initiative: 99,
                is_character: false,
            });
        }
    }
})
