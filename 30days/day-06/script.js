const cards = document.querySelectorAll('.card')

let cardOne , cardTwo;
let disabled = false;
let matchedCards = 0;

shafillCards();

function flipCard() {
    if(this !== cardOne && !disabled){
        this.classList.add('flip');
        if(!cardOne){
            return cardOne = this;
        }
        cardTwo = this;
        let cardOneImg = cardOne.querySelector('img').src
        let cardTwoImg = cardTwo.querySelector('img').src;
        disabled = true;
        MatchedCards(cardOneImg, cardTwoImg);
    }
}

function MatchedCards(img1, img2) {
    if(img1 === img2){
        matchedCards++;
        if(matchedCards === cards.length / 2){
            shafillCards();
        }
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo = null;
        disabled = false;
    } else {
        setTimeout(() => {
            cardOne.classList.add('shake');
            cardTwo.classList.add('shake');
        }, 200);
        setTimeout(() => {
            cardOne.classList.remove('shake', 'flip');
            cardTwo.classList.remove('shake', 'flip');
            cardOne = cardTwo = null;
            disabled = false;
        }, 700);
    }
}

function shafillCards() {
    matchedCards = 0;
    cardOne = cardTwo = null;
    disabled = false;
    cards.forEach(card => {
        card.addEventListener('click', flipCard);
        card.classList.remove('flip');
        let randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
    });
}

cards.forEach(card => {
    card.addEventListener('click', flipCard);
})
