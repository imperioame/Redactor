/*
    hay que traer de la db las posibles consignas y cargarlas en un array
*/

var consignas = [];
consignas[0] = 'consigna 1';
consignas[1] = 'consigna 2';
consignas[2] = 'consigna 3';


$("#nav_inicio").on('click', function(){
    $('#ultimos, #historico').addClass('hidden');
    $('#inicio').removeClass('hidden');
});

$("#nav_ultimos").on('click', function(){
    $('#inicio, #historico').addClass('hidden');
    $('#ultimos').removeClass('hidden');
});

$("#nav_historico").on('click', function(){
    $('#ultimos, #inicio').addClass('hidden');
    $('#historico').removeClass('hidden');
});


$('#form_boton_comenzar').submit(function(e){
    e.preventDefault();
    $('#escritura_cuento').removeClass('hidden');
    $('#intro').addClass('hidden');

    empezar_contador();
    sortear_consignas();
});

$('#form_cuento').submit(function(e){
    e.preventDefault();
    $('#escritura_cuento').addClass('hidden');
    $('#intro').removeClass('hidden');
    $('#inicio').addClass('hidden');
    $('#ultimos').removeClass('hidden');

    clearInterval(contador_principal_cuento);
});



function sortear_consignas(){

    for(i=0; i < 3; i++){

        var valor1 = Math.floor(Math.random()*3);
        $('#primera_consigna').text(consignas[valor1]);

        var valor2;
        var valor3;
        
        do{
            valor2 = Math.floor(Math.random()*3);    
        }while(valor2 == valor1);
        $('#segunda_consigna').text(consignas[valor2]);

        do{
            valor3 = Math.floor(Math.random()*3);    
        }while((valor3 == valor1) || (valor3 == valor2));
        $('#tercera_consigna').text(consignas[valor3]);
        
    };

}


function empezar_contador(){
    
    var minutos = 29;
    var segundos = 60;

    var contador_principal_cuento = setInterval(function () {
        --segundos;
        if(segundos == 0){
            if(minutos != 0){
                --minutos;
                segundos = 60;
            }else{
                clearInterval(contador_principal_cuento);
            }
        }

    
        $('#contador').text(minutos + ":" + segundos);

    }, 1000);

}