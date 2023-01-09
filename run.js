//reactionSpeed test

let     coundown, randomTime;
const   ready = document.querySelector('.ready'),
        count = document.querySelector('.count'),
        result = document.querySelector('.result'),
        resetBtn = document.querySelector('.reset');

window.onload = function(){
    document.querySelector('.inst').style.opacity = 1;
    setTimeout(function(){
        document.querySelector('.ready').style.opacity = 1;
    }, 3000);
}

ready.addEventListener('click', function(){
    document.querySelector('.text').style.opacity = 0
    setTimeout(function(){
        document.querySelector('.text').style.display = 'none'
        document.querySelector('.count').style.display = 'inline';
        countDown = setInterval(numDown, 1000);
    }, 2000);
});

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
function setWindow(){
    randomTime = (Math.floor(Math.random() * 5) + 1) * 1000;
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor = 'rgb(69, 186, 69';
        let startTime = Date.now();

        window.addEventListener('click', function play(){
            let time = ((Date.now() - startTime) / 1);
            document.querySelector('body').style.backgroundColor = 'rgb(17, 17, 17)';
            result.textContent = `${time}ms`; 
            document.querySelector('.result').style.display = 'inline';
            window.removeEventListener('click', play);
            setWindow();
        });
    }, randomTime);
};