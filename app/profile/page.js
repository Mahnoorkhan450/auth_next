
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function Profilepage() {

  const session = await auth();   //auth() is used to read session--->server pr user ki info ka record
                                // auth() check karta hai ke uski session available hai ya nahi.
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <h1>Welcome to Profile Page!</h1>

      <h2>User Information</h2>

      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </>
  );
}
