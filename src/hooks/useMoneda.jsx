import React, { useState } from "react";
import { opcionesMonedas } from "../helpers/monedas";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: -1.2rem;
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

export const useMoneda = (label, initialState) => {
  const [moneda, setMoneda] = useState(initialState);

  const seleccionar = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={({ target }) => setMoneda(target.value)} value={moneda}>
        <option value=""> --Seleccione-- </option>
        {opcionesMonedas.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [moneda, seleccionar, setMoneda];
};
