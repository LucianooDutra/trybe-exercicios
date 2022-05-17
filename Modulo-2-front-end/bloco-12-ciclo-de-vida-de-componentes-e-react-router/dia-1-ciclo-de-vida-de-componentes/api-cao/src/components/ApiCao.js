import React from "react";
import Cao from "./Cao";

class ApiCao extends React.Component {
  state = {
    dog: [],
    loading: true,
  };

  //   chamo minha Api assim que carrega a pág.
  componentDidMount() {
    this.fetchJoke();
  }

  // Utilizei pra fazer minha comparação se renderiza ou não o perfil de acordo com o nome
    shouldComponentUpdate(_nextProps, _nextState) {
        const nome = 'terrier';
      if (_nextState.dog.message?.includes(nome)) {
          return false;
      }
      return true;
  }

  componentDidUpdate() {
    //   Guarde a url da última imagem gerada no localStorage após cada atualização.
    const { dog } = this.state;
    localStorage.setItem("dogURL", dog.message); // B
    // Após a atualização do componente, exiba um alert com a raça do doguinho (verifique o campo message);
    const dogBreed = dog.message?.split('/')[4];
    alert(dogBreed); // C
  }

  proximoDog = () => {
    this.fetchJoke();
  };

  // requisição da API
  async fetchJoke() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
        const requestHeaders = {
          message:
            "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1287.jpg",
          status: "sucesso",
        };
        const requestReturn = await fetch(
          "https://dog.ceo/api/breeds/image/random",
          requestHeaders
        );
        const requestObject = await requestReturn.json();
        console.log(requestObject);
        this.setState({
          dog: requestObject,
          loading: false,
        });
      }
    );
  }

  render() {
    const { dog, loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div>
        {loading ? (
          loadingElement
        ) : (
          <Cao img={dog.message} proximo={this.proximoDog} />
        )}
      </div>
    );
  }
}

export default ApiCao;
