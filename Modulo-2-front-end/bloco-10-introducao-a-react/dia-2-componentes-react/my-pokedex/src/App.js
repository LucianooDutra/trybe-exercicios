import './App.css';
import React from 'react'
import pokemons from "./data";
import Pokemon from './Pokemon';

class App extends React.Component {
  render() {
    return (
      <main>
        <div className="divprimeira">
          <section className="section">
            {
              pokemons.map(item => {
                return <Pokemon key={item.id} poke={item} />
              })
            }
          </section>
        </div>
      </main>
    )
  }
}

export default App;
