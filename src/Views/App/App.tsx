import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Busca } from '../../Types/busca';
import { Collect } from '../../Collect/Collect'
import { GetData } from '../../Container/Buscador'
import { Save } from '../../Container/Save'
import Tabela from '../Tabela/Components/Tabela';

function App() {
  const [executa, setExecuta] = useState<boolean>(false)
  const [data, setData] = useState<Busca[]>([])

  useEffect(() => {
    if(executa == false){return}

    async function GetAsync() {
      var result: Busca[] = [];

      for (const busca of Collect) {
        result.push(await GetData(busca))
      }
      if (result != null) {
        setData(result);
      }
    }

    GetAsync();
  }, [executa])

  useEffect(() => {
    setExecuta(true);
  }, [])


  return (
    <div className="App">
      {data.length == 0 ?
        (
          <h1>Carregando</h1>
        ) :
        (
          <>
          <button onClick={()=>Save()}>Baixar</button>
          <Tabela
            data={data}
          />
          </>

        )
      }
    </div>
  );
}

export default App;
