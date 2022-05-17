import React from "react";

class Cao extends React.Component {
  render() {
    const { img, proximo } = this.props;

    return (
      <div className="DivDoguinho">
        <img src={img} alt={img} className="ImgDoguinho" />
        <div>
          <button type="button" onClick={proximo}>
            Próximo doguinho!
          </button>
        </div>
      </div>
    );
  }
}

export default Cao;
