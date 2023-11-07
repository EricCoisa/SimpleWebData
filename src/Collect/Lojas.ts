import { Busca } from "../Types/busca";
import { ILoja } from "../Types/lojas";
  
export class Loja implements ILoja {        
            nome;
            identificadorValor;   
            identificadorDetalhes;   
            constructor(_nome: string, _identificadorValor: string, _identificadorDetalhes : string){
                this.nome = _nome;
                this.identificadorValor = _identificadorValor;
                this.identificadorDetalhes = _identificadorDetalhes;
            }
        }
        