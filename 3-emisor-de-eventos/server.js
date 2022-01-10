const emisor = require('events').EventEmitter;

var e = new emisor();

e
    .on('eventoA',receptoraEventosA)
    .once('eventoA',receptoraOnceEventosA);

function receptoraEventosA (e){
    console.log('-> Respondiendo a la emision de un evento del tipo "A" <-');
    console.log('\t Reciviendo el evento A con el msg:',e)
}
function receptoraOnceEventosA(e){
    console.log('-> Respondiendo ONCE ONLY a la emision de un evento del tipo "A" <-');
}

e.emit('eventoA','-->Emitiendo un evento de tipo "A" 1º vez<--');
e.emit('eventoA','-->Emitiendo un evento de tipo "A" 2º vez<--');
e.emit('eventoA','-->Emitiendo un evento de tipo "A" 3º vez<--');