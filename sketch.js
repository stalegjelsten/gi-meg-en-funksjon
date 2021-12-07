let eqn
let funksjon
let pressCount = 0
let funcNo = 1
let saturation = 35
let oldFuncNo = 1
let funksjoner = [{
    "navn": "Herme&shy;funk&shy;sjonen",
    "matNavn": "Identitetsfunksjonen",
    "formel": "y=x",
    "forkl": "Gi tilbake det samme tallet.",
    "url": "https://www.google.com/search?y=x",
    "eqn": "x"
},
{
    "navn": "Positivitets&shy;funksjonen",
    "matNavn": "Absoluttverdifunksjonen",
    "formel": "y = \\vert x \\vert",
    "forkl": "Hvis tallet er positivt gir du tallet tilbake. Hvis tallet er negativt så tar du bort minustegnet og gir tallet tilbake.",
    "url": "http://google.com/search?y=abs(x)",
    "eqn": "Math.abs(x)"
},
{
    "navn": "Har du dobla dosen eller?",
    "matNavn": "",
    "formel": "y = 2x",
    "forkl": "Doble tallet du får og gi det tilbake.",
    "url": "http://google.com/search?y=2x",
    "eqn": "2*x"
},
{
    "navn": "Negativitets&shy;funksjonen",
    "matNavn": "Den negative absoluttverdifunksjonen",
    "formel": "y = - \\vert x \\vert",
    "forkl": "Hvis tallet er negativt gir du tallet tilbake. Hvis tallet er positivt så legger du til et minustegn og gir tallet tilbake.",
    "url": "http://google.com/search?y=-abs(x)",
    "eqn": "-Math.abs(x)"
},
{
    "navn": "Gidder-ikke-i-dag-funksjonen",
    "matNavn": "Nullfunksjonen",
    "formel": "y = 0",
    "forkl": "Gi tilbake tallet null. Uansett hvilket tall du får..",
    "url": "http://google.com/search?y=0",
    "eqn": "0"
},
{
    "navn": "Ca 2",
    "matNavn": "Konstant funksjon. 2.",
    "formel": "y = 2",
    "forkl": "Gi tilbake tallet 2. Uansett hvilket tall du får.",
    "url": "http://google.com/search?y=2",
    "eqn": "20"
},
{
    "navn": "Jeg vokser fort",
    "matNavn": "Andregradsfunksjon",
    "formel": "y = x^2",
    "forkl": "Gang tallet du får med seg selv og gi det tilbake.",
    "url": "http://google.com/search?y=x^2",
    "eqn": "x**2 / 100"
},
{
    "navn": "Rett linje som stiger",
    "matNavn": "Lineær funksjon",
    "formel": "y = 3x - 1",
    "forkl": "Multipliser tallet du får med 3 og trekk deretter fra 1.",
    "url": "http://google.com/search?y=3x-1",
    "eqn": "3*x-10"
},
{
    "navn": "Rett linje som synker",
    "matNavn": "Lineær funksjon",
    "formel": "y = -2x + 2",
    "forkl": "Multipliser tallet du får med -2 (minus 2) og legg deretter til 2.",
    "url": "http://google.com/search?y=-2+2",
    "eqn": "-2*x+20"
},
{
    "navn": "Jeg vokser veeeeeldig fort",
    "matNavn": "Tredjegradsfunksjon",
    "formel": "y = x^3",
    "forkl": "Opphøy tallet i 3 og gi det tilbake. Husk at tallene beholder fortegnet sitt når de opphøyes i 3 (og andre oddetall).",
    "url": "http://google.com/search?y=x^3",
    "eqn": "(x/20)**3"
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

    let mouseYColor = 100 - (1 / 100) * (mouseY / height * 100) * (mouseY / height * 100)
    let mouseXColor = Math.floor(mouseX/width*360)
    if (mouseYColor < 55) {
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
    let c = color("hsb(" + mouseXColor + ", " + saturation + "%, " + mouseYColor + "%)")
    background(c)

    title.html("<h1>" + funksjon.navn + "</h1>")

    mattitle.html("<h3>" + funksjon.matNavn + "</h3>")
    forklaring.html(funksjon.forkl)


    katex.render(funksjon.formel, eqn.elt)

    if (pressCount % 24 == 0 && pressCount != 0) {
        textSize(300)
        text("🎅", width/2-150, height-50)
    }


    // translate(width/2, height-200)

}

function drawGraph(eq) {
    push()
    strokeWeight(2)
    line(width/2, height, width/2, height-400)
    line(width/2-200, height-200, width/2+200, height-200)
    pop()
    
    push()
    stroke("hsb(200, 80%, 80%)")
    strokeWeight(2)
    noFill()
    translate(width/2, height-200)
    beginShape()
    for (let x = -100; x < 100; x++) {
        vertex(x,-eval(eq))
    }
    endShape()
    pop() 

}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        drawGraph(funksjon.eqn)
    } else if (keyCode == RIGHT_ARROW) {
        mousePressed()
    }
}

function deviceShaken() {
    drawGraph(funksjon.eqn)
}

function mousePressed() {
    while (funcNo == oldFuncNo) {
        funcNo = Math.floor(Math.random() * funksjoner.length)
    }
    oldFuncNo = funcNo
    funksjon = funksjoner[funcNo]
    pressCount++
    redraw()
}