Vue.createApp({
    data() {
        return {
            firstName: 'Thor',
            middleName: 'Christer',
            lastName: 'Eikeland',
            age: 33
        }
    }
}).mount('#app')

Vue.createApp({
    data() {
        return {
            firstName: 'Ida',
            lastName: 'Bakke',
            age: 33
        }
    }
}).mount('#app2')