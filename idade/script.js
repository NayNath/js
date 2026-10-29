function checar(){
    let sexo = window.document.getElementsByName('sexo');
    let anoInformado = window.document.getElementById('anoNascimento');
    let img = window.document.getElementById('imgIdade')
    let resultado = window.document.getElementById('resultado')
    let containerResultado = window.document.getElementById('containerResultado')
    let corpo = window.document.getElementById('corpo')
    let dataAtul = new Date();
    let anoAtual = dataAtul.getFullYear();
    let anoNascimento = Number(anoInformado.value)
 
 
    let idade = 2026 - anoNascimento;
 
 
    let genero = '';
 
    if(sexo[0].checked){
        genero = 'M';
    }else{
        genero = 'F';
    }
 
    switch(genero){
        case 'M':
        if( idade <=2){
            corpo.style.backgroundImage = "url(../img/fundoBebe.jpg)";
            corpo.style.backgroundRepeat = 'no-repeat';
            corpo.style.backgroundSize = 'cover';
            containerResultado.style.backgroundColor = '#b1e6fa';
            resultado.innerText = "Bebê menino";
            img.src ='../img/bebeMenino.jpg';
        } else if( idade <12){
            corpo.style.backgroundImage = "url(../img/fundoCrianca.jpg)";
            corpo.style.backgroundRepeat = 'no-repeat';
            corpo.style.backgroundSize = 'cover';
            containerResultado.style.backgroundColor = '#78cfef';
            resultado.innerText = "Criança menino";
            img.src ='../img/criancaMenino.jpg';
        } else if( idade <18){
            corpo.style.backgroundImage = "url(../img/fundoAdolescente.jpg)";
            corpo.style.backgroundRepeat = 'no-repeat';
            corpo.style.backgroundSize = 'cover';
            containerResultado.style.backgroundColor = '#40ccff';
            resultado.innerText = "Adolescente menino";
            img.src ='../img/adolescenteMenino.jpg';
        } else if( idade <60){
            corpo.style.backgroundImage = "url(../img/fundoAdulto.jpg)";
            corpo.style.backgroundRepeat = 'no-repeat';
            corpo.style.backgroundSize = 'cover';
            containerResultado.style.backgroundColor = '#083242';
            resultado.innerText = "Homem adulto";
            resultado.style.color = '#fefefe'
            img.src ='../img/homemAdulto.jpg';
        }else {
            corpo.style.backgroundImage = "url(../img/fundoIdoso.jpg)";
            corpo.style.backgroundRepeat = 'no-repeat';
            corpo.style.backgroundSize = 'cover';
            containerResultado.style.backgroundColor = '#011d29';
            resultado.innerText = "Homem idoso";
            resultado.style.color = '#fefefe'
            img.src ='../img/idoso.jpg';
        }
        break;
        case 'F':
        if( idade <=2){
            corpo.style.backgroundImage = "url(../img/fundoBebe.jpg)";
            corpo.style.backgroundRepeat = 'no-repeat';
            corpo.style.backgroundSize = 'cover';
            containerResultado.style.backgroundColor = '#fab1da';
            resultado.innerText = "Bebê menina";
            img.src ='../img/bebeMenina.jpg';
        } else if( idade <12){
            corpo.style.backgroundImage = "url(../img/fundoCrianca.jpg)";
            corpo.style.backgroundRepeat = 'no-repeat';
            corpo.style.backgroundSize = 'cover';
            containerResultado.style.backgroundColor = '#fc6cbe';
            resultado.innerText = "Criança menina";
            img.src ='../img/criancaMenina.jpg';
        } else if( idade <18){
            corpo.style.backgroundImage = "url(../img/fundoAdolescente.jpg)";
            corpo.style.backgroundRepeat = 'no-repeat';
            corpo.style.backgroundSize = 'cover';
            containerResultado.style.backgroundColor = '#f737a4';
            resultado.innerText = "Adolescente menina";
            resultado.style.color = '#fefefe'
            img.src ='../img/adolescenteMenina.jpg';
        } else if( idade <60){
            corpo.style.backgroundImage ="url(../img/fundoAdulto.jpg)";
            corpo.style.backgroundRepeat = 'no-repeat';
            corpo.style.backgroundSize = 'cover';
            containerResultado.style.backgroundColor = '#6d1245';
            resultado.innerText = "Mulher adulta";
            resultado.style.color = '#fefefe'
            img.src ='../img/mulherAdulta.jpg';
        }else {
            corpo.style.backgroundImage ="url(../img/fundoIdoso.jpg)";
            corpo.style.backgroundRepeat = 'no-repeat';
            corpo.style.backgroundSize = 'cover';
            containerResultado.style.backgroundColor = '#48072c';
            resultado.innerText = "Mulher idosa";
            resultado.style.color = '#fefefe'
            img.src ='../img/idosa.jpg';
        }
        break;
    }
}