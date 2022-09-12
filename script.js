var data = new Date
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = data.getHours()

    if(hora >= 0 && hora < 12) {
        msg.innerHTML = 'Bom dia!'
        img.src = './images/FotoManha.jpg'
        document.body.style.background = '#ffe26c'
    } else if(hora >= 12 && hora < 18) {
        msg.innerHTML = 'Boa tarde!'
        img.src = './images/FotoTarde.jpg'
        document.body.style.background = '#e35a24'
    } else {
        msg.innerHTML = 'Boa noite!'
        img.src = './images/FotoNoite.jpg'
        document.body.style.background = '#2471A2'
    }
}

function relogio(){
    var data=new Date();
    var hor=data.getHours();
    var min=data.getMinutes();
    var seg=data.getSeconds();
    
    if(hor < 10){
        hor="0"+hor;
    }
    if(min < 10){
        min="0"+min;
    }
    if(seg < 10){
        seg="0"+seg;
    }
    
    var horas=hor + ":" + min + ":" + seg;
    
    document.getElementById("rel").value=horas;
}

var timer=setInterval(relogio,1000);
