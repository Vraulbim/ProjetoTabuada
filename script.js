function calcTabuada(value, count){

  if(count<=10){
    let  lista = document.getElementById('tabuada');
    let li = document.createElement('li');
  
    li.appendChild(document.createTextNode(`${value} X ${count} = ${value * count}`));
    lista.appendChild(li);
    calcTabuada(value, count + 1)
  }
}

document.getElementById('button').addEventListener('click', () => {
  var number = document.getElementById('input').value;
  const count = 0;
  document.getElementById('tabuada').innerHTML = '';

  !number ? alert('Digite um número primeiro'): calcTabuada(number, count);
});