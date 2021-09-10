import React, { useState } from "react";

import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 1.8rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

export const useCriptoMonedas = (label, initialState, listaCripto) => {
  const [criptoMoneda, setCriptoMoneda] = useState(initialState);

  const seleccionarCripto = () => (
    <>
      <Label>{label}</Label>
      <Select
        onChange={({ target }) => setCriptoMoneda(target.value)}
        value={criptoMoneda}
      >
        <option value="">--- Seleccione ---</option>
        {listaCripto.map((cripto) => (
          <option key={cripto.CoinInfo.Id} value={cripto.CoinInfo.Name}>
            {cripto.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );

  return [criptoMoneda, seleccionarCripto, setCriptoMoneda];
};
