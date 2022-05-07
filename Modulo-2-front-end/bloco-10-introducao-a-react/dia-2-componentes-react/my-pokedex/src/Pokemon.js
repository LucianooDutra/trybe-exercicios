import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { poke } = this.props
        const { name, type, averageWeight, image } = poke
        return (
            <div className="pokemon">
                <div>
                    <img src={image} alt="Imagem do pokemon" />
                </div>
                <div className="nomes">
                    <h3>{name}</h3>
                    <h5>{type}</h5>
                    <h5>{averageWeight.value}{averageWeight.measurementUnit}</h5>
                </div>
            </div>
        )
    }
}

Pokemon.propTypes = {
    poke: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    }).isRequired,
};

export default Pokemon