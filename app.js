Vue.createApp({
    data() {
        return {
            firstName: 'Test',
            middleName: 'Testing',
            lastName: 'Testington',
            age: 894
        }
    }
}).mount('#app')

Vue.createApp({
    data() {
        return {
            firstName: 'Test',
            middleName: 'The',
            lastName: 'Second',
            age: 708
        }
    }
}).mount('#app2')