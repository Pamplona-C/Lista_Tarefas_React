import React from "react";
import './TodoList.css'

function TodoList(){
    return (
        <div className="container">
            <h1>Lista de Tarefas</h1>

            <form action="">
                <input 
                type="text"
                placeholder="Adicione uma Tarefa"
                />
                <button className="add" type="submit">Add</button>
            </form>

            <div className="listaTarefas">

                <div className="item">
                    <span>Tarefa de exemplo</span>
                    <button className="delete">deletar</button>
                </div>

                <div className="item completo">
                    <span>Tarefa de exemplo</span>
                    <button className="delete">deletar</button>
                </div>

                <button className="deleteAll">Deletar Todas</button>

            </div>
        </div>
    )
}
export default TodoList;