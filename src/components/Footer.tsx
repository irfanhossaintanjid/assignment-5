import Logo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-300 bg-white px-5 py-15 sm:px-6 md:px-8">
      <div className="container mx-auto grid gap-15 text-center md:grid-cols-4 md:text-left">

        {/* Brand */}
        <div>
          <img
            className="mx-auto w-32 md:mx-0"
            src={Logo}
            alt="Dev Stack"
          />

          <p className="mx-auto mt-4  text-sm leading-6 text-slate-500 md:mx-0">
            A thoughtful toolkit for choosing the technologies behind your
            next digital product.
          </p>

          {/* Social Links */}
          <div className="mt-5 flex justify-center gap-3 md:justify-start">
            <a
              href="https://github.com/irfanhossaintanjid"
              className="hover:text-gray-400"
            >
              GitHub
            </a>

            <a
              href="#"
              className="hover:text-gray-400"
            >
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/in/irfan-h-a2a622433/"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="hidden md:block">
          <h3 className="text-sm font-bold text-slate-900">
            Product
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <a
                href="#technologies"
                className="hover:text-gray-400"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-gray-400"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="hidden md:block">
          <h3 className="text-sm font-bold text-slate-900">
            Company
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <a
                href="#about"
                className="hover:text-gray-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="hidden md:block">
          <h3 className="text-sm font-bold text-slate-900">
            Legal
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <a
                href="#privacy"
                className="hover:text-gray-400"
              >
                Privacy
              </a>
            </li>

            <li>
              <a
                href="#terms"
                className="hover:text-gray-400"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

       
      <div className="container mx-auto mt-12 flex max-w-7xl flex-col items-center gap-4 border-t border-slate-100 pt-6 text-center text-xs text-slate-400 md:flex-row md:justify-between md:text-left">

        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex justify-center gap-5">
          <a
            href="#privacy"
            className="hover:text-gray-400"
          >
            Privacy
          </a>

          <a
            href="#terms"
            className="hover:text-gray-400"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}