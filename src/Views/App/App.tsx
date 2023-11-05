import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Busca } from '../../Types/busca';
import { Collect } from '../../Collect/Collect'
import { GetData } from '../../Container/Buscador'
import Tabela from '../Tabela/Components/Tabela';

function App() {
  const [data, setData] = useState<Busca[] | null>(null)

  useEffect(() => {

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


  }, [])

  return (
    <div className="App">
      {data == null ?
        (
          <h1>Carregando</h1>
        ) :
        (
          <Tabela
            data={data}
          />

        )
      }
    </div>
  );
}

export default App;
