import React from 'react';
import Pokemon from "./Pokemon"

class Pokedex extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            pokemon.map(item => <Pokemon key={item.id} poke={item} />)
        )
    }
}

export default Pokedex