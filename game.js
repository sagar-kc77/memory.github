let gameBoard = document.querySelector('.board');
let gameCharacters = ['😈', '😈', '🫠', '🫠', '🐶', '🐶', '🫦', '🫦', '🤦‍♂️', '🤦‍♂️', '😒', '🤩'  ];
let randomCharacters = gameCharacters.sort(() => Math.random() - 0.5 );
let selectedValue = [];

randomCharacters.forEach((item, index) => {
    let card = document.createElement('div');
    gameBoard.append(card);
    card.addEventListener('click', flipCard);
})

function flipCard(){
    this.classList.toggle('flip');
    selectedValue.push(this);

    if(selectedValue.length == 2){
        setTimeout(checkForMatch, 500 );
    }
}
function checkForMatch(){
    if( selectedValue[0].textContent == selectedValue[1].textContent){
        alert('Matched');
        selectedValue[0].removeEventListener("click", flipCard);
        selectedValue[1].removeEventListener("click", flipCard);
    }
    else{
        selectedValue[0].classList.remove('flip');
        selectedValue[1].classList.remove('flip');
    }
    selectedValue = [];
}
resetButton.addEventListener('click', function(){
    window.location.reload();
})
