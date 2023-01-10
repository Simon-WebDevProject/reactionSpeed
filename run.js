//reactionSpeed test
//GitHub Project - Schmoney
//Test reaction speed; Click when window turns green, record reaction speed

let     coundown, isClicked = false, time, scores = [], li, result, timeIndex;
const   record = document.querySelector('.record');
        ready = document.querySelector('.ready'),
        count = document.querySelector('.count'),
        resetBtn = document.querySelector('.reset');

//fade in text on load
window.onload = function(){
    document.querySelector('.inst').style.opacity = 1;
    setTimeout(function(){
        document.querySelector('.ready').style.opacity = 1;
    }, 3000);
}
//fadeout & start on ready click
ready.addEventListener('click', function(){
    if(isClicked == false){
        isClicked = true;
        document.querySelector('.text').style.opacity = 0
        setTimeout(function(){
            document.querySelector('.text').style.display = 'none'
            document.querySelector('.count').style.display = 'inline';
            countDown = setInterval(numDown, 1000);
        }, 2000);
    }
});
//countdown function
function numDown(){
    let countNum = count.textContent;
    if(countNum > 0){
        count.textContent = (count.textContent * 1) - 1;
    }
    else{
        clearInterval(countDown);
        document.querySelector('.count').style.display = 'none';
        setWindow();
    }
};
//set random switch to green screen and show results
function setWindow(){
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor = 'rgb(69, 186, 69';
        let startTime = Date.now();

        //on green screen, record reaction time
        window.addEventListener('mousedown', function play(){

            time = ((Date.now() - startTime) / 1); 
            document.querySelector('body').style.backgroundColor = 'rgb(17, 17, 17)';
            
            scores.push(time);
            scores.sort((a, b) => a - b);
            timeIndex = scores.indexOf(time);

            result = document.createElement('ol');
            result.classList.add('result');
            record.removeChild(record.lastChild);
            record.appendChild(result);

            //creates list for times
            for(i = 0; i < scores.length; i++){
                if(i != timeIndex){
                    li = document.createElement('li');
                    li.textContent = `${scores[i]}ms`;
                    result.appendChild(li);
                }
                else{
                    li = document.createElement('li');
                    li.style.fontSize = '2rem';
                    li.style.textDecoration = 'underlined'
                    li.textContent = `${scores[i]}ms`;
                    result.appendChild(li);
                }
            }
            result.style.display = 'inline';

            window.removeEventListener('mousedown', play);
            setWindow();
        });
    }, ((Math.random() * 3) + 1) * 1000);
};
function cancel(){

}