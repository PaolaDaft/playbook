console.log('OBJETOS DE GITHUB')
console.log('\n', '-----'.repeat(6), '\n')


const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
console.log('\n', '-----'.repeat(6), '\n')


const issue = {
    title: "Hola komo esta?",
    repositoryNameAssociated: "Playbook",
    status: "open",
    numberOfComments: 0,
    labels: ["LaunchX", "JS"],
    author: "PaolaDaft",
    dateCreated: new Date(),
    lastUpdated: new Date(),
    getTitleAndAuthor: function () {
        return `Title: ${this.title} | Author ${this.author}`
    },
    getGeneralInfo: function () {
        return `This issue ${this.title} was created by ${this.author}`
    }
}

console.log(issue.getGeneralInfo())
console.log("Estatus del issue:" + issue.status)
console.log('\n', '-----'.repeat(6), '\n')


const pullRequest = {
    author: "Faltas de Ortografía",
    title: "PaolaDaft",
    branchName: "main",
    dateCreated: new Date(),
    status: "open",
    repositoryNameAssociated: "Playbook",
    getTitleAndAuthor: function () {
        return `Title: ${this.title} | Author ${this.author}`
    },
    getStatus: function () {
        return this.status
    }
}

console.log(pullRequest.getTitleAndAuthor())
console.log("Estatus del pull request:" + pullRequest.status)
console.log('\n', '-----'.repeat(6), '\n')