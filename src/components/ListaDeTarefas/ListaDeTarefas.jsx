import React from 'react';
import ItemDeTarefa from '../ItemDeTarefa/ItemDeTarefa';
import './style.css' 

const ListaDeTarefas = ({ tarefas, atualizarTarefa, excluirTarefa }) => {
  return (
    <div>
      <h1>Tarefas</h1>
      {tarefas.map((tarefa, index) => (
        <ItemDeTarefa 
          key={index} 
          tarefa={tarefa} 
          atualizarTarefa={atualizarTarefa} 
          excluirTarefa={excluirTarefa} 
        />
      ))}
    </div>
  );
};

export default ListaDeTarefas;
