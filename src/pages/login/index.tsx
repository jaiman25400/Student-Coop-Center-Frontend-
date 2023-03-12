import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div>
        <div className="flex h-screen items-center justify-center">
          <div className="w-full max-w-md rounded-md bg-white p-8 shadow-md">
            <h1 className="mb-4 text-center text-2xl font-bold tracking-wider">
              Login
            </h1>
            <form>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold  text-gray-700"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="focus:shadow-outline w-full rounded border py-2 px-3 leading-tight text-gray-700 "
                  type="text"
                  id="username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="focus:shadow-outline w-full rounded border py-2 px-3 leading-tight text-gray-700"
                  type="email"
                  id="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="focus:shadow-outline w-full rounded border py-2 px-3 leading-tight text-gray-700 "
                  type="password"
                  id="password"
                />
              </div>
              <button
                className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 "
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
