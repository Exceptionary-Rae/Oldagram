const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main-section")


render()


function render() {
    main.innerHTML = ''
    for (let i = 0; i < posts.length; i++) {
        main.innerHTML += `<section class="post">
                    <section class="author-info">
                        <img class="avatar-img" src="${posts[i].avatar}" alt="${posts[i].name}'s avatar">
                        <div class="info-text">
                            <p class="bold name">${posts[i].name}</p>
                            <p class="location">${posts[i].location}</p>
                        </div>
                    </section>
                    <img class="post-img" src="${posts[i].post}" alt="${posts[i].name}'s post">
                    <div class="post-content">
                        <div class="icon-container">
                            <img class="btn-icon" src="images/icon-heart.png">
                            <img class="btn-icon" src="images/icon-comment.png">
                            <img class="btn-icon" src="images/icon-dm.png">
                        </div>
                        <p class="bold like-counter">${posts[i].likes} likes</p>
                        <p class="comment"><span class="bold username">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </section>`
    }
}