console.log('OBJETOS DE FITIA')
console.log('\n', '-----'.repeat(6), '\n')


class BreakFast {
    constructor(food, calories, protein, carbohydrates, fat) {
        this.food = food
        this.calories = calories
        this.protein = protein
        this.carbohydrates = carbohydrates
        this.fat = fat
    }

    getGeneralInfo() {
        return ` Desayuno
        comida: ${this.food} 
        calorías: ${this.calories} kcal`
    }

    getProtein(){
        return this.protein

    }
}

const diet = new BreakFast(["Papaya", "Arandanos", "Nueces", "Almendras"], 299, 6, 43, 14)
console.log(diet.getGeneralInfo())
console.log(`Proteina: ${diet.getProtein()} gr`)
console.log('\n', '-----'.repeat(6), '\n')


class Food {
    constructor(name, gr, calories, protein, carbohydrates, fat) {
        this.name = name
        this.gr = gr
        this.calories = calories
        this.protein = protein
        this.carbohydrates = carbohydrates
        this.fat = fat
    }

    getGeneralInfo() {
        return `${this.name}
        Por ${this.gr} gramos:
        Calorías: ${this.calories} kcal
        Proteinas: ${this.protein} gr
        Carbs: ${this.noTweets} gr
        Grasas: ${this.fat} gr `
    }
}

const cacahuate = new Food("Cacahuate", 14, 79, 3.6, 2.3, 6.9)
console.log(cacahuate.getGeneralInfo())
console.log('\n', '-----'.repeat(6), '\n')