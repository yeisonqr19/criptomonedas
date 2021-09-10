import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useMoneda } from "../hooks/useMoneda";
import { useCriptoMonedas } from "../hooks/useCriptoMonedas";
import { Error } from "./Error";
import { useAxios } from "../hooks/useAxios";

const Boton = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const Form = ({ setMoneda, setCriptoMoneda }) => {
  const [listaCripto, setListCripto] = useState([]);

  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useMoneda("Elige tu Moneda", "");

  const [criptoMoneda, SeleccionarCripto] = useCriptoMonedas(
    "Elige tu CriptoMoneda",
    "",
    listaCripto
  );

  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

  const { data } = useAxios(url);

  useEffect(() => {
    if (data !== null) {
      const { Data } = data;
      setListCripto(Data);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (moneda === "" || criptoMoneda === "") {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    setError(false);
    setMoneda(moneda);
    setCriptoMoneda(criptoMoneda);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error mensaje="Todos los Campos son Obligatorios" />}

      <SelectMonedas />
      <SeleccionarCripto lista />

      <Boton type="submit" value="calcular">
        Calcular
      </Boton>
    </form>
  );
};
