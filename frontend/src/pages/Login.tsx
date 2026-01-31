const LoginPage = () => {
  return (
    <div className="grid bg-black md:bg-white md:flex md:justify-between md:w-screen md:h-screen">
      {/* left section  */}
      <section className="w-1/2">
        <div className="w-28 h-28 mt-66 mx-auto">
          <img src="socio_logo.png" alt="logo" />
        </div>

        <div className="my-12 text-center font-sans">
          <p className="text-4xl text-sky-600">Connect &</p>
          <p className="text-4xl text-sky-600"> Share with the world</p>
        </div>
      </section>

      {/* right form section  */}
      <section className="w-1/2 py-70 text-center border border-l">
        <form>
          <div>
            <p className="text-4xl font-extrabold">Welcome Back!</p>
          </div>
          <div className="mt-12 grid gap-7 justify-center">
            <div className="">
              <input
                type="email"
                id="email"
                className="bg-gray-200 py-3 pr-44 pl-2 rounded-lg outline-none"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                type="password"
                id="password"
                className="bg-gray-200 py-3 pr-44 pl-2 rounded-lg outline-none"
                placeholder="Password"
              />
            </div>

            <div>
              <button className="bg-blue-500 py-3 px-28 font-bold rounded-lg text-white">
                Login
              </button>
            </div>

            <div>
              <p className="font-serif text-sm">Don't have an account __singup</p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
