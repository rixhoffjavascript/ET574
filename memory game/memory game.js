document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');
  const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;

  function createCard(cardValue) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = cardValue;
    card.addEventListener('click', flipCard);
    return card;
  }

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.textContent === secondCard.textContent;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(cards);
  cards.forEach(cardValue => {
    const card = createCard(cardValue);
    gameBoard.appendChild(card);
  });
});
