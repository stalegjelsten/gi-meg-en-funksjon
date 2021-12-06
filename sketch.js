let eqn
let funksjon
let funksjoner = [{
        "navn": "Herme&shy;funk&shy;sjonen",
        "matNavn": "Identitetsfunksjonen",
        "formel": "y=x",
        "forkl": "Gi tilbake det samme tallet.",
        "url": "https://www.google.com/search?y=x"
    },
    {
        "navn": "Positivitets&shy;funksjonen",
        "matNavn": "Absoluttverdifunksjonen",
        "formel": "y = \\vert x \\vert",
        "forkl": "Hvis tallet er positivt gir du tallet tilbake. Hvis tallet er negativt så tar du bort minustegnet og gir tallet tilbake.",
        "url": "http://google.com/search?y=abs(x)"
    },
    {
        "navn": "Har du dobla dosen eller?",
        "matNavn": "",
        "formel": "y = 2x",
        "forkl": "Doble tallet du får og gi det tilbake.",
        "url": "http://google.com/search?y=2x"
    },
    {
        "navn": "Negativitets&shy;funksjonen",
        "matNavn": "Den negative absoluttverdifunksjonen",
        "formel": "y = - \\vert x \\vert",
        "forkl": "Hvis tallet er negativt gir du tallet tilbake. Hvis tallet er positivt så legger du til et minustegn og gir tallet tilbake.",
        "url": "http://google.com/search?y=-abs(x)"
    },
    {
        "navn": "Gidder-ikke-i-dag-funksjonen",
        "matNavn": "Nullfunksjonen",
        "formel": "y = 0",
        "forkl": "Gi tilbake tallet null. Uansett hvilket tall du får..",
        "url": "http://google.com/search?y=0"
    },
    {
        "navn": "Ca 2",
        "matNavn": "Konstant funksjon. 2.",
        "formel": "y = 2",
        "forkl": "Gi tilbake tallet 2. Uansett hvilket tall du får.",
        "url": "http://google.com/search?y=2"
    },
    {
        "navn": "Jeg vokser fort",
        "matNavn": "Andregradsfunksjon",
        "formel": "y = x^2",
        "forkl": "Gang tallet du får med seg selv og gi det tilbake.",
        "url": "http://google.com/search?y=x^2"
    },
    {
        "navn": "Rett linje som stiger",
        "matNavn": "Lineær funksjon",
        "formel": "y = 3x - 1",
        "forkl": "Multipliser tallet du får med 3 og trekk deretter fra 1.",
        "url": "http://google.com/search?y=3x-1"
    },
    {
        "navn": "Rett linje som synker",
        "matNavn": "Lineær funksjon",
        "formel": "y = -2x + 2",
        "forkl": "Multipliser tallet du får med -2 (minus 2) og legg deretter til 2.",
        "url": "http://google.com/search?y=-2+2"
    },
    {
        "navn": "Jeg vokser veeeeeldig fort",
        "matNavn": "Tredjegradsfunksjon",
        "formel": "y = x^3",
        "forkl": "Opphøy tallet i 3 og gi det tilbake. Husk at tallene beholder fortegnet sitt når de opphøyes i 3 (og andre oddetall).",
        "url": "http://google.com/search?y=x^3"
    }
]





function setup() {
    createCanvas(windowWidth, windowHeight)
    content = createDiv("").size(width * 3 / 4, height * 3 / 4).style("text-align", "center")
    content.center()
    title = createP("")
    mattitle = createP("")
    forklaring = createP("")
    eqn = createP("")
    content.child(title)
    content.child(mattitle)
    content.child(forklaring)
    content.child(eqn)
    noLoop()
    funksjon = { "navn": "Trykk på skjermen når du er klar", "matNavn": "Si til partneren din: Gi meg en <i>x</i> og jeg skal gi deg en <i>y</i> tilbake ❤️.", "formel": "", "forkl": "" }
}

function draw() {

    let randNum = Math.floor(Math.random() * 361)
    let mousePosColor = 100 - mouseY/height*80
    if (mousePosColor < 55) {
        title.style("color", "#fff")
        mattitle.style("color", "#fff")
        forklaring.style("color", "#fff")
        eqn.style("color", "#fff")
    } else {
        title.style("color", "#000")
        mattitle.style("color", "#000")
        forklaring.style("color", "#000")
        eqn.style("color", "#000")
    } 
    background(color("hsb("+ randNum + ", 35%, " + mousePosColor + "%)"))

    title.html("<h1>" + funksjon.navn + "</h1>")

    mattitle.html("<h3>" + funksjon.matNavn + "</h3>")
    forklaring.html(funksjon.forkl)


    katex.render(funksjon.formel, eqn.elt)

}


function mousePressed() {
    funksjon = funksjoner[Math.floor(Math.random() * funksjoner.length)]
    redraw()
}