import Link from "next/link"

export default function Login() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Project Zalyix
        </h1>

        <div className="flex gap-8 text-lg text-black font-medium">
          <Link href = "/"> Home </Link>
        </div>
      </header>

      {/* Centered Login Section */}
      <section className="flex flex-1 items-center justify-center px-6">
        
        {/* Login Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">
              Login
            </h2>
            <p className="text-gray-500 mt-2">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="
                  mt-1
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  px-4
                  py-2
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-blue-500
                  transition
                "
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="
                  mt-1
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  px-4
                  py-2
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-blue-500
                  transition
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full
                rounded-lg
                bg-blue-600
                text-white
                py-2
                font-medium
                hover:bg-grey-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-offset-2
                transition
              "
            >
              Sign In
            </button>

          </form>

        </div>

      </section>


        <footer className="bg-black text-white px-8 py-16">
        <div className="mx-auto max-w-7xl">

          {/* Top Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold">
                Project Zalyix
              </h3>
              <p className="mt-4 text-sm text-white/70 max-w-xs">
                Intelligent manager that brings all the teams together.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Product
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Pricing</li>
                <li className="hover:text-white cursor-pointer">Security</li>
                <li className="hover:text-white cursor-pointer">Integrations</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Company
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Legal
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
                <li className="hover:text-white cursor-pointer">Compliance</li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/10" />

          {/* Bottom Row */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">

            <p>
              © {new Date().getFullYear()} Project Zalyix. All rights reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://x.com/lawrora_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/company/lawrora/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Lawrora"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>
      </footer>


    </main>
  );
}