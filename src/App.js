import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    //   this.setState( {currentUser: user});

    //   console.log(user);
    // });
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        // because could be null (ex. signout)
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // onSnapshot ci da i dati relativi al ref
          // ma non avremo nessun dato fino a quando non lo usiamo
          // snapShot.data()
          //console.log(snapShot);
          //console.log(snapShot.data()) // json con displayName, email, createdAt
          // nota che da questi 2 console.log vedi che con .data() 
          // abbiamo i dati creati in firestore, ma l'id del record è
          // snapShot.id , quindi vanno usati in combinazione
          // per settare lo stato del componente
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
                }
            }
            //, 
            // essendo onSnapshot asincrono, mettiamo qui il log 
            // per esser sicuri di vedere lo stato quando sono arrivati i dati
            //() => console.log(this.state) 
          ) 
        })
      }
      this.setState({ currentUser: userAuth})
      
    });
  }

  // per far si che il logout abbia effetto
  // con anche questo willUnmount facciamo si che la 
  // App segua i cambiamenti di stato che arrivano da google firebase
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  
}



export default App;
