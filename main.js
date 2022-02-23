const dd = prompt('Ведите цвет')

switch (dd) {
    case 'красный':
        alert('STOP!!!');
        break;
    case 'зеленый':
        alert('GO!');
        break;
    case 'желтый':
        alert('Attention!!');
        break;
    default:
        alert('Ведите цвет!!!');
        break;
}
function changeDiv (id) {
    if (id == document.getElementById('closedred')) {
        document.getElementById('closered').style.background = 'red';
        document.getElementById('closedyellow').style.backgroundColor = 'closedyellow';
        document.getElementById('closedgreen').style.backgroundColor = 'closedgreen';
    }
    if (id == document.getElementById('closedyellow')) {
        document.getElementById('closedred').style.backgroundColor = 'closedred';
        document.getElementById('closedyellow').style.backgroundColor = 'yellow';
        document.getElementById('closedgreen').style.backgroundColor = 'closedgreen';
    }
    if (id == document.getElementById('closedgreen')) {
        document.getElementById('closered').style.backgroundColor = 'closedred';
        document.getElementById('closedyellow').style.backgroundColor = 'closedyellow';
        document.getElementById('closedgreen').style.backgroundColor = 'green';
    }
}
    function on(elem) {
      var x, lights = document.querySelectorAll("#back > div");
      for (x in lights) {
        lights[x].className = "closed"
      }
      elem.className = "open"
    }