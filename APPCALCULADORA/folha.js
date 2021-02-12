function calcular(tipo, valor){
    /* criamos uma estrutura para if else para verificar o tipo (acao ou valor)*/ 
    if(tipo === 'acao'){
       if('acao' === 'c'){
        //Limpar o visor
       document.getElementById("resultado").value = ''
        }
    }else if(tipo === 'valor'){
        document.getElementById('resultado').value +=  valor 
    }
}