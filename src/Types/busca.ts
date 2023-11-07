import { ILoja } from "./lojas";

export type Busca = {
    site : ILoja,
    nome : string,
    url : string,
    
    detalhes? : string,
    valor? : string
    erro? : string
}