let blackjackGame = {
    'you':{'scoreSpan':'#player_score','div':'#player-box','score':0},
    'dealer':{'scoreSpan':'#computer_score','div':'#computer-box','score':0},
    'card':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':1}
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
//创建database 方便使用  EX： YOU【div】 --> 直接去到 player box


const hitSound = new Audio('./sounds/swish.m4a');
const winSound = new Audio('./sounds/cash.mp3');
const lossSound = new Audio('./sounds/aww.mp3');

// 加入监听事件 当我们 click button时候 会触发哪个function

document.getElementById('hit').addEventListener('click',blackjackHit);
document.getElementById('deal').addEventListener('click',blackjackDeal);
document.getElementById('stand').addEventListener('click',dealerLogic);

function blackjackHit(){
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card,YOU);
    showScore(YOU);
}


//创建任意card 随机性
function randomCard(){

    let randomIndex = Math.floor(Math.random()*13);

    return blackjackGame['card'][randomIndex];

}

//当我们click button, 卡牌将一张一张的出现在player这面
function showCard(card, activePlayer){

    if(activePlayer['score'] <=21){

        let cardImage = document.createElement('img');// 创建 variable cardImage

        cardImage.src = `./images/${card}.png`;//string会自动找寻card  根据它的 random card

        document.querySelector(activePlayer['div']).appendChild(cardImage);

        hitSound.play();//sound effect
    }


}

// 点击deal button，remove 所有的card
function blackjackDeal(){

    showResult(computeWinenr());

    let yourImages = document.getElementById('player-box').querySelectorAll('img');
    //collect 所有的 div box里面的image

    for(i = 0; i < yourImages.length;i++){

        yourImages[i].remove();

    }

    let dealerImages = document.getElementById('computer-box').querySelectorAll('img');

    for(i = 0; i < dealerImages.length;i++){

        dealerImages[i].remove();

    }

    YOU['score'] = 0;

    DEALER['score'] = 0;

    document.getElementById('player_score').textContent = 0;
    document.getElementById('computer_score').textContent = 0;

}

function updateScore(card, activePlayer){

    activePlayer['score'] +=blackjackGame['cardMap'][card];

}

function showScore(activePlayer){

    // over logic 

    if(activePlayer['score'] > 21){

        document.querySelector(activePlayer['scoreSpan']).textContent = 'OVER!';

    }else{

    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    
    }
}


//现在创建dealer logic
function dealerLogic(){

    let card = randomCard();

    showCard(card,DEALER);

    updateScore(card,DEALER);

    showScore(DEALER);


}

// function 来compute 谁赢了
function computeWinenr(){

    let winner;

    if(YOU['score'] <= 21){

        if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
            
            console.log('You won!');
            winner = YOU;            

        }else if(YOU['score'] < DEALER['score']){

            console.log('You lost!');
            winner = DEALER;

        }else if(YOU['score'] === DEALER['score']){

            console.log('You drew!');

        }
    }else if (YOU['score'] > 21 && DEALER['score'] <=21){

        console.log('You lost！');
        winner = DEALER;

    }else if(YOU['score'] > 21 && DEALER['score'] >21){

        console.log('You drew!');

    }

    console.log('Winner is', winner);

    return winner;
}

function showResult(winner){

    let message, messageColor;

    if(winner === YOU){

        message = 'You won!';
        messageColor = 'green';
        winSound.play();

    }else if(winner === DEALER){

        message = 'You lost!';
        messageColor = 'red';
        lossSound.play();

    }else{

        message = 'You drew';
        messageColor = 'black';

    }

    document.getElementById('blackjack-result').textContent = message;
    document.getElementById('blackjack-result').style.color = messageColor;
}

