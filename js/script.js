$(document).ready(function() {

    // get the div element and append a table to it
    $('#TBL').append('<div>');


    // get the children of the table, rows (tr) and columns (td)
    var table = $('#TBL').children();


    // verbs and results
    var presente = [ { name : 'HABLAR', answers : ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan']}, 
              { name : 'BEBER', answers : ['bebo', 'bebes', 'bebe', 'bebemos', 'bebéis', 'beben']},
              { name : 'VIVIR', answers : ['vivo', 'vives', 'vive', 'vivimos', 'vivís', 'viven']},
              { name : 'SER', answers : ['soy', 'eres', 'es', 'somos', 'sois', 'son']},
              { name : 'ESTAR', answers : ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están']},
              { name : 'TENER', answers : ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen']},
              { name : 'QUERER', answers : ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren']},
              { name : 'PODER', answers : ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden']},
              { name : 'IR', answers : ['voy', 'vas', 'va', 'vamos', 'vais', 'van']},
];

    var progresivo = [ { name : 'HABLAR', answers : ['estoy hablando', 'estás hablando', 'está hablando', 'estamos hablando', 'estáis hablando', 'están hablando']}, 
              { name : 'BEBER', answers : ['estoy bebiendo', 'estás bebiendo', 'está bebiendo', 'estamos bebiendo', 'estáis bebiendo', 'están bebiendo']},
              { name : 'VIVIR', answers : ['estoy viviendo', 'estás viviendo', 'está viviendo', 'estamos viviendo', 'estáis viviendo', 'están viviendo']},
              { name : 'SER', answers : ['estoy siendo', 'estás siendo', 'está siendo', 'estamos siendo', 'estáis siendo', 'están siendo']},
              { name : 'TENER', answers : ['estoy teniendo', 'estás teniendo', 'está teniendo', 'estamos teniendo', 'estáis teniendo', 'están teniendo']},
              { name : 'QUERER', answers : ['estoy queriendo', 'estás queriendo', 'está queriendo', 'estamos queriendo', 'estáis queriendo', 'están queriendo']},
              { name : 'PODER', answers : ['estoy podiendo', 'estás podiendo', 'está podiendo', 'estamos podiendo', 'estáis podiendo', 'están podiendo']},
              { name : 'IR', answers : ['estoy yendo', 'estás yendo', 'está yendo', 'estamos yendo', 'estáis yendo', 'están yendo']},
];

    var futuro = [ { name : 'HABLAR', answers : ['voy a hablar', 'vas a hablar', 'va a hablar', 'vamos a hablar', 'vais a hablar', 'van a hablar']}, 
              { name : 'BEBER', answers : ['voy a beber', 'vas a beber', 'va a beber', 'vamos a beber', 'vais a beber', 'van a beber']},
              { name : 'VIVIR', answers : ['voy a vivir', 'vas a vivir', 'va a vivir', 'vamos a vivir', 'vais a vivir', 'van a vivir']},
              { name : 'SER', answers : ['voy a ser', 'vas a ser', 'va a ser', 'vamos a ser', 'vais a ser', 'van a ser']},
              { name : 'ESTAR', answers : ['voy a estar', 'vas a estar', 'va a estar', 'vamos a estar', 'vais a estar', 'van a estar']},
              { name : 'TENER', answers : ['voy a tener', 'vas a tener', 'va a tener', 'vamos a tener', 'vais a tener', 'van a tener']},
              { name : 'QUERER', answers : ['voy a querer', 'vas a querer', 'va a querer', 'vamos a querer', 'vais a querer', 'van a querer']},
              { name : 'PODER', answers : ['voy a poder', 'vas a poder', 'va a poder', 'vamos a poder', 'vais a poder', 'van a poder']},
              { name : 'IR', answers : ['voy a ir', 'vas a ir', 'va a ir', 'vamos a ir', 'vais a ir', 'van a ir']},
];

    var perfecto = [ { name : 'HABLAR', answers : ['he hablado', 'has hablado', 'ha hablado', 'hemos hablado', 'habéis hablado', 'han hablado']}, 
              { name : 'BEBER', answers : ['he bebido', 'has bebido', 'ha bebido', 'hemos bebido', 'habéis bebido', 'han bebido']},
              { name : 'VIVIR', answers : ['he vivido', 'has vivido', 'ha vivido', 'hemos vivido', 'habéis vivido', 'han vivido']},
              { name : 'SER', answers : ['he sido', 'has sido', 'ha sido', 'hemos sido', 'habéis sido', 'han sido']},
              { name : 'ESTAR', answers : ['he estado', 'has estado', 'ha estado', 'hemos estado', 'habéis estado', 'han estado']},
              { name : 'TENER', answers : ['he tenido', 'has tenido', 'ha tenido', 'hemos tenido', 'habéis tenido', 'han tenido']},
              { name : 'QUERER', answers : ['he querido', 'has querido', 'ha querido', 'hemos querido', 'habéis querido', 'han querido']},
              { name : 'PODER', answers : ['he podido', 'has podido', 'ha podido', 'hemos podido', 'habéis podido', 'han podido']},
              { name : 'IR', answers : ['he ido', 'has ido', 'ha ido', 'hemos ido', 'habéis ido', 'han ido']},
];

    var indefinido = [ { name : 'HABLAR', answers : ['hablé', 'hablaste', 'habló', 'hablamos', 'hablasteis', 'hablaron']}, 
              { name : 'BEBER', answers : ['bebí', 'bebiste', 'bebió', 'bebimos', 'bebisteis', 'bebieron']},
              { name : 'VIVIR', answers : ['viví', 'viviste', 'vivió', 'vivimos', 'vivisteis', 'vivieron']},
              { name : 'SER', answers : ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron']},
              { name : 'ESTAR', answers : ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron']},
              { name : 'TENER', answers : ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron']},
              { name : 'QUERER', answers : ['quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron']},
              { name : 'PODER', answers : ['pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'pudieron']},
              { name : 'IR', answers : ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron']},
    ];

    var imperfecto = [ { name : 'HABLAR', answers : ['hablaba', 'hablabas', 'hablaba', 'hablábamos', 'hablabais', 'hablaban']}, 
              { name : 'BEBER', answers : ['bebía', 'bebías', 'bebía', 'bebíamos', 'bebíais', 'bebían']},
              { name : 'VIVIR', answers : ['vivía', 'vivías', 'vivía', 'vivíamos', 'vivíais', 'vivían']},
              { name : 'SER', answers : ['era', 'eras', 'era', 'éramos', 'erais', 'eran']},
              { name : 'ESTAR', answers : ['estaba', 'estabas', 'estaba', 'estábamos', 'estabais', 'estaban']},
              { name : 'TENER', answers : ['tenía', 'tenías', 'tenía', 'teníamos', 'teníais', 'tenían']},
              { name : 'QUERER', answers : ['quería', 'querías', 'quería', 'queríamos', 'queríais', 'querían']},
              { name : 'PODER', answers : ['podía', 'podías', 'podía', 'podíamos', 'podíais', 'podían']},
              { name : 'IR', answers : ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban']},
    ];

    // show verbs in table
    $.each(presente, function(){
        $(table).append(`<table class="presente"><th class='center tijd'> Presente </th><th class='center werkwoordnaam'>${this.name}</th><th class='center'> </th>
        <tr> <td></td><td> </td> <td><strong>CORRECTE VERVOEGING</strong></td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[0]}</td></tr>
        <tr><td class='right'>tú</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[1]}</td></tr>
        <tr><td class='right'>él/ella/usted</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[2]}</td></tr>
        <tr><td class='right'>nosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[3]}</td></tr>
        <tr><td class='right'>vosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[4]}</td></tr>
        <tr><td class='right'>ellos/ellas/ustedes</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[5]}</td></tr>`
        );
});

    $.each(progresivo, function(){
        $(table).append(`<table class="progresivo"><th class='center tijd'> Progresivo </th><th class='center werkwoordnaam'>${this.name}</th><th class='center'> </th>
        <tr> <td></td><td> </td> <td><strong>CORRECTE VERVOEGING</strong></td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[0]}</td></tr>
        <tr><td class='right'>tú</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[1]}</td></tr>
        <tr><td class='right'>él/ella/usted</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[2]}</td></tr>
        <tr><td class='right'>nosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[3]}</td></tr>
        <tr><td class='right'>vosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[4]}</td></tr>
        <tr><td class='right'>ellos/ellas/ustedes</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[5]}</td></tr>`
        );
});

    $.each(futuro, function(){
        $(table).append(`<table class="futuro"><th class='center tijd'> Futuro </th><th class='center werkwoordnaam'>${this.name}</th><th class='center'> </th>
        <tr> <td></td><td> </td> <td><strong>CORRECTE VERVOEGING</strong></td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[0]}</td></tr>
        <tr><td class='right'>tú</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[1]}</td></tr>
        <tr><td class='right'>él/ella/usted</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[2]}</td></tr>
        <tr><td class='right'>nosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[3]}</td></tr>
        <tr><td class='right'>vosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[4]}</td></tr>
        <tr><td class='right'>ellos/ellas/ustedes</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[5]}</td></tr>`
        );
});

    $.each(perfecto, function(){
        $(table).append(`<table class="perfecto"><th class='center tijd'> Perfecto </th><th class='center werkwoordnaam'>${this.name}</th><th class='center'> </th>
        <tr> <td></td><td> </td> <td><strong>CORRECTE VERVOEGING</strong></td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[0]}</td></tr>
        <tr><td class='right'>tú</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[1]}</td></tr>
        <tr><td class='right'>él/ella/usted</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[2]}</td></tr>
        <tr><td class='right'>nosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[3]}</td></tr>
        <tr><td class='right'>vosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[4]}</td></tr>
        <tr><td class='right'>ellos/ellas/ustedes</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[5]}</td></tr>`
        );
});

    $.each(indefinido, function(){
        $(table).append(`<table class="indefinido"><th class='center tijd'> Indefinido </th><th class='center werkwoordnaam'>${this.name}</th><th class='center'> </th>
        <tr> <td></td><td> </td> <td><strong>CORRECTE VERVOEGING</strong></td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[0]}</td></tr>
        <tr><td class='right'>tú</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[1]}</td></tr>
        <tr><td class='right'>él/ella/usted</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[2]}</td></tr>
        <tr><td class='right'>nosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[3]}</td></tr>
        <tr><td class='right'>vosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[4]}</td></tr>
        <tr><td class='right'>ellos/ellas/ustedes</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[5]}</td></tr>`
        );
});

    $.each(imperfecto, function(){
        $(table).append(`<table class="imperfecto"><th class='center tijd'> Imperfecto </th><th class='center werkwoordnaam'>${this.name}</th><th class='center'> </th>
        <tr> <td></td><td> </td> <td><strong>CORRECTE VERVOEGING</strong></td></tr>
        <tr><td class='right'>yo</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[0]}</td></tr>
        <tr><td class='right'>tú</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[1]}</td></tr>
        <tr><td class='right'>él/ella/usted</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[2]}</td></tr>
        <tr><td class='right'>nosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[3]}</td></tr>
        <tr><td class='right'>vosotros/-as</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[4]}</td></tr>
        <tr><td class='right'>ellos/ellas/ustedes</td><td><input type='text' class='conjugate thought' size='15'></td><td class='correct'>${this.answers[5]}</td></tr>`
        );
});

//     // add an unique ID to every time selector, so that user can select the time he/she wants to conjugate in
//     $(".time").each(function(i) {
//     var row = $(this)
//     row.attr('id', 'time' + i);
// });

    // add an unique ID to every table, so that user can select the verb he/she wants to conjugate
    $(".presente").each(function(i) {
    var row = $(this)
    row.attr('id', 'presente' + i);
});

    $(".progresivo").each(function(i) {
    var row = $(this)
    row.attr('id', 'progresivo' + i);
});

    $(".futuro").each(function(i) {
    var row = $(this)
    row.attr('id', 'futuro' + i);
});

    $(".perfecto").each(function(i) {
    var row = $(this)
    row.attr('id', 'perfecto' + i);
});

    $(".indefinido").each(function(i) { 
    var row = $(this)
    row.attr('id', 'indefinido' + i);
});

    $(".imperfecto").each(function(i) { 
    var row = $(this)
    row.attr('id', 'imperfecto' + i);
});

// select a grammatical time and hide the others. 
    $(function() {
        $('#timeselector').change(function(){
            $('.time').hide();
            $('#' + $(this).val()).show();
        });
});

// select a verb and hide the others. 
    $(function() {
        $('#time0').change(function(){
            $('.presente').hide();
            $('.progresivo').hide();
            $('.futuro').hide();
            $('.perfecto').hide();
            $('.indefinido').hide();
            $('.imperfecto').hide();
            $('#' + $(this).val()).show();
        });
});

    $(function() {
        $('#time1').change(function(){
            $('.presente').hide();
            $('.progresivo').hide();
            $('.futuro').hide();
            $('.perfecto').hide();
            $('.indefinido').hide();
            $('.imperfecto').hide();
            $('#' + $(this).val()).show();
        });
});


    $(function() {
        $('#time2').change(function(){
            $('.presente').hide();
            $('.progresivo').hide();
            $('.futuro').hide();
            $('.perfecto').hide();
            $('.indefinido').hide();
            $('.imperfecto').hide();
            $('#' + $(this).val()).show();
        });
});

    $(function() {
        $('#time3').change(function(){
            $('.presente').hide();
            $('.progresivo').hide();
            $('.futuro').hide();
            $('.perfecto').hide();
            $('.indefinido').hide();
            $('.imperfecto').hide();
            $('#' + $(this).val()).show();
        });
});

    $(function() {
        $('#time4').change(function(){
            $('.presente').hide();
            $('.progresivo').hide();
            $('.futuro').hide();
            $('.perfecto').hide();
            $('.indefinido').hide();
            $('.imperfecto').hide();
            $('#' + $(this).val()).show();
        });
});

    $(function() {
        $('#time5').change(function(){
            $('.presente').hide();
            $('.progresivo').hide();
            $('.futuro').hide();
            $('.perfecto').hide();
            $('.indefinido').hide();
            $('.imperfecto').hide();
            $('#' + $(this).val()).show();
        });
});


var answersVerbs = ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan',
                    'bebo', 'bebes', 'bebe', 'bebemos', 'bebéis', 'beben',
                    'vivo', 'vives', 'vive', 'vivimos', 'vivís', 'viven',
                    'soy', 'eres', 'es', 'somos', 'sois', 'son', 
                    'estoy', 'estás', 'está', 'estamos', 'estáis', 'están',
                    'tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen',
                    'quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren',
                    'puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden',
                    'voy', 'vas', 'va', 'vamos', 'vais', 'van',
                    'estoy hablando', 'estás hablando', 'está hablando', 'estamos hablando', 'estáis hablando', 'están hablando',
                    'estoy bebiendo', 'estás bebiendo', 'está bebiendo', 'estamos bebiendo', 'estáis bebiendo', 'están bebiendo',
                    'estoy viviendo', 'estás viviendo', 'está viviendo', 'estamos viviendo', 'estáis viviendo', 'están viviendo',
                    'estoy siendo', 'estás siendo', 'está siendo', 'estamos siendo', 'estáis siendo', 'están siendo', 
                    'estoy teniendo', 'estás teniendo', 'está teniendo', 'estamos teniendo', 'estáis teniendo', 'están teniendo',
                    'estoy queriendo', 'estás queriendo', 'está queriendo', 'estamos queriendo', 'estáis queriendo', 'están queriendo',
                    'estoy podiendo', 'estás podiendo', 'está podiendo', 'estamos podiendo', 'estáis podiendo', 'están podiendo',
                    'estoy yendo', 'estás yendo', 'está yendo', 'estamos yendo', 'estáis yendo', 'están yendo',
                    'voy a hablar', 'vas a hablar', 'va a hablar', 'vamos a hablar', 'vais a hablar', 'van a hablar',
                    'voy a beber', 'vas a beber', 'va a beber', 'vamos a beber', 'vais a beber', 'van a beber',
                    'voy a vivir', 'vas a vivir', 'va a vivir', 'vamos a vivir', 'vais a vivir', 'van a vivir',
                    'voy a ser', 'vas a ser', 'va a ser', 'vamos a ser', 'vais a ser', 'van a ser', 
                    'voy a estar', 'vas a estar', 'va a estar', 'vamos a estar', 'vais a estar', 'van a estar',
                    'voy a tener', 'vas a tener', 'va a tener', 'vamos a tener', 'vais a tener', 'van a tener',
                    'voy a querer', 'vas a querer', 'va a querer', 'vamos a querer', 'vais a querer', 'van a querer',
                    'voy a poder', 'vas a poder', 'va a poder', 'vamos a poder', 'vais a poder', 'van a poder',
                    'voy a ir', 'vas a ir', 'va a ir', 'vamos a ir', 'vais a ir', 'van a ir',
                    'he hablado', 'has hablado', 'ha hablado', 'hemos hablado', 'habéis hablado', 'han hablado',
                    'he bebido', 'has bebido', 'ha bebido', 'hemos bebido', 'habéis bebido', 'han bebido',
                    'he vivido', 'has vivido', 'ha vivido', 'hemos vivido', 'habéis vivido', 'han vivido',
                    'he sido', 'has sido', 'ha sido', 'hemos sido', 'habéis sido', 'han sido', 
                    'he estado', 'has estado', 'ha estado', 'hemos estado', 'habéis estado', 'han estado',
                    'he tenido', 'has tenido', 'ha tenido', 'hemos tenido', 'habéis tenido', 'han tenido',
                    'he querido', 'has querido', 'ha querido', 'hemos querido', 'habéis querido', 'han querido',
                    'he podido', 'has podido', 'ha podido', 'hemos podido', 'habéis podido', 'han podido',
                    'he ido', 'has ido', 'ha ido', 'hemos ido', 'habéis ido', 'han ido',
                    'hablé', 'hablaste', 'habló', 'hablamos', 'hablasteis', 'hablaron',
                    'bebí', 'bebiste', 'bebió', 'bebimos', 'bebisteis', 'bebieron',
                    'viví', 'viviste', 'vivió', 'vivimos', 'vivisteis', 'vivieron',
                    'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron', 
                    'estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron',
                    'tuve', 'tuvimos', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron',
                    'quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron',
                    'pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'puedieron',
                    'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron',
                    'hablaba', 'hablabas', 'hablaba', 'hablábamos', 'hablabais', 'hablaban',
                    'bebía', 'bebías', 'bebía', 'bebíamos', 'bebíais', 'bebían',
                    'vivía', 'vivías', 'vivía', 'vivíamos', 'vivíais', 'vivían',
                    'era', 'eras', 'era', 'éramos', 'erais', 'eran', 
                    'estaba', 'estabas', 'estaba', 'estábamos', 'estabais', 'estaban',
                    'tenía', 'tenías', 'tenía', 'teníamos', 'teníais', 'tenían',
                    'quería', 'querías', 'quería', 'queríamos', 'queríais', 'querían',
                    'podía', 'podías', 'podía', 'podíamos', 'podíais', 'podían',
                    'iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban',
                    ];


// Refer to Button "Check" and start Checking the answers. 
var checkButton = document.querySelector('.check');
checkButton.addEventListener('click', checkAnswers);

// the answers of the user
var conjugations = document.querySelectorAll('.conjugate'); 

// the correct answers
var correct = document.querySelectorAll('.correct'); 

// function checkAnswers () {
//     $.each(presente, function(index, array) { // This each iterates over the arrays.
//     $.each(array, function(subindex, value) { // This each iterates over the individual values.
//         // console.log(value); // Logs the individual values.

//         for (i = 0; i < value.length; i++) 
//         { if (conjugations[i].value == "")  {
//             console.log('niets ingevuld')
//         }
//         else if (conjugations[i].value.trim().toLowerCase() == value[i]) {
//             console.log('good')
//             conjugations[i].style.color = 'green'
//             correct[i].style.display = 'block';
//             correct[i].style.color = 'green';
//         }
//         else {
//             console.log('bad')        
//             conjugations[i].style.color = 'red'
//             correct[i].style.display = 'block';
//             correct[i].style.color = 'red';        
//         }
//     }
//   });
//   });
// };


function checkAnswers () {
    for (i = 0; i < answersVerbs.length; i++) 
    { if (conjugations[i].value == "")  {
        console.log('niets ingevuld')
    }
    else if (conjugations[i].value.trim().toLowerCase() == answersVerbs[i]) {
        console.log('good')
        conjugations[i].style.color = 'green'
        correct[i].style.display = 'block';
        correct[i].style.color = 'green';
    }
    else {
        console.log('bad')        
        conjugations[i].style.color = 'red'
        correct[i].style.display = 'block';
        correct[i].style.color = 'red';        
    }
}
}


/* Invuloefening ------------------------------------------------------------------------------------------------------*/ 

var submitButton = document.querySelector('#submit');	
var questions = document.querySelectorAll('.question');
var correctAnswer = document.querySelectorAll('.correct-answer');
var good = document.querySelectorAll('.good');
var wrong = document.querySelectorAll('.wrong');
var score = 0;

var answers = [ 'está', 'está', 'es', 'está', 'es', 'están', 
                'está', 'son', 'estamos', 'está', 'es', 'está', 
                'son', 'está', 'son', 'es', 'está', 'es', 'es', 
                'es', 'son', 'están']

submitButton.addEventListener('click', answerObject); 

function answerObject () {
    for (i = 0; i < answers.length; i++)
    {   if (questions[i].value == "") {
        noAnswer()
        }
        else if (questions[i].value.trim().toLowerCase() == answers[i]) {
            good[i].style.display = 'block';
            correctAnswer[i].style.display = 'block';
            correctAnswer[i].style.color = 'green';

            showScore();
        }
        else {
        wrong[i].style.display = 'block';
        correctAnswer[i].style.display = 'block';
        correctAnswer[i].style.color = 'red';
        }
    }
}
answerObject();

function noAnswer() {
    good[i].style.display = 'none';
    wrong[i].style.display = 'none';    
    correctAnswer[i].style.display = 'none';
}


function showScore() {
    score ++;
    document.getElementById('show-score').value = score
}


var input_position = 0, last_input = false;
// if the input[type="text"] or input has a keyup or mouseup event then run this
$('input[type="text"], input').on('keyup mouseup', function () {
    last_input = $(this);
    // gets the last input's position
    if('selectionStart' in this) {
        input_position = this.selectionStart;
    } else if('selection' in document) {
        this.focus();
        var Sel = document.selection.createRange();
        var SelLength = document.selection.createRange().text.length;
        Sel.moveStart('character', -this.value.length);
        input_position = Sel.text.length - SelLength;
    }
});

$('button.insert-character').click(function () {
    if(!last_input) return; // if an input wasn't selected don't run
    var last_input_value = last_input.val(); // value of input
    var word_to_insert = this.value; // value of button
    // split the last input's value then insert the word    
    last_input.val([
        last_input_value.slice(0, input_position),
        word_to_insert,
        last_input_value.slice(input_position)
    ].join(''));
    
});
});


// function insertE () {
//     console.log('é')
// }
// insertE();


// var weirdE1 = document.querySelector('.weird-e-1');
// weirdE1.addEventListener('click', insertE1);
// var weirdE2 = document.querySelector('.weird-e-2');
// weirdE2.addEventListener('click', insertE2);
// var weirdN1 = document.querySelector('.weird-n-1');
// weirdN1.addEventListener('click', insertN1);
// var weirdN2 = document.querySelector('.weird-n-2');
// weirdN2.addEventListener('click', insertN2);

// function insertE1() {    
//     var text = document.querySelector('#question1');
//     text.value += 'é';
// }

// function insertE2() {    
//     var text = document.querySelector('#question2');
//     text.value += 'é';
// }

// function insertN1() {    
//     var text = document.querySelector('#question1');
//     text.value += 'ñ';
// }

// function insertN2() {    
//     var text = document.querySelector('#question2');
//     text.value += 'ñ';
// }