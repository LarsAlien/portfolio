var posts = [{
        title: "Welcome!",
        content: [
            "This is the new Portfolio for myself. Here I will post some of my work and projects",
            "Stay tuned for updates!",
            "-Lars"
        ]

    },
    {
        title: "Information table",
        content: [
            "Departures, Timetable & Information"

        ]
    }
]

function blogPoster() {
    var element = document.getElementById("cardCon")

    var body = "<div class=\"card\"><div class=\"card-body\"><h5 class=\"card-title\">"
    var card = "<p class=\"card-text\">"

    posts.forEach(item => {
        var thisBody = body + item.title + "</h5>"
        item.content.forEach(element => {
            thisBody += card + element + "</p>"
        })
        thisBody += "</div></div>"
        element.innerHTML += thisBody
    })
}

blogPoster()