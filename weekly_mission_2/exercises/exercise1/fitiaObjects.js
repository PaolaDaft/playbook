console.log('OBJETOS DE FITIA')
console.log('\n', '-----'.repeat(6), '\n')


const breakFast = {
    food: ["Papaya", "Arandanos", "Nueces", "Almendras"],
    calories: 299,
    protein: 6,
    carbohydrates: 43,
    fat: 14,
    getGeneralInfo: function () {
        return ` Desayuno
        comida: ${this.food} 
        calorías: ${this.calories} kcal`
    },
    getProtein: function () {
        return this.protein

    }
}

console.log(breakFast.getGeneralInfo())
console.log(`Proteina: ${breakFast.getProtein()} gr`)
console.log('\n', '-----'.repeat(6), '\n')


const food = {
    name: "Cacahuate",
    gr: 14,
    calories: 79,
    protein: 3.6,
    carbohydrates: 2.3,
    fat: 3.9,
    getGeneralInfo: function () {
        return `${this.name}
        Por ${this.gr} gramos:
        Calorías: ${this.calories} kcal
        Proteinas: ${this.protein} gr
        Carbs: ${this.noTweets} gr
        Grasas: ${this.fat} gr `
    }
}

console.log(food.getGeneralInfo())
console.log('\n', '-----'.repeat(6), '\n')