const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

/** Sobre esta lista, realiza lo siguiente:
//1.- Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH*/
console.log('Lista de explorers:')
explorers.forEach((explorer, index) => console.log(`${++index}. ${explorer.name}`))
console.log('\n', '-----'.repeat(6), '\n')

//2.- Imprime el stack de cada explorer, usa FOR EACH
console.log('Stack de cada explorer:')
explorers.forEach(explorer => console.log(`${explorer.name}: ${explorer.stack}`))
console.log('\n', '-----'.repeat(6), '\n')

//3.- Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log('Lista de los Stacks')
let stacks = explorers.map(function (explorer) { return explorer.stack })
stacks = stacks.join(',').split(',')
stacks = [...new Set(stacks)] // Elimina los elementos duplicados.
console.log(stacks)
console.log('\n', '-----'.repeat(6), '\n')

//4.- Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log('Lista de explorers que saben usar JS:')
let explorersJs = explorers.filter(explorer => explorer.stack.includes('js'))
explorersJs.forEach((explorer, index) => console.log(`${++index}. ${explorer.name}`))
console.log('\n', '-----'.repeat(6), '\n')

//5.- Busca el primer explorer que sea de la CDMX, usa FIND
console.log('Buscando el primer explorer de la CDMX')
console.log(explorers.find(explorer => explorer.city = 'CDMX'))
//let cdmxExplorer = explorers.find(explorer => explorer.city = 'CDMX')
//console.log(`${cdmxExplorer.name}`)
console.log('\n', '-----'.repeat(6), '\n')

//6.- 0Obtén la suma de todos los exercises_completed, usa REDUCE
console.log('Suma de todos los exercises_completed')
const getTotalAmountCompletedExercises = function (explorersList) {
    const exercisesCompletedList = explorersList.map(explorer => explorer.exercises_completed)
    const result_of_reduce = exercisesCompletedList.reduce((acc, exercises) => acc + exercises, 0)
    return result_of_reduce
}
console.log(getTotalAmountCompletedExercises(explorers))
console.log('\n', '-----'.repeat(6), '\n')

//7.- Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const areSomeTrue = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true)
console.log("¿Alguno de los explorers tiene la propiedad exercisesFinished en frontend como true?: " + areSomeTrue) //true
console.log('\n', '-----'.repeat(6), '\n')

//8.- Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const areAllTrue = explorers.every((explorer) =>  explorer.missions.onboarding.isFinished === true)
console.log("¿Todos los explorers tienen la propiedad isFinished del onboarding como true?: " + areAllTrue) //false
console.log('\n', '-----'.repeat(6), '\n')