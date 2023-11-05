import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Busca } from '../../../Types/busca';

interface props {
  data?: Busca[]
}


function Tabela(props: props) {

  useEffect(() => {
    console.log("DATA")
    console.log(props.data)
  }, [props.data]
  )

  return (

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Url</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {props.data && props.data.map((valor, i) =>
          <tr key={i}>
            <td>{valor.nome}</td>
            <td>
              {valor.data.erro != null ? (
                <h3>{valor.data.erro}</h3>
              ) : (
                <a href={valor.url}>{valor.site}</a>
              )}
            </td>
            <td>{valor.data.valor}</td>
          </tr>
        )}
      </tbody>
    </table>

  );
}

export default Tabela;
