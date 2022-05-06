import React from 'react';
// import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { poke } = this.props
        const { name, type, averageWeight, image } = poke
        return (
            <div className="pokemon">
                <div>
                    <img src={image} />
                </div>
                <h2>{name}</h2>
                <h3>{type}</h3>
                <h5>{averageWeight.value} {averageWeight.measurementUnit}</h5>
            </div>
        )
    }
}

export default Pokemon