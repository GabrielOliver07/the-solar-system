import "../components/Peso.css";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const findWord = (planetName) => {
  if (planetName === "Terra") {
    return "na";
  } else if (planetName === "Sol") {
    return "no";
  } else {
    return "em";
  }
};

// const calcPeso = (e) => {};

const Peso = ({ planet, clickHandler }) => {
  const [peso, setPeso] = useState();
  const [pesoConvertido, setPesoConvertido] = useState();

  const handleCalcPeso = () => {
    // PESO = MASSA * GRAVIDADE
    // O que vemos na balança é a massa, o peso é em Newtons
    let pesoN = peso * 1.6;
    let convert = pesoN / 9.8;
    setPesoConvertido(convert);

    // setPeso(0);
  };

  const handleReset = () => {
    setPeso("");
    setPesoConvertido(0);
  };

  return (
    <div className={`peso-container planet${planet.id}`}>
      <AiFillCloseCircle onClick={clickHandler} />
      <h2 className={`planet${planet.id}`}>
        Qual seria o Seu peso {findWord(planet.name)} {planet.name}?
      </h2>
      <div className="convert-container">
        <label for="peso-terra">Insira o seu peso na Terra</label>
        <input
          type="number"
          id="peso-terra"
          value={peso}
          placeholder="valor em Kg"
          onChange={(e) => {
            setPeso(e.target.value);
            console.log("target.value: ", e.target.value);
            console.log("peso enquanto muda: ", peso);
          }}
        />
        <div className="btn-convert-container">
          <button className="convert-btn" onClick={handleCalcPeso}>
            Converter
          </button>
          <button className="convert-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <div className="convert-result">
        <p>
          Se você estivesse {findWord(planet.name)} {planet.name}, seu peso
          seria:
        </p>
        <p>{pesoConvertido ? `${pesoConvertido.toFixed(2)} Kg` : "???"}</p>
      </div>

      {/* <p>Explicação</p> */}
    </div>
  );
};

export default Peso;
