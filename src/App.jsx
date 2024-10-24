import React, { useState, useEffect } from 'react';
import FormularioDeTarefas from './components/FormularioDeTarefas/FormularioDeTarefas';
import ListaDeTarefas from './components/ListaDeTarefas/ListaDeTarefas';
import FormularioDeEquipas from './components/FormularioDeEquipas/FormularioDeEquipas';
import './App.css'

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  const [equipas, setEquipas] = useState([]);

  useEffect(() => {
    const tarefasArmazenadas = JSON.parse(localStorage.getItem('tarefas'));
    const equipasArmazenadas = JSON.parse(localStorage.getItem('equipas'));
    if (tarefasArmazenadas) setTarefas(tarefasArmazenadas);
    if (equipasArmazenadas) setEquipas(equipasArmazenadas);
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    localStorage.setItem('equipas', JSON.stringify(equipas));
  }, [tarefas, equipas]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  const atualizarTarefa = (tarefaAtualizada) => {
    setTarefas(tarefas.map((tarefa) => (tarefa.tarefa === tarefaAtualizada.tarefa ? tarefaAtualizada : tarefa)));
  };

  const excluirTarefa = (tarefaParaExcluir) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.tarefa !== tarefaParaExcluir.tarefa));
  };

  const adicionarEquipa = (novaEquipa) => {
    setEquipas([...equipas, novaEquipa]);
  };

  return (
    <div className='body'>
      <div className='aplicativo'>
        <div className='sectionCreateAll'>
          <FormularioDeEquipas adicionarEquipa={adicionarEquipa} />
          <FormularioDeTarefas adicionarTarefa={adicionarTarefa} equipas={equipas} />
        </div>
        <div className='taskList'>
          <ListaDeTarefas tarefas={tarefas} atualizarTarefa={atualizarTarefa} excluirTarefa={excluirTarefa} />
        </div>
      </div>
    </div>
   
  );
};

export default App;
