import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

export const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) {
    return null;
  }

  return (
    <ResultadoDiv>
      <Precio>
        El Precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        Precio mas Alto del Dia: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio mas Bajo del Dia: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variacion De las Ultimas 24 Horas: <span>{resultado.CHANGE24HOUR}</span>
      </Info>
      <Info>
        Ultima Actualizacion: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};
