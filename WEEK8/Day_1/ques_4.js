const value = Math.floor(Math.random()*10)+1;
let chances = 0;
while(chances<3){
    const guess = parseInt(prompt('Enter the guess:'));
    if(guess<value){
        alert('Number is Higher');
    }
    else if(guess>value){
        alert('Number is Lower');
    }
    else if(guess==value){
        alert('You Entered Correct');
        break;
    }
    chances++;
}
if(chances==3){
    alert('Your Chances are Gone');
}