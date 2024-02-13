'use client'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');

  console.log({user})
 
  if (!user && !userSession){
    router.push('/sign-up')
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        }}>
        Log out 
      </button>

    </main>
  )
}