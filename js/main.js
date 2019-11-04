//Il computer deve generare 16 numeri casuali da 1 a 100.
//In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
//se il numero è presente nella lista dei numeri generati, la partita termina,
//altrimenti continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
//i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
//l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

    // generare num casuale
    var minesArray = [];
    var randomNumb;

    // altre variabili
    var dead = false;
    var numberPlayer = [];
    var player;
    var scores = 0;

    // funzione
    function getRandomInt(min,max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // ciclo per generare numeri nell'array
    while (minesArray.length < 16) {
      randomNumb = getRandomInt(1, 101);
      if (minesArray.includes(randomNumb) == false) {
        minesArray.push(randomNumb);
      }
      console.log(randomNumb);
    }
    console.log('Dead number: ' + minesArray);

    // ciclo per generare numeri salvavita
    while (dead == false && scores < 84) {
      console.log('Numero scelto: ' + player);
      player = parseInt(prompt('Scegli un numero da 1 a 100.'));
      if (player > 0 && player < 101 && !isNaN(player)) {
        if (numberPlayer.includes(player) == true) {
          alert('Errore! Numero già inserito.');
        } else if (minesArray.includes(player) == true) {
          alert('Mina anti-uomo! Sei morto!');
          dead = true;
          numberPlayer.push(player);
        } else {
          alert('Sei ancora vivo!');
          numberPlayer.push(player);
          scores++;
        }
      }else {
        alert('Il valore inserito è errato. Riprova.');
      }
    }
    console.log('Numeri scelti: ' + player);

    // condizioni di morte
    if (dead == true) {
      console.log('Punteggio: ' + scores + 'punti');
      console.log('Numero della morte: ' + (numberPlayer.slice(-1)[0]));
    }else {
      console.log('Sei sopravvissuto al campo minato...Hai vinto la guerra!');
    }
