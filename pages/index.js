import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import Header from '../components/Header';
import Messages from '../components/Messages';
export default function Home() {
  const {isAuthenticated, logout, authenticate, user, setUserData, isUserUpdating, userError, Moralis} = useMoralis();

  if (!isAuthenticated) return <Login authenticate={authenticate}/>
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900
    overflow-hidden">
      <Head>
        <title>Metaverse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="max-w-screen-2xl mx-auto">
          <Header user={user} logout={logout} setUserData={setUserData} 
              isUserUpdating={isUserUpdating} userError={userError} />
              <Messages user={user} moralis={Moralis} />
        </div>
    </div>
  )
}
