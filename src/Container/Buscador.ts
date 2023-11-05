import { url } from "inspector";
import { Busca } from "../Types/busca"

export async function GetData(busca : Busca) : Promise<Busca>{
    
    
     var html = ""

     try {
        html = await (await fetch(busca.url)).text();

        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var element = doc.getElementsByClassName(busca.data.identificador)


        
        var str = element.item(0)?.innerHTML;
        if(str != null){
        var res = parseInt(str.replace(/\D/g, ""));
        
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2, maximumFractionDigits: 3
        });

        var valor = formatter.format(res);
        busca.data.valor = valor;
        }else{
            busca.data.erro = "Elemento não encontrado";
        }
     } catch (error) {
        
        busca.data.erro = "Falha ao encontrar página";
     }
       
     return busca;

}