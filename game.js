let words=[
    {
        "inputs":10,
        "category":"Sports",
        "word":"Basketball"
    },
    {
        "inputs":5,
        "category":"Food",
        "word":"Sushi"
    },
    {
        "inputs":10,
        "category":"Device",
        "word":"Smartphone"
    },
    {
        "inputs":5,
        "category":"Country",
        "word":"Germany"
    },
]

var gameOver = false

function fillBlanks(){
    var correctGuess = false
    var word = Math.floor(Math.random() * words.length)
    var blanksEl = document.getElementById("#blanks")
    
}