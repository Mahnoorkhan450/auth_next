// NextAuth.js ko configure kar rahe hain taake user GitHub account se login kar sake

//basically next auth is a authentication lib and NextAuth is a function importing this
//function cuz we have to configure authentication

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
//importing provider----->provide basically are the service jis ke through user authenticate kryga
//baiscally user provider ko use krta hai apni identitiy verify krny ke liye or login ke liye



export const { handlers, auth, signIn, signOut } = NextAuth({//nextauth return a object which have thse 4 properties
  providers: [GitHub,Google],   //nextauth ko hm ye object dy rhy ha
    //or ye object batata hai ke for authenticate use this github provider
    
session:{
  strategy:"jwt" ,  //session ke liye json web token use kry gaye

}
,
pages:{
  signIn:"/login"

}

});









//handler---------> to handle  authetucation http requests used in api route
//auth==========>server pr use ki current authetication/seession info access krny dyta
//sign in-------->login process
//sign out-=---->logout process
//basically nextauth object return krta hai or const{} yaha hm object destructing kr rhy ha
//wo properties variables mai store kr rhy ha


//NextAuth() authentication configuration leta hai
//  aur handlers, auth, signIn, aur signOut provide karta hai, 
// jinhein hum API routes aur application mein authentication manage karne ke liye use karte hain.
