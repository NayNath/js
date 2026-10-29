function carregar(){
    let data = new Date();
    //let hora = data.getHours();
    let minutos = data.getMinutes();

    //hora = 10;
    //hora = 18;
    hora = 1;

    /*let periodo = window.doucument.getElementById('periodo');
    let horas = window.doucument.getElementById('horas');
    let corpo = window.doucument.getElementById('corpo');*/

    if(hora>0 && hora<5){
        corpo.style.backgroundColor = '#001221';
        periodo.innerText = "Boa madrugada!";
        horas.innerText = `São ${hora} horas e ${minutos} minutos`; 
        img.src ='img/madrugada.jpg'
    }
    else if(hora<12){
        corpo.style.backgroundColor = '#B3DBFF';
        periodo.innerText = "Bom dia!";
        horas.innerText = `São ${hora} horas e ${minutos} minutos`; 
        img.src ='img/manha.jpg'
    }
    else if(hora<18){
        corpo.style.backgroundColor = '#4b7192';
        periodo.innerText = "Boa tarde!";
        horas.innerText = `São ${hora} horas e ${minutos} minutos`; 
        img.src ='img/tarde.jpg'
    }else{
        corpo.style.backgroundColor = '#1b3e5c';
        periodo.innerText = "Boa noite!";
        horas.innerText = `São ${hora} horas e ${minutos} minutos`; 
        img.src ='img/noite.jpg'
    }
}