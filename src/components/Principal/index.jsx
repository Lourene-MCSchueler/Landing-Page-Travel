import './styles.css';
import { useState, useEffect } from 'react';

export function Principal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  function handleSubmit() {

    localStorage.setItem('nome', name)
    localStorage.setItem('email', email)
    localStorage.setItem('city', city)
  }


  return (

    <div className='container'>
      <div className='box1'>
        <div>
          <img src='image1.jpeg' alt='Itens de viagens: mapa, caderno' />
        </div>
        <div className='text'>
          <p>Receba nosso planner de viagem que foi
            elaborado para facilitar a organização
            do seu roteiro.</p>
        </div>
      </div>

      <div className='box2'>
        <h3>PREENCHA COM SEUS DADOS</h3>
        <p>e receba o planner no seu e-mail</p>
        <form className='form'>
          <label htmlFor="name">Nome</label><br />
          <input type="text" id="name" required value={name} onChange={e => setName(e.target.value)} /><br />

          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} /><br />

          <label htmlFor="city">Cidade</label><br />
          <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} /><br />

          <button type="submit" onClick={handleSubmit}>Enviar</button>
        </form>
      </div>
    </div>
  )
};
