console.log('OBJETOS DE TWITTER')
console.log('\n', '-----'.repeat(6), '\n')


class User {
    constructor(user, username, bio, age,) {
        this.user = user
        this.username = username
        this.bio = bio
        this.age = age
        this.followers = 0
        this.following = 0
    }

    getGeneralInfo() {
        return `
        Username: ${this.username} 
        Bio ${this.bio}
        Age: ${this.age}`
    }

    getFollowersFollowing(){
        return `
        Followers: ${this.followers} | Following ${this.following}`

    }
}

const explorerTw = new User("Andrea Paola García", "PaolaDaft", "Explorer at @LaunchX", 20)
console.log(explorerTw.getGeneralInfo())
console.log(explorerTw.getFollowersFollowing())
console.log('\n', '-----'.repeat(6), '\n')


class TrendingTopic {
    constructor(title, place, noTweets, labels ) {
        this.title = title
        this.place = place
        this.noTweets = noTweets
        this.labels = labels
    }

    getGeneralInfo() {
        return `
        Titulo:${this.title}
        Lugar: ${this.place}
        ${this.labels}
        Número de Tweets: ${this.noTweets} `
    }
}

const debani = new TrendingTopic("Debani", 2, 248000, ["Mexico", "News"] )
console.log(debani.getGeneralInfo())
console.log('\n', '-----'.repeat(6), '\n')


class Hashtag {
    constructor(name, noTweets) {
        this.name = name
        this.noTweets = noTweets
    }

    getHashtag() {
        return `#${this.name}`
    }

    getGeneralInfo() {
        return `#${this.name} | Tweets: ${this.noTweets}`
    }
}

const debaniHashtag = new Hashtag("NoFueUnAccidente", 35800)
console.log("Hashtag Name:" + debaniHashtag.name)
console.log(debaniHashtag.getGeneralInfo())
console.log('\n', '-----'.repeat(6), '\n')