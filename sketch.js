let eqn
let funksjon
let funksjoner = [{
        "navn": "Hermefunksjonen",
        "matNavn": "Identitetsfunksjonen",
        "formel": "y=x",
        "forkl": "Gi tilbake det samme tallet."
    },
    {
        "navn": "Positivitetsfunksjonen",
        "matNavn": "Absoluttverdifunksjonen",
        "formel": "y = \\vert x \\vert",
        "forkl": "Hvis tallet er positivt gir du tallet tilbake. Hvis tallet er negativt så tar du bort minustegnet og gir tallet tilbake."
    },
    {
        "navn": "Har du dobla dosen eller?",
        "matNavn": "",
        "formel": "y = 2x",
        "forkl": "Doble tallet du får og gi det tilbake."
    },
    {
        "navn": "Negativitetsfunksjonen",
        "matNavn": "Den negative absoluttverdifunksjonen",
        "formel": "y = - \\vert x \\vert",
        "forkl": "Hvis tallet er negativt gir du tallet tilbake. Hvis tallet er positivt så legger du til et minustegn og gir tallet tilbake."
    },
    {
        "navn": "Gidder-ikke-i-dag-funksjonen",
        "matNavn": "Nullfunksjonen",
        "formel": "y = 0",
        "forkl": "Gi tilbake tallet null. Uansett hvilket tall du får.."
    },
    {
        "navn": "Ca 2",
        "matNavn": "Konstant funksjon. 2.",
        "formel": "y = 2",
        "forkl": "Gi tilbake tallet 2. Uansett hvilket tall du får."
    },
    {
        "navn": "Jeg vokser fort",
        "matNavn": "Andregradsfunksjon",
        "formel": "y = x^2",
        "forkl": "Gang tallet du får med seg selv og gi det tilbake."
    },
    {
        "navn": "Rett linje som stiger",
        "matNavn": "Lineær funksjon",
        "formel": "y = 3x - 1",
        "forkl": "Multipliser tallet du får med 3 og trekk deretter fra 1."
    },
    {
        "navn": "Rett linje som synker",
        "matNavn": "Lineær funksjon",
        "formel": "y = -2x + 2",
        "forkl": "Multipliser tallet du får med -2 (minus 2) og legg deretter til 2."
    },
    {
        "navn": "Jeg vokser veeeeeldig fort",
        "matNavn": "Tredjegradsfunksjon",
        "formel": "y = x^3",
        "forkl": "Opphøy tallet i 3 og gi det tilbake. Husk at tallene beholder fortegnet sitt når de opphøyes i 3 (og andre oddetall)."
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
    let c = color("hsb("+ randNum + ", 35%, 87%)")
    background(c)
    console.log(randNum)

    title.html("<h1>" + funksjon.navn + "</h1>")

    mattitle.html("<h3>" + funksjon.matNavn + "</h3>")
    forklaring.html(funksjon.forkl)


    katex.render(funksjon.formel, eqn.elt)
    console.log("updated")
}


function mousePressed() {
    funksjon = funksjoner[Math.floor(Math.random() * funksjoner.length)]
    redraw()
}