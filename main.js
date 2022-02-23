const dd = prompt('Ведите цвет')
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const green = document.getElementById("green")

switch (dd.toLowerCase()) {
    case 'красный':
        red.style.backgroundColor="red"
        red.innerText="STOP"
        break;
    case 'зеленый':
        green.style.backgroundColor="green"
        green.innerText="GO"
        break;
    case 'желтый':
        yellow.style.backgroundColor="yellow"
        yellow.innerText="GET READY"
        break;
    default:
        alert('Ведите цвет!!!');
        break;
}

