"use client"
import { useSession,signIn,signOut } from "next-auth/react"

export default function Authstatus()
{
    const{data :session,status}=useSession();       //usessession hook ha used to access the session
                                              //info and authentication sattus in client side

        if (status === "loading") {
    return <p>Loading session...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <p>You are not logged in.</p>
        <button onClick={() => signIn("github")}>
          Login with GitHub
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome, {session.user?.name}</p>
      <p>{session.user?.email}</p>

      <button onClick={() => signOut({ redirectTo: "/login" })}>
        Logout
      </button>
    </div>
  );
}                                      
