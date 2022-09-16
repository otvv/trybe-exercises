/*
*/

const calculateNumbers = (a, b) => {

  if (isNaN(a) || isNaN(b)) {
    throw new Error('os valores inseridos precisam ser numeros');
  }

  if (!a || !b) {
    throw new Error('valores inseridos sao invalidos, por favor digite alguma coisa');
  }

  return (parseInt(a) + parseInt(b));
}

const sum = () => {

  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  
  try {
    const result = calculateNumbers(value1, value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (err) {
    document.getElementById('result').innerHTML = `Erro: ${err.message}`;
  }
  finally {
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  document.getElementById('button').addEventListener('click', sum);
}

