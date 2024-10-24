import React, { useState } from 'react';
import './style.css'

const FormularioDeTarefas = ({ adicionarTarefa, equipas }) => {
  const [tarefa, setTarefa] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [dataEntrega, setDataEntrega] = useState('');
  const [equipa, setEquipa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!equipa || !responsavel || !dataEntrega) {
      alert('Você deve selecionar uma equipa, um membro e definir a data de entrega antes de adicionar uma tarefa.');
      return;
    }
    adicionarTarefa({ tarefa, responsavel, dataEntrega, equipa, status: 'pendente' });
    setTarefa('');
    setResponsavel('');
    setDataEntrega('');
    setEquipa('');
  };

  return (
    <form onSubmit={handleSubmit} className='TarefaForm'>
      <h3>Cria e Atribui Tarefas</h3>
      <input 
        type="text" 
        placeholder="Nova Tarefa" 
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)} 
      />
      <select value={equipa} onChange={(e) => setEquipa(e.target.value)}>
        <option value="">Selecionar Equipa</option>
        {equipas.map((equipa, index) => (
          <option key={index} value={equipa.nome}>{equipa.nome}</option>
        ))}
      </select>
      <select value={responsavel} onChange={(e) => setResponsavel(e.target.value)}>
        <option value="">Selecionar Membro</option>
        {equipas.find(e => e.nome === equipa)?.membros.map((membro, index) => (
          <option key={index} value={membro}>{membro}</option>
        ))}
      </select>
      <p><b>Data de entrega</b></p>
      <input 
        type="date" 
        value={dataEntrega}
        onChange={(e) => setDataEntrega(e.target.value)} 
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default FormularioDeTarefas;