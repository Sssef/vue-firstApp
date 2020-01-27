const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text,  type, date})


const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+7 969 696 96 96', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Elizabeth', 2018, '+7 978 98 78 79', 'images/mondeo.jpg'),
    car('Porshe', 'Panamera', 'Serg', 2015, '+7 999 999 99 01', 'images/panamera.jpg'),
]

new Vue({
    el: '#app',
    data: {
        cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
        logs: []
    },
    methods: {
        selectCar (index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder () {
            this.modalVisibility = false
            this.logs.push(log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok'))
        },
        cancelOrder () {
            this.modalVisibility = false
            this.logs.push(log(`Canceled order: ${this.car.name} - ${this.car.model}`, 'cnl'))
        }
    },
    computed: {
        phoneBtnText () {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars () {
            return this.cars.filter(car => (car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1))
        }
    },
    filters: {
        date (value) {
            return value.toLocaleString()
        }
    }
})

