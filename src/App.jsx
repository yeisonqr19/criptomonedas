import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png";
import { Form } from "./components/Form";
import axios from "axios";
import { Cotizacion } from "./components/Cotizacion";
import { Spinner } from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin: 80px 0px 50px 0px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [moneda, setMoneda] = useState("");
  const [criptoMoneda, setCriptoMoneda] = useState("");
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (moneda === "" || criptoMoneda === "") return;

    (async () => {
      const apiKey =
        "1010fd0f42f02ee30c384d575fda0098cb5e352c16b4e09a77cafac74c14b31e";
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${encodeURI(
        criptoMoneda
      )}&tsyms=${encodeURI(moneda)}&api_key=${apiKey}`;

      const { data } = await axios.get(url);
      setCargando(true);

      setTimeout(() => {
        setCargando(false);
        setResultado(data.DISPLAY[criptoMoneda][moneda]);
      }, 2500);
    })();
  }, [moneda, criptoMoneda]);

  const Componente = cargando ? (
    <Spinner />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen Cripto" />
      </div>
      <div>
        <Heading>Cotiza CriptoMonedas al instante</Heading>
        <Form setMoneda={setMoneda} setCriptoMoneda={setCriptoMoneda} />
        {Componente}
      </div>
    </Contenedor>
  );
}

export default App;
