import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'
import Login from './login';
import Loading from './loading';
import { useEffect } from 'react';
import firebase from 'firebase'

function MyApp({ Component, pageProps }) {


  const [user, loading] = useAuthState(auth)


  useEffect(() => {
    console.log("run thhe firebase useegect")
    if (user) {
      console.log("user exist")
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL

        },
        { merge: true }
      )
    }
  }, [user])

  // console.log(user, loading)

  if (loading) return <Loading />

  if (!user) return <Login />


  return <Component {...pageProps} />
}

export default MyApp
