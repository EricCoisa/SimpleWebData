import { url } from "inspector";
import { Busca } from "../Types/busca"

export async function GetData(busca : Busca) : Promise<Busca>{
    
    
     var html = ""

     try {
        html = await (await fetch(busca.url)).text();

        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var elementValor = doc.getElementsByClassName(busca.site.identificadorValor)       
        var elementDetalhes = doc.getElementsByClassName(busca.site.identificadorDetalhes)
        
       

        //const BuscarValor = ()=>{
            var strValor = elementValor.item(0)?.innerHTML;
            if(strValor != null){
            var res = parseInt(strValor.replace(/\D/g, ""));
            
            const formatter = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2, maximumFractionDigits: 3
            });
    
            var valor = formatter.format(res);
            busca.valor = valor;
       // }

       // const BuscarDetalhes = ()=>{

            var strDetalhe = elementDetalhes.item(0)?.innerHTML;
            if(strDetalhe != null){
                busca.detalhes = strDetalhe;
            }else{
                busca.detalhes = "Falha ao carregar detalhes"
            }

        //}

        }else{
            busca.erro = "Elemento não encontrado";
        }
     } catch (error) {
        
        busca.erro = "Falha ao encontrar página";
     }
       
     return busca;

}