function popup1bp(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-1"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>ENCHANTING STRIKE</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp</span><i class="bi bi-dice-1"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>2 Danni</strong> al tuo avversario; <strong>poi</strong>, il tuo avversario subisce <strong>1 Ego</strong>.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup2bp(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-2"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>CANDY TREAT</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>3 Danni</strong> al tuo avversario; <strong>poi</strong>, se il tuo avversario ha rivelato un <strong>Comando Attacco</strong> durante questo round, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-4"></i></strong>" fino alla fine di questo round.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup3bp(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-3"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>METEOR BLAST</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp</span><i class="bi bi-dice-1"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>5 Danni</strong> al tuo avversario.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup4bp(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-4"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>STAR SHOWER</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup +1</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>3 Danni</strong> al tuo avversario; <strong>poi</strong>, infliggi <strong>4 Danni</strong> al tuo avversario; <strong>poi</strong>, se hai risolto questo Comando come <strong>terzo Comando</strong> in una Combo, infliggi <strong>5 Danni</strong> al tuo avversario.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup5bp(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-5"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>TRICK</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">4</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp</span><i class="bi bi-dice-1"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Se il tuo <strong>Dado Velocità</strong> è <strong>più alto</strong> di quello del tuo avversario, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-2"></i></strong>" fino alla fine di questo round.</p></div></div>        ',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup6bp(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-6"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>ETHEREAL SHIFT</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">0</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Riduci il tuo <strong>Ego</strong> di <strong>10</strong>. Se il tuo <strong>Dado Velocità</strong> è <strong>più alto</strong> di quello del tuo avversario, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-1"></i></strong>" fino alla fine di questo round.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}
