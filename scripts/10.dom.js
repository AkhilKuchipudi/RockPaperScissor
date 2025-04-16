// Rock Paper Scissors Game
      // Function to handle button clicks
      let score = JSON.parse(localStorage.getItem('game_score')) || { wins: 0, losses: 0, ties: 0 };
      let result = '';
      function play(playerMove){
        const computerMove=getComputerMove();
        if(playerMove === computerMove){
          result = 'It\'s a tie!';
          score.ties++;
        }else if(
          (playerMove === 'rock' && computerMove === 'scissor') ||
          (playerMove === 'paper' && computerMove === 'rock') ||
          (playerMove === 'scissor' && computerMove === 'paper')
        ){
          result = 'You win!';
          score.wins++;
        }else{
          result = 'You lose!';
          score.losses++;
        }
        localStorage.setItem('game_score', JSON.stringify(score));
        document.querySelector('.result-div-p').innerText = `${result}`;
        document.querySelector('.img-you').src=`images/${playerMove}-emoji.png`;
        document.querySelector('.img-computer').src=`images/${computerMove}-emoji.png`;
        document.querySelector('.rps-wins').innerText = ` ${score.wins}`;
        document.querySelector('.rps-losses').innerText = ` ${score.losses}`;
        document.querySelector('.rps-ties').innerText = ` ${score.ties}`;

      }
      // Function to generate computer choice
      function getComputerMove() {
        let randomNumber = Math.random();
        if(randomNumber>=0 &&randomNumber<1/3){
          return 'rock';
        }else if(randomNumber>=1/3 && randomNumber<2/3){
          return 'paper';
        } else if(randomNumber>=2/3 && randomNumber<1){
          return 'scissor';
        }
      }
      function resetscore(){
        localStorage.removeItem('game_score');
        score = { wins: 0, losses: 0, ties: 0 };
        document.querySelector('.rps-wins').innerText = ` ${score.wins}`;
        document.querySelector('.rps-losses').innerText = ` ${score.losses}`;
        document.querySelector('.rps-ties').innerText = ` ${score.ties}`;
      }

      //Amazon Shipping Calculator
      // Function to calculate shipping cost based on order amount
      function amazonShippingCalculator() {
        const inputElement = document.querySelector('.amazon-input').value;
        const orderAmount = Number(inputElement);
        const shippingCost = orderAmount < 40 ? 10 : 0;
        const totalCost = orderAmount + shippingCost;
        const resultElement = document.querySelector('.amazon-result');
        if (inputElement===''||orderAmount<=0) {
          orderAmount=0;
          shippingCost=0;
        }
        resultElement.innerText = `Total cost: $${totalCost.toFixed(2)}`;
      }
      // YouTube Subscribe Button
      // Function to handle YouTube subscribe button click
      function ytSubscribe() {
        const subscribeButton = document.querySelector('.yt-subscribe-button');
        if(subscribeButton.innerText==='Subscribe'){
          subscribeButton.innerText='Subscribed';
          subscribeButton.classList.add('yt-subscribe-button-clicked');
          /*
          subscribeButton.style.backgroundColor='#ff0000';
          subscribeButton.style.color='#fff';
          subscribeButton.style.border='none';
          subscribeButton.style.padding='10px 20px';
          subscribeButton.style.fontSize='16px';
          subscribeButton.style.cursor='pointer';
          */
        }else{
          subscribeButton.classList.remove('yt-subscribe-button-clicked');
          subscribeButton.innerText='Subscribe';
        }
      }
      /*
      subscribeButton.addEventListener('click', () => {
        alert('Subscribed!');
      });
      */