export const calculoMetroQuadrado = (altura, largura, quantidadeJanelas, quantidadePortas, numeroParede) =>{

    // cada janela ocupa 2,4m2 de area
    // cada porta ocupa 1,52m2 de area
    let areaPortas = parseFloat(quantidadePortas * 1.52);
    let areaJanelas = parseFloat(quantidadeJanelas * 2.4);
    
    altura = parseFloat(altura);
    largura = parseFloat(largura);

    let areaInicial = (parseFloat(altura) * parseFloat(largura));

    let areaObjetosSala = (areaPortas + areaJanelas);

    //descobrir porcentagem em relacao a area da parede (no máximo ser 50% do valor)

    let porcentagemArea = ((areaInicial / 100) * 50); //50% sala
    let porcentagemObjetos = ((areaObjetosSala / 100) * 100); //100% objetos

    let areaFinal = areaInicial - areaObjetosSala;

    let porcentagemUltrapassou = porcentagemObjetos > porcentagemArea;

    let paredeMaiorPorta = true;
    //A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
    
    if(quantidadePortas > 0)
        paredeMaiorPorta = ((parseFloat(altura) - 1.90) >= 0.30)

    let numero = numeroParede;
    const resultado = {
        valorAreaFinal: areaFinal,
        porcentagemObjetosNaParede: porcentagemUltrapassou,
        numeroParede: numero,
        contaAlturaParede: paredeMaiorPorta
    }

    return resultado;
}

export const sugerirQuantidadeLatasTinta = (metragem) =>{

    //cada litro de tinta pinta 5m2
    //QUANTOS LITROS DE TINTA EU PRECISO?

    let litrosNecessarios = (metragem / 5).toPrecision(3);

    const latasUsadas = [];
    //calcular quantas latas de que tipo
    const miniLata = 0.5;
    const lataPequena = 2.5;
    const lataMedia = 3.6;
    const lataGrande = 18;

    localStorage.clear();
    localStorage.setItem("litrosNecessarios", litrosNecessarios);

    while(litrosNecessarios >= 0.5){
        if(litrosNecessarios >= lataGrande){
            litrosNecessarios = litrosNecessarios - lataGrande;
            latasUsadas.push("grande");
        }

        if(litrosNecessarios >= lataMedia){
            litrosNecessarios = litrosNecessarios - lataMedia;
            latasUsadas.push("media");
        }

        if(litrosNecessarios >= lataPequena && litrosNecessarios < 3.5){
            litrosNecessarios = litrosNecessarios - lataPequena;
            latasUsadas.push("pequena");
        }

        if(litrosNecessarios >= miniLata && litrosNecessarios < 2.4){
            litrosNecessarios = litrosNecessarios - miniLata;
            latasUsadas.push("mini");
        }
    }

    while(litrosNecessarios <= 0.5 && litrosNecessarios > 0){
        litrosNecessarios = litrosNecessarios - miniLata;
        latasUsadas.push("mini");
    }
        
    let litrosEntregues = 0;
    for(let i=0;i<latasUsadas.length;i++){
        if(latasUsadas[i]==="mini")
            litrosEntregues = litrosEntregues + miniLata;
        if(latasUsadas[i]==="pequena")
            litrosEntregues = litrosEntregues + lataPequena;
        if(latasUsadas[i]==="media")
            litrosEntregues = litrosEntregues + lataMedia;
        if(latasUsadas[i]==="grande")
            litrosEntregues = litrosEntregues + lataGrande;
    }

    localStorage.setItem("metrosQuadrados", metragem);
    localStorage.setItem("litrosEntregues", litrosEntregues);
    localStorage.setItem("latas", latasUsadas);
}