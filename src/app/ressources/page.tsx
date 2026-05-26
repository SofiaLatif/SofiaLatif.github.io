export default function Ressources() {
  const references = [
    {
      author: "Sabatini, S. et al.",
      year: "1999",
      title: "An auxin-dependent distal organizer of pattern and polarity in the Arabidopsis root.",
      journal: "Cell, 99(5), 463-472.",
      note: "Utilisation de DR5 pour tracer l'auxine."
    },
    {
      author: "Alexandersson, E. et al.",
      year: "2005",
      title: "Whole-genome transcriptional profiles of intact Arabidopsis thaliana leaves and roots during salt and osmotic stress.",
      journal: "Plant Molecular Biology.",
      note: "Régulation des aquaporines PIP2."
    },
    {
      author: "Miyazawa, Y. et al.",
      year: "2009",
      title: "Mutation in DNA polymerase alpha subunit DPB2 mutates Arabidopsis mizu-kussei1 and rescues hydrotropic response.",
      journal: "PLoS Genetics.",
      note: "Découverte de MIZ1."
    },
    {
      author: "Shkolnik, D. et al.",
      year: "2016",
      title: "Hydrotropism mechanisms and their interplay with gravitropism.",
      journal: "Journal of Experimental Botany.",
      note: "Modélisation de la distribution de l'auxine."
    },
    {
      author: "Píriz-Pezzutto, M. et al.",
      year: "2024",
      title: "Arabidopsis root apical meristem adaptation to an osmotic gradient condition.",
      journal: "Frontiers in Plant Science.",
      note: "Étude des gradients de Mannitol."
    },
    {
      author: "Oliva, M. et al.",
      year: "2020",
      title: "Root waving and coiling: an interplay between active tropisms and passive mechanics.",
      journal: "AOB Plants.",
      note: ""
    },
    {
      author: "Duan, L. et al.",
      year: "2013",
      title: "Severe drought-induced agravitropic root growth is regulated by SnRK2.2 and SnRK2.3 in Arabidopsis.",
      journal: "The Plant Cell.",
      note: ""
    },
    {
      author: "Shkolnik, D. et al.",
      year: "2018",
      title: "MIZ1 regulates ECA1 to generate a slow, long-distance phloem-transmitted Ca2+ signal essential for root water tracking in Arabidopsis.",
      journal: "PNAS, 115(38), 9546-9551.",
      note: "Source des schémas du modèle cellulaire de l'hydrotropisme."
    },
    {
      author: "Dietrich, D. et al.",
      year: "2017",
      title: "Root hydrotropism is controlled via a cortex-specific growth mechanism.",
      journal: "Nature Plants, 3(6), 17057.",
      note: ""
    },
    {
      author: "Chaumont, F., & Tyerman, S. D.",
      year: "2014",
      title: "Aquaporins: Highly Regulated Channels Controlling Plant Water Relations.",
      journal: "Plant Physiology, 164(4), 1600-1618.",
      note: ""
    },
    {
      author: "Grondin, A. et al.",
      year: "2015",
      title: "Aquaporins Contribute to ABA-Triggered Stomatal Closure through OST1-Mediated Phosphorylation of PIP2;1.",
      journal: "The Plant Cell, 27(7), 1945-1954.",
      note: ""
    },
    {
      author: "Parent, B. et al.",
      year: "2009",
      title: "Drought and Abscisic Acid Effects on Aquaporin Content Translate into Changes in Hydraulic Conductivity and Leaf Growth Rate.",
      journal: "Plant Physiology.",
      note: ""
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 border-b border-emerald-100 dark:border-emerald-900 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-50 mb-4 flex items-center">
          Références Scientifiques (Bibliographie)
        </h1>
        <p className="text-gray-600 dark:text-zinc-400">
          Les sources et publications clés qui ont servi de base scientifique à ce projet de médiation sur l&apos;hydrotropisme chez Arabidopsis thaliana.
        </p>
      </div>

      <div className="space-y-6">
        {references.map((ref, index) => (
          <div key={index} className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all group shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                {ref.author} ({ref.year})
              </span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-zinc-100 mb-2 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {ref.title}
            </h3>
            {ref.journal && (
              <p className="text-gray-500 dark:text-zinc-500 text-sm italic mb-2">
                {ref.journal}
              </p>
            )}
            {ref.note && (
              <p className="text-gray-600 dark:text-zinc-400 text-sm bg-gray-50 dark:bg-zinc-800/50 p-2 rounded mt-2 border-l-2 border-emerald-500">
                {ref.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
