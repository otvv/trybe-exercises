import React, { useState } from 'react'

function App() {

  const [ info, setInfo ] = useState({ name: 'Otávio H.', age: 23, city: 'Belo Horizonte' });
  const [ module, setModule ] = useState('Front-end');

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    })

    if (event.target.name === 'module') {
      setModule(event.target.id)
    }
  };

  return (
    <form>
      <label htmlFor='name'>
        Nome:
        <input
          type='text'
          id='name'
          value={ info.name }
          name='name'
          onChange={ handleChange }
        />
      </label>
      <br />
      <label htmlFor='age'>
        Idade:
        <input
          type='number'
          id='age'
          value={ info.age }
          name='age'
          onChange={ handleChange }
        />
      </label>
      <br />
      <label htmlFor='city'>
        Cidade:
        <input
          type='text'
          id='city'
          value={ info.city }
          name='city'
          onChange={ handleChange }
        />
      </label>
      <br />
      <label>Módulo:</label>
      <br />
      <label htmlFor='fundamentos'>
        <input
          type='radio'
          id='fundamentos'
          value={ module }
          name='module'
          onClick={ handleChange }
          />
          Fundamentos
      </label>
      <br />
      <label htmlFor='frontend'>
        <input
          type='radio'
          id='frontend'
          value={ module }
          name='module'
          onClick={ handleChange }
        />
        Front-End
      </label>
      <br />
      <label htmlFor='backend'>
        <input
          type='radio'
          id='backend'
          value={ module }
          name='module'
          onClick={ handleChange }
        />
        Back-End
      </label>
      <br />
      <label htmlFor='cs'>
        <input
          type='radio'
          id='cs'
          value={ module }
          name='module'
          onClick={ handleChange }
        />
        Ciencia da Computação
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
