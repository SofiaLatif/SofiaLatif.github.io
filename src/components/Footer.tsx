export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-black dark:border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-zinc-500 text-sm">
            © 2026 Projet de fin d&apos;études - Licence de biologie <br></br>Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="text-gray-400 dark:text-zinc-600 text-sm">
              <a href="mailto:sofia.latif.05@gmail.com" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700">Sofia Latif</a> / <a href="https://www.linkedin.com/in/st%C3%A9ban-schrader/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700">Steban Schrader</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
