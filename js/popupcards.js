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

function popup1h(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-1"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>IN YOUR FACE!</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp;</span><i class="bi bi-dice-1"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>3 Danni</strong> al tuo avversario.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup2h(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-2"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>DECIMATE!</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup +1</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp;</span><i class="bi bi-dice-1"></i>&nbsp;<i class="bi bi-dice-3"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>4 Danni</strong> al tuo avversario; <strong>poi</strong>, subisce <strong>2 Ego</strong>.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup3h(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-3"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>BRUTAL STOMP!!</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup +1</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>6 Danni</strong> al tuo avversario.</p><p><strong>Speciale:</strong> Se riveli questo <strong>Comando Attacco</strong> e l&#39;avversario rivela un <strong>Comando Blocco</strong>, solo questo comando viene risolto.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup4h(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-4"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>BERSERK FURY!!!</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>10 Danni</strong> al tuo avversario. Fino alla <strong>fine del prossimo round</strong>, ogni volta che tu o il tuo avversario recuperate <strong>Ego</strong>, la quantità recuperata è <strong>dimezzata</strong> (arrotondata per eccesso).</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup5h(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-5"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>UNBREAKABLE</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">3</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Se il tuo <strong>Dado Velocità</strong> è <strong>uguale</strong> a quello del tuo avversario, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-1"></i></strong>" fino alla fine di questo round.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup6h(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-6"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>DONT RUN AWAY</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">0</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Riduci il tuo <strong>Ego</strong> di <strong>10</strong>. Se il tuo <strong>Dado Velocità</strong> è <strong>più alto</strong> di quello del tuo avversario, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-2"></i></strong>" fino alla fine di questo round.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}


function popup1hr(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-1"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>PIERCING SHOT</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp;</span><i class="bi bi-dice-1"></i>&nbsp;<i class="bi bi-dice-2"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>2 Danni</strong> al tuo avversario.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup2hr(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-2"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>ICE VEIN</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>3 Danni</strong> al tuo avversario; <strong>poi</strong>, se hai risolto questo Comando come <strong>secondo Comando</strong> in una Combo, riduci il tuo <strong>Ego</strong> di <strong>2</strong>.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup3hr(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-3"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>BEAR TRAP</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup +1</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp;</span><i class="bi bi-dice-1"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>4 Danni</strong> al tuo avversario. Durante il prossimo round, se selezioni un <strong>Comando Scatto</strong> e l&#39;avversario seleziona un <strong>Comando Attacco</strong>, solo il tuo <strong>Scatto</strong> verrà risolto.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup4hr(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-4"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>TWIN DRAGONS</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>7 Danni</strong> al tuo avversario; <strong>poi</strong>, infliggi <strong>9 Danni</strong> all&#39avversario se il suo <strong>Ego</strong> è <strong>più alto</strong> del tuo.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup5hr(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-5"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>DEFLECT</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">4</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Se il tuo <strong>Dado Velocità</strong> è <strong>uguale</strong> a quello del tuo avversario, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-3"></i></strong>" fino alla fine di questo round.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup6hr(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-6"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>SUPERSONIC</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">0</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Riduci il tuo Ego di <strong>12</strong>. Se il tuo <strong>Dado Velocità</strong> è <strong>più alto</strong> di quello del tuo avversario di <strong>2 o più punti</strong>, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-2"></i></strong>" fino alla fine di questo round.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}


function popup1mix(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-1"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>CHEETAH CLAW</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp</span><i class="bi bi-dice-1"></i>&nbsp<i class="bi bi-dice-2"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>3 Danni</strong> al tuo avversario.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup2mix(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-2"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>KANGOORO KICK</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp</span><i class="bi bi-dice-2"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>4 Danni</strong> al tuo avversario.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup3mix(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-3"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>WUKONG PUNCH</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>6 Danni</strong> al tuo avversario.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup4mix(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-4"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>DRAGON RUSH</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup+1</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>8 Danni</strong> al tuo avversario.</p><p><strong>Speciale:</strong> Se riveli questo <strong>Comando Attacco</strong> e l&#39avversario rivela un <strong>Comando Blocco</strong>, se il tuo <strong>Dado Velocità</strong> è <strong>più alto</strong> di quello dell&#39avversario, solo questo comando viene risolto.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup5mix(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-5"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>TORTOISHELL</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">4</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Se il tuo <strong>Dado Velocità</strong> è <strong>uguale</strong> a quello del tuo avversario, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-3"></i></strong>" fino alla fine di questo round.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup6mix(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-6"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>BUNNY HOP</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">0</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Riduci il tuo Ego di <strong>10</strong>. Se il tuo <strong>Dado Velocità</strong> è <strong>più alto</strong> di quello del tuo avversario di <strong>2 o più punti</strong>, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-1"></i></strong>" fino alla fine di questo round.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}



function popup1zoner(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-1"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>SHADOW PAWN</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp</span><i class="bi bi-dice-1"></i>&nbsp<i class="bi bi-dice-2"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>2 Danni</strong> al tuo avversario.; <strong>poi</strong>, l&#39avversario subisce <strong>2 Ego</strong>.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup2zoner(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-2"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>DUAL BISHOP</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>3 Danni</strong> al tuo avversario, <strong>e</strong> scegli fra <strong>Blocco</strong> o <strong>Scatto</strong>: durante la prossima <strong>Ego Phase</strong>, se il tuo avversario rivela il Comando scelto, subisce <strong>4 Ego</strong>.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup3zoner(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-3"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>BELOVED QUEEN</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup +1</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>6 Danni</strong> al tuo avversario.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup4zoner(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-4"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>KING OF KINGS</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>6 Danni</strong> al tuo avversario; se il tuo avversario ha rivelato un <strong>Comando Attacco</strong> questo round, infliggi invece <strong>8 Danni</strong>.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup5zoner(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-5"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>IRON ROOK</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">4</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Se il tuo <strong>Dado Velocità</strong> è <strong>uguale</strong> a quello del tuo avversario, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-2"></i></strong>" fino alla fine di questo round.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup6zoner(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-6"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>WINGED KNIGHT</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">0</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp</span><i class="bi bi-dice-3"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Riduci il tuo Ego di <strong>10</strong>.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}



function popup1rush(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-1"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>AMBUSH</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp</span><i class="bi bi-dice-1"></i>&nbsp<i class="bi bi-dice-2"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>3 Danni</strong> al tuo avversario.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup2rush(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-2"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>HIDDEN BLADE</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup +1</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp</span><i class="bi bi-dice-3"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>2 Danni</strong> al tuo avversario. Fino alla fine del prossimo round, ogni volta che una risorsa infligge <strong>Danno</strong> all&#39avversario, quella risorsa infligge <strong>1 Danno Extra.</strong></p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup3rush(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-3"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>THE ECLIPSE</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>5 Danni</strong> al tuo avversario. L&#39avversario non può selezionare <strong>Comandi Scatto</strong> durante la prossima <strong>Setup Phase</strong>.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup4rush(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-4"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>STARBUST STREAM</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">Setup</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Infliggi <strong>8 Danni</strong> al tuo avversario; se il tuo avversario rivela un <strong>Comando Scatto</strong> durante questo round, infliggi invece <strong>10 Danni</strong> al tuo avversario.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup5rush(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-5"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>SHADE</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">4</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo: </span></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Se il tuo <strong>Dado Velocità</strong> è <strong>uguale</strong> a quello del tuo avversario, questo Comando guadagna "<strong>Combo: <i class="bi bi-dice-2"></i></strong>" fino alla fine di questo round.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popup6rush(){
    Swal.fire({
        html: '<div class="boxcard"><div class="flex items-center justify-center"><div class="w-14 h-14 text-4xl"><i class="bi bi-dice-6"></i></div><div class="ml-4"><h2 class="subtitle text-left"><em>STARDUST NIGHT</em></h2><div class="flex items-center mt-2"><span class="font-semibold">Costo:</span><span class="text-red-500 ml-1 semibold">0</span></div><div class="flex items-center mt-1"><span class="font-semibold">Combo:&nbsp</span><i class="bi bi-dice-2"></i></div></div></div><div class="mt-4 items-center justify-center"><p><strong>Effetto:</strong></p><p>Riduci il tuo Ego di <strong>10</strong>.</p></div></div>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}
