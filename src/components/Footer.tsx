import Logo from "../assets/logo-text.png";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  const groups = {
    Product: ["Technologies", "Projects"],
    Company: ["About", "Contact"],
    Legal: ["Privacy", "Terms"],
  };

  return (
    <footer id="contact" className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <img className="w-32" src={Logo} alt="Dev Stack" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">A thoughtful toolkit for choosing the technologies behind your next digital product.</p>
          <div className="mt-5 flex gap-3 text-slate-500">
            <a aria-label="GitHub" href="#github" className="rounded-full border border-slate-200 p-2 hover:text-pink-600"><FiGithub /></a>
            <a aria-label="Twitter" href="#twitter" className="rounded-full border border-slate-200 p-2 hover:text-pink-600"><FiTwitter /></a>
            <a aria-label="LinkedIn" href="#linkedin" className="rounded-full border border-slate-200 p-2 hover:text-pink-600"><FiLinkedin /></a>
          </div>
        </div>
        {Object.entries(groups).map(([title, links]) => <div key={title}><h2 className="text-sm font-bold text-slate-900">{title}</h2><ul className="mt-4 space-y-3 text-sm text-slate-500">{links.map((link) => <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-pink-600">{link}</a></li>)}</ul></div>)}
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-100 pt-6 text-xs text-slate-400">© 2026 Dev Stack. All rights reserved.</div>
    </footer>
  );
}
