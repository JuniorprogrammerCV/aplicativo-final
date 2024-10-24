import React from 'react';
import './style.css'

const ItemDeTarefa = ({ tarefa, atualizarTarefa, excluirTarefa }) => {
  const handleStatusChange = (e) => {
    atualizarTarefa({ ...tarefa, status: e.target.value });
  };

  return (
    <div className='tarefa'>
      <div>
        </div>
          <h3><b>Tarefa:</b><br />{tarefa.tarefa}</h3>
        <div>
          <p>Responsável: { tarefa.responsavel} (Membro da {tarefa.equipa})</p>
          <p>Data de Entrega: {tarefa.dataEntrega}</p>
        </div>
        <div className='statusTask'>
          <div className='SubStatus'>
            <h3>Status:</h3>
            <select value={tarefa.status} onChange={handleStatusChange}>
              <option value="pendente">Pendente</option>
              <option value="em progresso">Em Progresso</option>
              <option value="concluído">Concluído</option>
            </select>
          </div>
          
        </div>
        <div>
            <button onClick={() => excluirTarefa(tarefa)} className='delete'>Excluir</button>
        </div>
    </div>
  );
};

export default ItemDeTarefa;
