import React from "react";

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

class Content extends React.Component {
    render() {
        return (
            <div>
                {conteudos.map((elemento) => (
                    // a key, serve como se fosse que estivessemos dando um id pra cada elemento diferente. nesse caso cada elemento terá seu key sendo seu próprio conteudo.
                    <div key={elemento.conteudo} className="content">
                        <h4>{`O conteudo é: ${elemento.conteudo}`}</h4>
                        <p>{`Status: ${elemento.status}`}</p>
                        <p>{`Bloco: ${elemento.bloco}`}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Content;