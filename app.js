cardArray =[
    {
        name : 'Strawberry',
        img : 'images/1.jpeg'
    },
    {
        name : 'Orange',
        img : 'images/2.jpeg'
    },
    {
        name : 'Avocado',
        img : 'images/3.jpeg'
    },
    {
        name : 'Banana',
        img : 'images/4.jpeg'
    },
    {
        name : 'Watermelon',
        img : 'images/5.png'
    },
    {
        name : 'Strawberry',
        img : 'images/1.jpeg'
    },
    {
        name : 'Orange',
        img : 'images/2.jpeg'
    },
    {
        name : 'Avocado',
        img : 'images/3.jpeg'
    },
    {
        name : 'Banana',
        img : 'images/4.jpeg'
    },
    {
        name : 'Watermelon',
        img : 'images/5.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())
const gridDisplay =document.querySelector('#grid ')
let cardChosen = []
let cardChosenIds = []

const match= []
const result = document.getElementById('result')


function createBoard(){
    for (let i=0; i<10 ; i++){
        const card= document.createElement('img')
        card.setAttribute('src', 'images/blank.jpeg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function flipcard(){
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2){
       setTimeout(checkMatch,500)
    }

}

function checkMatch(){
    const cards = document.querySelectorAll('img')
    
    if (cardChosen[0] == cardChosen[1]){
        match.push(cardChosen)
        alert("It's a Match")
        
    }
    else{
        cards[cardChosenIds[0]].setAttribute('src', 'images/blank.jpeg')
        cards[cardChosenIds[1]].setAttribute('src', 'images/blank.jpeg')

        console.log("Try again")
    } 
    result.innerHTML=match.length
    cardChosen = []
    cardChosenIds = []

    if (match.length == cardArray.length/2){
        result.innerHTML = "Congratulations You Won!!"
        alert("Congratulations you have Won!")

    }
}