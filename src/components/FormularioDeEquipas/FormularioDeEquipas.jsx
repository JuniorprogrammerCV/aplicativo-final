import React, { useState } from 'react';
import './style.css'

const FormularioDeEquipas = ({ adicionarEquipa }) => {
  const [nomeEquipa, setNomeEquipa] = useState('');
  const [membro, setMembro] = useState('');
  const [membros, setMembros] = useState([]);

  const handleAddMembro = () => {
    if (!nomeEquipa) {
      alert('Você deve adicionar uma equipa antes de adicionar um membro.');
      return;
    }
    if (!membro) {
      alert('Você deve escrever o nome do membro antes de adicioná-lo.');
      return;
    }
    setMembros([...membros, membro]);
    setMembro('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nomeEquipa) {
      alert('Você deve adicionar o nome da equipa.');
      return;
    }
    if (membros.length === 0) {
      alert('Você deve adicionar pelo menos um membro antes de adicionar uma equipa.');
      return;
    }
    adicionarEquipa({ nome: nomeEquipa, membros });
    setNomeEquipa('');
    setMembros([]);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h3>Construa as tuas equipas</h3>
      <input 
        type="text" 
        placeholder="Nome da Equipa" 
        value={nomeEquipa}
        onChange={(e) => setNomeEquipa(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Nome do Membro" 
        value={membro}
        onChange={(e) => setMembro(e.target.value)} 
      />
      <button type="button" onClick={handleAddMembro}>Adicionar Membro</button>
      <div className='memberArea'>
        <ul>
          <p>⇩ Membros ⇩</p>
          {membros.map((membro, index) => (
          <li key={index} >{membro}</li>
          ))}
        </ul>
      </div>
      <button type="submit">Adicionar Equipa</button>
    </form>
  );
};

export default FormularioDeEquipas;
