console.log('OBJETOS DE GITHUB')
console.log('\n', '-----'.repeat(6), '\n')


class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close) {
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }

    getTotalIssues() {
        return this.issues_open + this.issues_close
    }

    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

const playbook = new Repo("Playbook", "PaolaDaft", "JS", 10, 5, 2, 0, 1)
console.log("Nombre del repo:" + playbook.name)
console.log("Issues totales:" + playbook.getTotalIssues())
console.log(playbook.getGeneralInfo())
console.log('\n', '-----'.repeat(6), '\n')


class Issue {
    constructor(title, repositoryNameAssociated, labels, author) {
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = "open"
        this.numberOfComments = 0
        this.labels = labels
        this.author = author
        this.dateCreated = new Date()
        this.lastUpdated = new Date()

    }

    getTitleAndAuthor() {
        return `Title: ${this.title} | Author ${this.author}`
    }

    getGeneralInfo() {
        return `This issue ${this.title} was created by ${this.author}`
    }
}

const firstIssue = new Issue("Hola komo esta?", "Playbook", ["LaunchX", "JS"], "PaolaDaft")
console.log(firstIssue.getGeneralInfo())
console.log("Estatus del issue:" + firstIssue.status)
console.log('\n', '-----'.repeat(6), '\n')


class PullRequest {
    constructor(author, title, branchName, repositoryNameAssociated) {
        this.author = author
        this.title = title
        this.branchName = branchName
        this.dateCreated = new Date()
        this.status = "open"
        this.repositoryNameAssociated = repositoryNameAssociated

    }

    getTitleAndAuthor() {
        return `Title: ${this.title} | Author ${this.author}`
    }

    getStatus() {
        return this.status
    }
}

const firstPullRequest = new PullRequest("Faltas de Ortografía", "PaolaDaft", "main", "Playbook")
console.log(firstPullRequest.getTitleAndAuthor())
console.log("Estatus del pull request:" + firstPullRequest.status)
console.log('\n', '-----'.repeat(6), '\n')