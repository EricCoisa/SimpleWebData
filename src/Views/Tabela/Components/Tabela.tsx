import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Busca } from '../../../Types/busca';

interface props {
  data: Busca[]
}


function Tabela(props: props) {

  useEffect(() => {
    if(props.data.length == 0){return}
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
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {props.data && props.data.map((d, i) =>
          <tr key={i}>
            <td style={{background:props.data?.filter((f)=>f.detalhes === d.detalhes && f.valor === d.valor).length == 1 ? "none" : "yellow"}} >{d.nome}</td>
            <td>
              {d.erro != null ? (
                <h3>{d.erro}</h3>
              ) : (
                <a href={d.url}>{d.site.nome}</a>
              )}
            </td>
            <td>{d.valor}</td>
            <td>{d.detalhes}</td>
          </tr>
        )}
      </tbody>
    </table>

  );
}

export default Tabela;
