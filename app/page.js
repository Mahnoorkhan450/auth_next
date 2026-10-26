
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
    <h1>Welcome to home page!</h1>
    <button onClick={() => router.push("/register")}>
      Register
    </button>
    </>
  );
}



// "use client";

// import { signIn } from "next-auth/react";
// export default function Home() {
//   return (
//     <main>
//       <h1>Login</h1>
//       <hr></hr>

//       <form>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           required
//         />
//         <br></br>

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           required
//         />
//         <br></br>
//         <button type="submit">
//           Login with Email
//         </button>
//       </form>
//       <hr></hr>

//       <button onClick={() => signIn("google",{ callbackUrl: "/dashboard" })}>
//         Continue with Google
//       </button>
//       <br></br>
//       <hr></hr>
//       <button onClick={() => signIn("github",{ callbackUrl: "/dashboard" })}>
//         Continue with Github
//       </button>
//       <br></br>

//     </main>
//   );
// }