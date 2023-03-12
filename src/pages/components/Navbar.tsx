import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

//new
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  const { instance } = useMsal();

  const handleLogin = (loginType: string) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <>
      <div className="border-b-2 shadow-md">
        <nav className="mx-10 flex h-16 flex-row items-center justify-between text-lg text-gray-700">
          <div className="basis-1/6">
            <h1 className="text-2xl font-bold tracking-wide antialiased">
              Lancer&apos;s View
            </h1>
          </div>
          <div className="basis-1">
            <input
              type="text"
              className="w-96 rounded-lg border-2 px-2 py-1 text-base"
              placeholder="Search for a company, job title, or keyword"
            />
          </div>
          <div className="basis-1/8">
            <ul className="flex space-x-10">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Companies</a>
              </li>
              <li>
                <a href="#">Post</a>
              </li>
              <li>
                <>
                  {session ? (
                    <button onClick={() => signOut()}>Sign out</button>
                  ) : (
                    <button onClick={() => signIn("azuread")}>
                      Sign in with Microsoft
                    </button>
                  )}
                </>
              </li>
              <li>
                <button type="button" onClick={() => handleLogin("popup")}>
                  Sign in using Popup
                </button>

                {/* <Link href="/login">
                  <Image
                    quality={100}
                    width={30}
                    height={30}
                    src="/icons/user.png"
                    alt="user"
                  />
                </Link> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
