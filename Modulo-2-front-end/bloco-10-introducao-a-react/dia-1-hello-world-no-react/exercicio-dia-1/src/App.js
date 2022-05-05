import './App.css';
import React from 'react';
// import { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

// A class significa um componente
class App extends React.Component {
  render() {
    return (
      // quando está dentro de chaves {} significa que está retornando um JSX
      <ul> {tarefas.map(tarefa => Task(tarefa))}</ul>
    );
  }
}

export default App;
