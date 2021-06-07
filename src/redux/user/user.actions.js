// questa è solo una funzione che ritorna un oggetto
// l'unica cosa a cui stare attenti è che l'oggetto deve essere definito
// nel modo corretto per cui l'azione redux si aspetta essere : state e payload
// user è l'argomento della function dell'action redux può essere:
// - null
// - oauth2 
// - snapshot di firebase
 
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
  });


