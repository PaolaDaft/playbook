console.log('OBJETOS DE TWITTER')
console.log('\n', '-----'.repeat(6), '\n')


const user = {
    user: "Andrea Paola García",
    username: "PaolaDaft",
    bio: "Explorer at @LaunchX",
    age: 20,
    followers: 0,
    following: 0,
    getGeneralInfo: function() {
        return `
        Username: ${this.username} 
        Bio ${this.bio}
        Age: ${this.age}`
    },
    getFollowersFollowing: function(){
        return `
        Followers: ${this.followers} | Following ${this.following}`

    }
}

console.log(user.getGeneralInfo())
console.log(user.getFollowersFollowing())
console.log('\n', '-----'.repeat(6), '\n')


const trendingTopic = {
    title: "Debani",
    place: 2,
    noTweets: 248000,
    labels: ["Mexico", "News"],
    getGeneralInfo: function() {
        return `
        Titulo:${this.title}
        Lugar: ${this.place}
        ${this.labels}
        Número de Tweets: ${this.noTweets} `
    }
}

console.log(trendingTopic.getGeneralInfo())
console.log('\n', '-----'.repeat(6), '\n')


const hashtag = {
    name: "NoFueUnAccidente",
    noTweets: 35800,
    getHashtag: function() {
        return `#${this.name}`
    },
    getGeneralInfo: function() {
        return `#${this.name} | Tweets: ${this.noTweets}`
    }
}

console.log("Hashtag Name:" + hashtag.name)
console.log(hashtag.getGeneralInfo())
console.log('\n', '-----'.repeat(6), '\n')