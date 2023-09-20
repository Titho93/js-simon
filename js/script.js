// 1. creare una lista di numeri random
// 2. mostrare in pagina i numeri 
// 3. creare una funzione a tempo (5 secondi)
// 4. creare una lista vuota dove l'utente tramite un prompt inserisce 5 numeri
// 5. metti a confronto le due liste per verificare quanti numeri siano uguali
// 6. mostra il risultato


  let listRandomNumber = [];

  for (let i = 0; i < 5; i++) {
    randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    listRandomNumber.push(randomNumber);
  }
  console.log(randomNumber);
    
  alert(` Ecco i numeri da memorizzare  ${listRandomNumber} `);

  setTimeout(function () {
    let listSendNumber = [];

    for (let i = 0; i < 5; i++) {
     const sendNumber = parseInt(prompt("Inserisci un numero che ricordi"));
      listSendNumber.push(sendNumber);
    }
    console.log(listSendNumber);

  }, 5000);