// 1. Creare una funzione per avviare il gioco
// 2. creare all'interno di essa una lista di numeri random
// 3. mostrare in pagina i numeri 
// 4. creare una funzione a tempo (5 secondi)
// 5. creare una lista vuota dove l'utente tramite un prompt inserisce 5 numeri
// 6. metti a confronto le due liste per verificare quanti numeri siano uguali
// 7. mostra il risultato

startGame ();

function startGame () {
  const randomNumber = [];

  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log(randomNumber)
  }
}