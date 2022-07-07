import React from "react";
// import EstadoFavorito from "./EstadoFavorito";
// import Idade from "./Idade";
// import Nome from "./Nome";

class Form extends React.Component {
  state = {
    nome: "",
    email: "",
    cpf: 0,
    endereco: "",
    cidade: "",
    estado: "",
    idade: 0,
    vaiComparecer: "",
    file: "",
    formularioComErros: true,
  };

  //   handleError = () => {
  //     const { estadoFavorito, nome, email, idade } = this.state;

  //     const errorCases = [
  //       !estadoFavorito.length,
  //       !email.match(/^\S+@\S+$/i),
  //       !idade.length,
  //       !nome.length,
  //     ];

  //     const formularioPreenchido = errorCases.every((error) => error !== true);

  //     this.setState({
  //       formularioComErros: !formularioPreenchido,
  //     });
  //   };

  handleChange = (event) => {
    //   console.log('estou mudando o estado do pai')
    //   console.log(event.target.name);
    // console.log(event.target.value);
    const { name } = event.target;
    // se usa a constante value assim, pra quando tiver no formulário algum checkbox
    // se não tiver checkbox é só jogar o value pra cima. ex. const {name, value} = event.target;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    // forma antiga
    // this.setState({ estadoFavorito: event.target.value });
    // forma pra todos, de forma dinâmica
    this.setState(
      {
        [name]: value,
      }
      //   se for colocar o error
      //   () => {
      //     this.handleError();
      //   }
    );
  };

  render() {
    // console.log(this);
    return (
      <div>
        <div>
          <h1>Meu formulário</h1>
        </div>
        <div>
          <form>
            <fieldset>
              <input
                type="text"
                name="nome"
                placeholder="nome"
                maxLength="40"
                required
                value={this.state.nome}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                maxLength="50"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="cpf"
                placeholder="cpf"
                maxLength="11"
                required
                value={this.state.cpf}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="endereco"
                placeholder="endereço"
                maxLength="200"
                required
                value={this.state.endereco}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="cidade"
                placeholder="cidade"
                maxLength="28"
                required
                value={this.state.cidade}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="cidade"
                placeholder="cidade"
                maxLength="28"
                required
                value={this.state.cidade}
                onChange={this.handleChange}
              />
              <label>Estado:</label>
              <select
                name="estado"
                id="estado"
                required
                // value={this.state.cidade}
                // onChange={this.handleChange}
              >
                <option id="acre" value="acre">
                  Acre (AC)
                </option>
                <option id="alagoas" value="alagoas">
                  Alagoas (AL)
                </option>
                <option id="amapa" value="amapa">
                  Amapá (AP)
                </option>
                <option id="amazonas" value="amazonas">
                  Amazonas (AM)
                </option>
                <option id="bahia" value="bahia">
                  Bahia (BA)
                </option>
                <option id="ceara" value="ceara">
                  Ceará (CE)
                </option>
                <option id="distritoFederal" value="distritoFederal">
                  Distrito Federal (DF)
                </option>
                <option id="espiritoSanto" value="espiritoSanto">
                  Espírito Santo (ES)
                </option>
                <option id="goias" value="goias">
                  Goiás (GO)
                </option>
                <option id="maranhao" value="maranhao">
                  Maranhão (MA)
                </option>
                <option id="matoGrosso" value="matoGrosso">
                  Mato Grosso (MT)
                </option>
                <option id="matoGrossoDoSul" value="matoGrossoDoSul">
                  Mato Grosso do Sul (MS)
                </option>
                <option id="minasGerais" value="minasGerais">
                  Minas Gerais (MG)
                </option>
                <option id="para" value="para">
                  Pará (PA)
                </option>
                <option id="paraiba" value="paraiba">
                  Paraíba (PB)
                </option>
                <option id="parana" value="parana">
                  Paraná (PR)
                </option>
                <option id="pernambuco" value="pernambuco">
                  Pernambuco (PE)
                </option>
                <option id="piaui" value="piaui">
                  Piauí (PI)
                </option>
                <option id="rioDeJaneiro" value="rioDeJaneiro">
                  Rio de Janeiro (RJ)
                </option>
                <option id="rioGrandeDoNorte" value="rioGrandeDoNorte">
                  Rio Grande do Norte (RN)
                </option>
                <option id="rioGrandeDoSul" value="rioGrandeDoSul">
                  Rio Grande do Sul (RS)
                </option>
                <option id="rondonia" value="rondonia">
                  Rondônia (RO)
                </option>
                <option id="roraima" value="roraima">
                  Roraima (RR)
                </option>
                <option id="santaCatarina" value="santaCatarina">
                  Santa Catarina (SC)
                </option>
                <option id="saoPaulo" value="saoPaulo">
                  São Paulo (SP)
                </option>
                <option id="sergipe" value="sergipe">
                  Sergipe (SE)
                </option>
                <option id="tocantins" value="tocantins">
                  Tocantins (TO)
                </option>
              </select>
              <div>
                <label id="label-rate">Tipo</label>
                <div className="radio-rate">
                  <input type="radio" name="tipo" id="rate-1" value="casa" />
                  <label>Casa</label>
                </div>
                <div className="radio-rate">
                  <input
                    type="radio"
                    name="tipo"
                    id="rate-2"
                    value="apartamento"
                  />
                  <label>Apartamento</label>
                </div>
              </div>
              {/* <h3>inicio do formulário</h3> */}
              {/* enviando os dados pra o elem filho no caso EstadoFavorito */}
              {/* <EstadoFavorito
                value={this.state.estadoFavorito}
                handleChange={this.handleChange}
              /> */}
              {/* <Idade
                value={this.state.idade}
                handleChange={this.handleChange}
              /> */}
              {/* <Nome value={this.state.nome} handleChange={this.handleChange} /> */}
              {/* daqui pra baixo é da forma normal sem exportar o elemento filho pra outro arquivo */}
              {/* <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              /> */}
              {/* <input
                type="checkbox"
                name="vaiComparecer"
                value={this.state.vaiComparecer}
                onChange={this.handleChange}
              /> */}
              {/* <input
                type="file"
                name="file"
                value={this.state.file}
                onChange={this.handleChange}
              /> */}
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
