const iconMenu = document.getElementById('mobile');
const MobileMenu = document.getElementById('MobileMenu')



iconMenu.addEventListener('click', () => {
    console.log('teste')
    if(MobileMenu.classList.contains('MobileAtc')){
        MobileMenu.classList.remove('MobileAtc');
    }else{
        MobileMenu.classList.add('MobileAtc');
    }
})

// FUNÇÃO PARA MUDANÇA DE TELA EM CONTATO

// JS DO CONTATO

const changeIcon = document.getElementsByClassName('changeView')[0].children;
const contEsquerda = document.getElementsByClassName('cont_esquerda')[0]
const Aba = document.getElementsByClassName('AbaLateral')[0]
const contDireita = document.getElementsByClassName('cont_direita')[0]

const ContatoView = () => {
    changeIcon[0].style.display = 'block';
    changeIcon[1].style.display = 'none';  
    contEsquerda.classList.add('esquerdaAtiva');
    Aba.classList.add('AbaAtiva')
    contDireita.classList.add('offdireita')

}

const FormView = () => {
    changeIcon[0].style.display = 'none';
    changeIcon[1].style.display = 'block'; 
    
    contEsquerda.classList.remove('esquerdaAtiva');
    Aba.classList.remove('AbaAtiva');
    contDireita.classList.remove('offdireita');
}

for(let i=0; i < changeIcon.length; i++){
    changeIcon[i].addEventListener('click', () => {
        switch(i){
            case 1:
            ContatoView();
            break;

            case 0:
            FormView();
            break;
        }
    })
}


// FUNÇÃO PARA O MAPS

var map;

function initialize(){
    var mapPro = {
        center: new google.maps.LatLng(-3.119721, -59.983044),
        scrollWheel:false,
        zoom:20,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById("map"),mapPro);
}	 

function addmarker(lat,lng,icon,content){
    var LatLng = {'lat':lat,'lng':lng}

    var marker = new google.maps.Marker({
        position:LatLng,
        map:map,
        icon:icon	
    });

     var infoWindow =new google.maps.InfoWindow({
         content:content,
         maxWidth:200,
         pixelOFFset: new google.maps.Size(0,20)
     });

     google.maps.event.addListener(marker,'click',function(){
         infoWindow.open(map,marker);
     });

 // infoWindow.open(map,marker);

}

initialize();

var conteudo = '<p style="color:black;font-size:12px;padding:4px 0;">Meu endereço<p>'
addmarker(-3.119721,-59.983044,'',conteudo);

 map.panTo({'lat':-3.119028,'lng':-60.021732});

 setTimeout(function(){
     map.panTo({'lat':-3.109540, 'lng':-59.980500})
     map.setZoom(12)
 },3000)



// gasto com alunos por ano ...

// const Pop = 212600000;
// const percentPop = 1.5;
// const total18 = Pop * percentPop / 100;

// // 3.189.000
// // 15.945.000.000

// console.log(total18)
// console.log(total18 * 5000)


