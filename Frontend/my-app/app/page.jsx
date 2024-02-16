'use client'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import Navbar from './Navbar/page';

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (!user && !sessionStorage.getItem('user')) {
    router.push('/sign-up');
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem('user');
        router.push('/sign-up');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <main>
      <button onClick={handleLogout}>Log out</button>
      <Navbar />
    </main>
  );
}
