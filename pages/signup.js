const signup = () => {
  return (
    <div className="box-border font-inter">
      <div className="flex h-screen w-full flex-col antialiased">
        <div className="flex-grow">
          <div className="flex min-h-screen bg-white">
            <div className="flex flex-1 flex-col justify-center py-12 px-4 ms:px-32 gl:flex-none gl:px-24 lx:px-32">
              <div className="mx-auto w-full max-w-sm gl:w-96">
                <div>
                  <a title="Back to the homepage" className="inline-block">
                    <img
                      className="h-12 w-auto"
                      src="https://cofounderslab.com/assets/images/c.svg"
                      alt="CoFoundersLab"
                    ></img>
                  </a>
                  <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                    Create your account
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Or
                    <a className="font-medium text-blue-600 hover:text-blue-500">
                      click here to sign in
                    </a>
                    if you already have an account
                  </p>
                </div>
                <div className="mt-8">
                  <form className="space-y-6">
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 ms:grid-cols-6">
                      <div className="ms:col-span-6">
                        <label
                          for="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            name="email"
                            type="email"
                            autocomplete="email"
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 ms:text-sm"
                            placeholder="Your email address"
                          ></input>
                        </div>
                      </div>
                      <div className="ms:col-span-6">
                        <label
                          for="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <div className="mt-1">
                          <input
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 ms:text-sm"
                            placeholder="A secure password"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 ms:grid-cols-6">
                      <div className="ms:col-span-6">
                        <label for="agreement" className="mt-1">
                          <input
                            name="agreement"
                            id="agreement"
                            type="checkbox"
                          ></input>
                          &nbsp;
                          <span className="font-sans text-sm text-gray-500">
                            By filling your registration form and checking the
                            box, you agree to the{" "}
                            <a
                              className="underline"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Terms &amp; Conditions
                            </a>{" "}
                            and{" "}
                            <a
                              className="underline"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Privacy Policy
                            </a>
                            .
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 ms:grid-cols-6">
                      <div className="ms:col-span-6">
                        <label for="subscription" className="mt-1">
                          <input
                            name="subscription"
                            id="subscription"
                            type="checkbox"
                          ></input>
                          &nbsp;{" "}
                          <span className="font-sans text-sm text-gray-500">
                            By subscribing to CoFoundersLab, you agree that we
                            may send you marketing emails about CoFoundersLab.
                            You can unsubscribe anytime.
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-blue-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-default disabled:bg-gray-400"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">or</span>
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-1 gap-3">
                    <div>
                      <div className="group relative flex flex-col items-center">
                        <a className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                          Sign up with Google
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden w-0 flex-1 gl:block">
              <img
                className="absolute inset-0 z-0 h-full w-full object-cover"
                alt="Join World's Largest Network of Entrepreneurs"
                src="https://cofounderslab.com/assets/images/auth-splash.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
