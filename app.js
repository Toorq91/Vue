const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Test',
            middleName: '',
            lastName: 'Testington',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20,
            // middleName: 'Halvorsen',
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        increment() {
            this.age ++
        },
        updateLastName(msg, event) {
            console.log(msg)
            
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'Bob';
// }, 3000);

// setTimeout(() => {
//     vm.middleName = '';
// }, 3000);

// setTimeout(() => {
//     vm.lastName = 'Bobington';
// }, 3000);

// setTimeout(() => {
//     vm.age = 45;
// }, 3000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Test',
//             middleName: 'The',
//             lastName: 'Second',
//             age: 708
//         }
//     }
// }).mount('#app2')
