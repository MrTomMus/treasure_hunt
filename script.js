const map = document.querySelector('.map');
const result = document.querySelector('.result');
const currentClick = document.querySelector('.clicks span');

let click = 0;


let getRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
}

let getDistance = (event, target) => {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;

    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let width = 700;
let height = 700;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

map.addEventListener('click', (event) => {
    let distance = getDistance(event, target);
    click++

    if(distance < 20) {
        result.innerHTML = 'Ты выйграл!';
        result.style.color = 'gold';
        currentClick.innerHTML = click;
    }else if(distance < 80) {
        result.innerHTML = 'Ты близок к кладу.';
        result.style.color = 'black';
        currentClick.innerHTML = click;
    }else if(distance < 160) {
        result.innerHTML = 'Клад где-то поблизости!';
        result.style.color = 'black';
        currentClick.innerHTML = click;
    }else if(distance < 320) {
        result.innerHTML = 'Клад еще далеко.';
        result.style.color = 'aqua';
        currentClick.innerHTML = click;
    }else if(distance < 640) {
        result.innerHTML = 'Сокровищ тут нет.';
        result.style.color = 'blue';
        currentClick.innerHTML = click;
    }
    
})



