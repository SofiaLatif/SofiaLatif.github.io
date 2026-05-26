'use client';

import Tooltip from '@/components/Tooltip';
import Tabs from '@/components/Tabs';
import Timeline from '@/components/Timeline';
import Link from 'next/link';
import ImageModal from '@/components/ImageModal';
import PDBVisualizer from '@/components/PDBVisualizer';
import ImageSlider from '@/components/ImageSlider';
import { useState, useEffect } from 'react';

const pnasImages = [
  {
    src: '/pnas_images/pnas_1804130115fig01.jpg',
    legend: "Fig. 1. Détection du gradient hydrique : Cette imagerie montre comment la racine perçoit l'humidité grâce à un signal calcique (en rouge). Ce signal agit comme un indicateur interne permettant à la racine d'identifier la direction de la zone la plus humide."
  },
  {
    src: '/pnas_images/pnas_1804130115fig02.jpg',
    legend: "Fig. 2. Dynamique de la réponse : Dès l'exposition au changement de potentiel hydrique, la signalisation cellulaire s'active quasi-instantanément. Le signal de calcium précède physiquement le mouvement de courbure de la racine."
  },
  {
    src: '/pnas_images/pnas_1804130115fig03.jpg',
    legend: "Fig. 3. Transmission de l'information : Le signal calcique circule spécifiquement via les tissus conducteurs (le phloème). Ce réseau permet de coordonner la réponse de l'ensemble de la racine face au stimulus localisé."
  },
  {
    src: '/pnas_images/pnas_1804130115fig04.jpg',
    legend: "Fig. 4. Rôle instructeur du calcium : En manipulant artificiellement les niveaux de calcium cytosolique, les chercheurs démontrent que cet élément contrôle directement la trajectoire de l'apex racinaire vers l'eau."
  },
  {
    src: '/pnas_images/pnas_1804130115fig05.jpg',
    legend: "Fig. 5. Interaction protéique clé : La découverte de l'interaction directe entre les protéines ECA1 et MIZ1 révèle le mécanisme moléculaire fondamental qui facilite la signalisation calcique nécessaire à l'hydrotropisme."
  },
];

export default function Home() {
  const [isFigure1ModalOpen, setIsFigure1ModalOpen] = useState(false);
  const [isFigure3ModalOpen, setIsFigure3ModalOpen] = useState(false);
  const [selectedDetailImage, setSelectedDetailImage] = useState<{src: string, title: string, description?: string | React.ReactNode} | null>(null);

  useEffect(() => {
    // Reveal animation logic removed to ensure content visibility as requested
  }, []);

  return (
    <div className="bg-white dark:bg-black overflow-hidden relative">
      {/* Modals */}
      <ImageModal 
        isOpen={isFigure1ModalOpen}
        onClose={() => setIsFigure1ModalOpen(false)}
        imageSrc="/figure1-regulation.webp"
        title="Régulation des Aquaporines (PIPs) dans la cellule"
        description={
          <>
            <p>
              Cette figure illustre le cycle de vie et la régulation des aquaporines (PIPs). Les gènes PIP sont transcrits et traduits dans le réticulum endoplasmique, puis acheminés vers la membrane plasmique via l&apos;appareil de Golgi.
            </p>
            <p>
              Leur activité est finement régulée par plusieurs mécanismes : la phosphorylation, les changements de pH, ou encore les concentrations en calcium. En cas de stress (salin ou hydrique), les PIPs peuvent être internalisées par endocytose ou dégradées, réduisant ainsi la perméabilité à l&apos;eau de la cellule pour préserver son hydratation.
            </p>
            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 italic text-xs">
              Crédits : François Chaumont & Stephen D. Tyerman. <br />
              Étude : <a href="https://www.researchgate.net/publication/259847886_Aquaporins_Highly_Regulated_Channels_Controlling_Plant_Water_Relations" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                Aquaporins: Highly Regulated Channels Controlling Plant Water Relations
              </a>
            </div>
          </>
        }
      />

      <ImageModal 
        isOpen={isFigure3ModalOpen}
        onClose={() => setIsFigure3ModalOpen(false)}
        imageSrc="/figure3-signaling.webp"
        title="Signalisation à longue distance et coordination hydrique"
        description={
          <>
            <p>
              Ce schéma détaille la communication complexe entre les racines et les parties aériennes pour coordonner la gestion de l&apos;eau à l&apos;échelle de la plante entière.
            </p>
            <p>
              <strong>À gauche (Racine vers Tige) :</strong> En cas de stress hydrique, les racines envoient des signaux (hormone ABA et signaux hydrauliques) qui provoquent la fermeture des stomates et réduisent l&apos;activité des aquaporines dans les feuilles pour limiter la perte d&apos;eau.
            </p>
            <p>
              <strong>À droite (Tige vers Racine) :</strong> La transpiration régule en retour la conductivité hydraulique des racines. Une forte transpiration stimule l&apos;expression et l&apos;activité des aquaporines racinaires pour augmenter l&apos;approvisionnement en eau, via des signaux de tension du xylème ou de transport d&apos;ABA.
            </p>
            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 italic text-xs">
              Crédits : François Chaumont & Stephen D. Tyerman. <br />
              Étude : <a href="https://www.researchgate.net/publication/259847886_Aquaporins_Highly_Regulated_Channels_Controlling_Plant_Water_Relations" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                Aquaporins: Highly Regulated Channels Controlling Plant Water Relations
              </a>
            </div>
          </>
        }
      />

      <ImageModal 
        isOpen={!!selectedDetailImage}
        onClose={() => setSelectedDetailImage(null)}
        imageSrc={selectedDetailImage?.src || ''}
        title={selectedDetailImage?.title || ''}
        description={selectedDetailImage?.description || "Observation au microscope confocal de la fluorescence GFP liée à l'auxine (pDR5::GFP) dans l'apex racinaire. Cette technique permet de visualiser la distribution de l'hormone in vivo sous différentes conditions de stress hydrique."}
      />

      {/* Hero Section with Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-60 dark:opacity-30"
          style={{
            backgroundImage: 'url("/background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center text-lg">
          <div className="animate-float">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-zinc-50 tracking-tight mb-6 drop-shadow-sm">
              Projet Pluridisciplinaire : <br />
              <span className="text-emerald-600 dark:text-emerald-400 italic">A. thaliana</span> & Stress Hydrique
            </h1>
          </div>
          <p className="text-xl text-gray-800 dark:text-zinc-200 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Contenu Rédactionnel & Structure pour le Site Web de Médiation
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#introduction" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-xl shadow-emerald-200/50 dark:shadow-none text-base">
              Commencer l&apos;exploration
            </a>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32 bg-white dark:bg-black text-lg">
        
        {/* Section Qui suis-je ? */}
        <section id="introduction" className="scroll-mt-24">
          <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 sm:p-12 border border-zinc-100 dark:border-zinc-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-8 flex items-center leading-tight">
              <span className="w-1.5 h-8 bg-emerald-500 rounded-full mr-4"></span>
              La Racine à la recherche de l&apos;eau : Une aventure cellulaire
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 text-base">
              <div className="md:col-span-2 space-y-6">
                <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                  Bonjour! Je m&apos;appelle <strong>Sofia </strong> et je suis en troisième année de licence de biologie. J&apos;aime explorer différents aspects du vivant, je suis passionnée par la génétique, par les interactions entre les organismes avec leur environnement et j&apos;adore expérimenter ! Pour mon projet de fin de licence je tenais à mettre un point d&apos;honneur sur ce qui me plait le plus en biologie : tenter de comprendre l&apos;incroyable machinerie du vivant.
                </p>
                
                <div className="bg-emerald-100/50 dark:bg-emerald-900/20 p-6 rounded-2xl border-l-4 border-emerald-500">
                  <h3 className="text-emerald-800 dark:text-emerald-300 font-bold mb-2">Le but de ce site ?</h3>
                  <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                    Partager avec vous les coulisses d&apos;un projet de recherche, rendre accessible un univers souvent réservé à des particuliers et vous montrer que rien n&apos;est prévisible en biologie. Destiné aux curieux, ce site vous emmène à la découverte de l&apos;hydrotropisme chez la plante modèle <span className="italic">Arabidopsis thaliana </span> en passant par plusieurs concepts clés de physiologie végétale, d&apos;adaptation évolutive et de biologie moléculaire.
                  </p>
                </div>

                <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                  On tentera de répondre à comment le stress hydrique impacte l&apos;architecture racinaire chez <span className="italic">A. thaliana </span> et on tentera de comprendre le rôle de l&apos;auxine dans ce mécanisme.
                 </p>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex flex-col justify-center text-center">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"></div>
                <h4 className="font-bold text-gray-900 dark:text-zinc-100">L&apos;objectif</h4>
                <p className="text-sm text-gray-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  Comprendre comment le stress hydrique impacte l&apos;architecture racinaire chez <span className="italic">A. thaliana </span> et le rôle de l&apos;auxine dans ce mécanisme.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 border-t border-zinc-100 dark:border-zinc-800 space-y-6 text-sm sm:text-base">
              <p className="text-gray-700 dark:text-zinc-300 leading-relaxed italic">
                On commence notre parcours sur la paillasse d&apos;une aspirante scientifique à la recherche d&apos;idées de montages expérimentaux : Ici on va décortiquer comment mettre en place une expérience qui nous permet de répondre à notre question. On fera ensuite appel à notre fidèle compagnon de route, l&apos;outil indispensable des chercheurs : sans littérature, rien n&apos;est possible.
              </p>
              <p className="text-gray-700 dark:text-zinc-300 leading-relaxed italic">
                Tôt ou tard nous affronterons le terrible mage de la vérité : les statistiques ! Elles nous permettront de mettre de la lumière sur notre chemin, que ça nous plaise ou pas… Notre chemin se terminera par une consultation de la littérature pour répondre à notre objectif et repartir vers de nouvelles pistes à explorer.
              </p>
              <p className="text-gray-900 dark:text-zinc-100 leading-relaxed font-bold text-center border-t border-emerald-100 dark:border-emerald-900/30 pt-6">
                Enfilez la blouse et suivez le guide, de la boîte de Petri au microscope confocal !
              </p>
            </div>
          </div>
        </section>

        {/* Chapitre 1 */}
        <section id="chapitre1" className="scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-8">
            Chapitre 1 : La paillasse et les idées…
          </h2>
          
          <Tabs
            tabs={[
              {
                id: 'contexte',
                label: '1.1 Contexte',
                content: (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-base">
                    <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                      Les racines d&apos;
                      <Tooltip 
                        term="Arabidopsis thaliana" 
                        definition="Arabidopsis thaliana (ou l'arabiette des dames) est une petite plante de la famille des Brassicacées qui sert d'organisme modèle universel en biologie végétale et en génétique. Elle est plébiscitée par les chercheurs du monde entier en raison de sa taille réduite, de son cycle de vie ultra-rapide (environ 6 semaines) et de sa production massive de graines. De plus, c'est la toute première plante dont le génome a été entièrement séquencé en l'an 2000, ce qui en fait l'équivalent de la souris de laboratoire pour le monde végétal." 
                      />
                      {" "}présentent une architecture fortement{" "}
                      <Tooltip 
                        term="plastique" 
                        definition="La plasticité phénotypique désigne la capacité d'un même organisme à exprimer des caractéristiques morphologiques, physiologiques ou comportementales différentes en fonction de son environnement. Chez les plantes, cette propriété est essentielle à la survie car, étant fixées au sol, elles doivent adapter en permanence leur développement pour faire face aux variations de leur milieu." 
                      />
                      , modulée par l&apos;environnement (disponibilité en nutriments, stress salin ou hydrique).
                    </p>
                    <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                      La plasticité des racines liée à l&apos;eau spécifiquement est l&apos;hydrotropie et elle implique à la fois des modifications morphologiques et des ajustements de l&apos;
                      <Tooltip 
                        term="expression de gènes" 
                        definition="Processus biochimique par lequel l'information génétique contenue dans l'ADN est lue et convertie en un produit fonctionnel, le plus souvent une protéine." 
                      />
                      {" "}impliqués dans le transport de l&apos;eau et la réponse au stress.
                    </p>
                  </div>
                )
              },
              {
                id: 'phenomene',
                label: '1.2 Le phénomène',
                content: (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-base">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1">
                        <p className="text-gray-700 dark:text-zinc-300 leading-relaxed mb-4 text-xl">
                          L&apos;<strong>hydrotropisme</strong> est la croissance orientée des racines vers les zones les plus humides du sol. C&apos;est un mécanisme vital de recherche d&apos;eau.
                        </p>
                        <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                          Il entre souvent en conflit avec le{" "}
                          <Tooltip 
                            term="gravitropisme" 
                            definition="La tendance naturelle de la racine à pousser vers le bas, attirée par la gravité." 
                          />.
                        </p>
                      </div>
                      <div className="w-full md:w-80 space-y-2">
                        <div className="relative aspect-video md:aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
                          <img 
                            src="/racines-soif.webp" 
                            alt="Racines cherchant l'eau dans une canalisation" 
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <p className="text-xs text-zinc-500 italic text-center">
                          Exemple frappant de recherche d&apos;eau : racines colonisant une canalisation.
                        </p>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: 'acteurs',
                label: '1.3 Acteurs moléculaires',
                content: (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 text-sm">
                    <div className="flex flex-col gap-8">
                      {/* Section Aquaporines */}
                      <div className="bg-sky-50 dark:bg-sky-900/10 p-6 rounded-2xl border border-sky-100 dark:border-sky-900/30 space-y-6">
                        <div className="space-y-2">
                          <h4 className="font-bold text-sky-800 dark:text-sky-300 mb-2 text-lg">Aquaporines (PIPs)</h4>
                          <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                            Les Aquaporines (PIPs) sont de véritables canaux à eau cellulaires situés dans la membrane plasmique. Elles régulent le passage des molécules d&apos;eau et s&apos;adaptent très rapidement en cas de stress hydrique (sécheresse).
                          </p>
                        </div>
                        
                        <div className="pt-4 border-t border-sky-100 dark:border-sky-800 space-y-4">
                          <h5 className="text-sm font-bold text-sky-900 dark:text-sky-300 leading-tight">
                            Modélisation 3D : Aquaporine PIP2;1 d&apos;épinard (Spinacia oleracea)
                          </h5>
                          <p className="text-[11px] text-gray-600 dark:text-zinc-400 italic leading-snug">
                            Cette protéine sert de modèle de référence pour l&apos;étude des PIP d&apos;Arabidopsis thaliana. Modèles visualisés via l&apos;outil <strong>RasTop</strong> lors de l&apos;étude.
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <PDBVisualizer 
                              pdbPath="/sopip2_1_closed.pdb" 
                              title="L'état FERMÉ"
                              description={
                                <>
                                  <p><strong>La configuration :</strong> La Boucle D est repliée vers l&apos;intérieur, directement en travers du canal.</p>
                                  <p><strong>Le \&quot;bouchon\&quot; :</strong> Une Leucine (Leu197) se place au milieu du pore. Elle agit comme un bouchon de liège enfoncé dans le tuyau.</p>
                                  <p className="italic"><strong>Conséquence :</strong> L&apos;eau est bloquée. La cellule est isolée hydrauliquement pour éviter de perdre son eau vers un sol sec.</p>
                                </>
                              }
                            />
                            <PDBVisualizer 
                              pdbPath="/sopip2_1_open.pdb" 
                              title="L'état OUVERT"
                              description={
                                <>
                                  <p><strong>La configuration :</strong> La Boucle D s&apos;écarte du centre et se deplace vers l&apos;extérieur du pore.</p>
                                  <p><strong>Le bouchon est retiré :</strong> La Leu197 n&apos;obstrue plus le canal. Le tuyau est complètement dégagé.</p>
                                  <p className="italic"><strong>Conséquence :</strong> L&apos;eau peut traverser librement et très rapidement (plus de 3 milliards de molécules par seconde !).</p>
                                </>
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Section Auxine */}
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                        <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 text-lg">Auxine</h4>
                        <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                          L&apos;Auxine est le phytohormone de croissance par excellence. Sa répartition asymétrique dans les cellules de la racine induit des différences d&apos;élongation cellulaire. La coiffe racinaire agit comme une plaque tournante moléculaire où l&apos;auxine, acheminée depuis la tige, forme un pic de concentration maximal.
                        </p>
                        <p className="text-gray-700 dark:text-zinc-300 mt-2 leading-relaxed">
                          Des protéines de transport d&apos;efflux, les <strong>transporteurs PIN</strong>, distribuent cette hormone de manière symétrique vers les tissus extérieurs de la racine pour réguler sa croissance basale. Lors d&apos;un stimulus environnemental (comme la gravité ou un gradient d&apos;eau), ces protéines PIN se relocalisent rapidement sur un seul côté des cellules de la coiffe, provoquant une fuite asymétrique d&apos;auxine qui inhibe l&apos;allongement cellulaire d&apos;un côté et force la racine à se courber.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-zinc-900 text-zinc-100 p-8 rounded-3xl shadow-xl space-y-6 text-base">
                      <div>
                        <h4 className="text-emerald-400 font-bold mb-4">On pose donc deux hypothèses :</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <span className="text-emerald-500 mr-2">→</span>
                            L&apos;asymétrie de la disponibilité en eau dans le sol induit une déviation de la trajectoire racinaire vers la zone la plus humide.
                          </li>
                          <li className="flex items-start">
                            <span className="text-emerald-500 mr-2">→</span>
                            La courbure de la racine est dictée par une accumulation d&apos;auxine à l&apos;apex racinaire du côté stressé.
                          </li>
                        </ul>
                      </div>

                      <div className="border-t border-zinc-800 pt-6 space-y-4">
                        <p className="text-zinc-300 italic text-sm">
                          Le but est donc de pouvoir observer comment varie le phénotype des racines dans un milieu pauvre en eau. Facile non? On les met un témoin dans un milieu normal et puis on fait une condition stressante et voila le travail me diriez vous.
                        </p>
                        <p className="text-zinc-300 italic text-sm">
                          C&apos;est un peu plus compliqué que ça en réalité puisque le but c&apos;est de voir une adaptation réaliste et concrètement dans la nature c&apos;est jamais blanc ou noir. Finalement une comparaison aussi drastique n&apos;est pas exactement adaptée à la question que nous cherchons à élucider.
                        </p>
                        <p className="text-emerald-400 font-bold text-base">
                          Premier défi → Comment répliquer une condition de sol réaliste in vitro, pour que nos plantes puissent y répondre comme elles le feraient in vivo?
                        </p>
                        <p className="text-zinc-300 italic text-sm">
                          Rappelez vous qu&apos;on s&apos;intéresse également au rôle de l&apos;auxine dans tout ça. Et oui..rien n&apos;arrive au hasard en biologie, si l&apos;architecture des racines varie c&apos;est parce que quelque chose de plus grand, qui est paradoxalement plus petit, se cache derrière !
                        </p>
                        <p className="text-emerald-400 font-bold text-base">
                          Nouveau défi → Comment voir quelque chose d&apos;aussi petit dans nos racines à l&apos;oeil nu et comment y interpréter la présence d&apos;auxine?
                        </p>
                      </div>
                    </div>
                  </div>
                )
              }
            ]}
          />
        </section>

        {/* Chapitre 2 */}
        <section id="chapitre2" className="scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-8">
            Chapitre 2 : Matériel et Méthodes (Le Protocole)
          </h2>

          <div className="space-y-6 text-gray-700 dark:text-zinc-300 leading-relaxed mb-12 text-base">
            <p>
              Nous travaillerons{" "}
              <Tooltip term="in vitro" definition="Signifie « dans le verre » en latin, cela désigne les études menées en dehors d'un organisme vivant." /> 
              {" "}dans des{" "}
              <Tooltip term="conditions stériles" definition="Environnement de travail totalement exempt de micro-organismes vivants (bactéries, champignons, virus ou spores), obtenu grâce à des techniques rigoureuses de décontamination et de filtration de l'air." />. 
              Tous ces aspects sont garantis par le laboratoire de physiologie végétale. On y trouve les indispensables pour les chercheurs en biologie végétale!
            </p>

            <p>
              Pour mettre en place nos milieux témoins il nous faut donc un milieu dans lequel la plante se sent bien et un milieu provoquant un stress hydrique. Quand on parle de milieux, on fait référence à des boîtes de pétri contenant des{" "}
              <Tooltip term="milieux agar" definition="Ou milieu gélosé, est une substance semi-solide préparée en ajoutant de l'agar-agar à une solution nutritive. En recherche végétale, il sert de support de croissance artificiel lors des cultures in vitro en conditions stériles, remplaçant la terre pour maintenir la plante droite tout en laissant ses racines se développer." />.
            </p>

            <p>
              Dans notre expérience, notre témoin sera un{" "}
              <Tooltip term="milieu Hoagland" definition="Solution nutritive synthétique hautement équilibrée qui contient l'intégralité des macro- et micronutriments essentiels au développement complet d'une plante. Il sert de formulation de référence universelle pour cultiver des plantes hors-sol dans des conditions parfaitement contrôlées." /> 
              {" "}et notre témoin &quot;stress hydrique&quot; sera le même milieu traité au{" "}
              <Tooltip term="PEG 6000" definition="Le Polyéthylène Glycol 6000 est un polymère inerte de masse moléculaire élevée qui est utilisé pour simuler artificiellement un stress hydrique (sécheresse). Sa structure chimique organisée en longues chaînes répétitives d'oxyde d'éthylène lui permet de former de très nombreuses liaisons hydrogène avec les molécules d'eau, cela les retient et abaisse le potentiel hydrique du milieu." />.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 space-y-4">
              <p className="font-bold text-emerald-800 dark:text-emerald-300">Mais alors comment répliquer une condition plus représentative du sol?</p>
              <p>
                Il suffit de comprendre comment se comporte l&apos;eau dans le sol ! Pensez à la pluie et au cycle de l&apos;eau : de façon très simple, elle tombe, s&apos;écoule dans le sol et une partie de cette eau finit dans les nappes phréatiques. Les plantes puisent dans le sol pour obtenir l&apos;eau dont elles ont besoin, alors quand il pleut ou qu&apos;elles sont arrosées elles se régalent ! Demandons-nous comment elles font une fois que l&apos;eau s&apos;enfonce dans la terre … elles s&apos;adaptent et vont la chercher. C&apos;est exactement ce qui nous intéresse.
              </p>
              <p>
                Nouvelle piste → Il faut mimer ce phénomène in vitro, un phénomène qui n&apos;est ni blanc ni noir. Eh bien c&apos;est ce qu&apos;on appelle un{" "}
                <Tooltip term="gradient" definition="Variation progressive et continue de la valeur d'une grandeur physique ou chimique entre deux points de l'espace." />. 
                Il va nous permettre de mimer une condition de sol dont la concentration en eau est plus élevée au fur et à mesure qu&apos;on s&apos;y enfonce.
              </p>
              <p>
                C&apos;est là que la magie de la littérature fait effet puisque des scientifiques se sont déjà penchés sur des questions qui nécessitent de reproduire ce genre de mécanismes et c&apos;est de là qu&apos;est né le <strong>split-agar</strong>.
                Ce montage expérimental permet de mimer un gradient hydrique et ainsi observer une réponse racinaire susceptible de mieux répondre à la réalité grâce à la création d&apos;une zone grise dans laquelle ont lieu des{" "}
                <Tooltip term="échanges" definition="Mouvements bidirectionnels d'eau et de solutés à travers une membrane semi-perméable pour équilibrer les concentrations de part et d'autre de cette barrière, c'est le principe d'osmose." /> 
                {" "}entre les deux milieux.
              </p>
            </div>
          </div>

          <Timeline
            events={[
              {
                title: "a. Préparation des milieux Hoagland",
                description: "Préparation d'une solution nutritive contenant les macro- et micro-éléments pour le métabolisme initial.",
                details: (
                  <div className="text-sm space-y-4">
                    <p>Tamponnée à un pH de 5,7 (ajusté avec du KOH) pour respecter la physiologie racinaire. Ajout de gélose (agar-agar) à 0,4% pour assurer la gélification.</p>
                    <p className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border-l-4 border-amber-400 text-amber-900 dark:text-amber-200 text-xs">
                      <strong>*Astuce de laborantin* :</strong> Les boîtes de Petri carrées doivent sécher sous la{" "}
                      <Tooltip term="hotte à flux laminaire" definition="Équipement de laboratoire conçu pour créer un espace de travail stérile et protégé de toute contamination particulaire ou microbienne. Elle fonctionne en aspirant l'air ambiant et en le propulsant à travers un filtre à haute efficacité." /> 
                      {" "}entrouvertes pendant 20 minutes pour éviter la condensation.
                    </p>
                  </div>
                )
              },
              {
                title: "b. Stérilisation et Semis",
                description: "Préparation des lignées végétales sur boîtes de Petri rondes.",
                details: (
                  <div className="text-sm space-y-2">
                    <p>
                      Les graines de la lignée sauvage{" "}
                      <Tooltip term="Col-0" definition="Columbia-0 est variété sauvage de référence (wild-type) la plus largement utilisée dans le monde pour la recherche sur Arabidopsis thaliana. Son patrimoine génétique, entièrement séquencé, sert de témoin standard dans les expériences." /> 
                      {" "}et des lignées transgéniques{" "}
                      <Tooltip term="pDR5::GFP" definition="Outil biotechnologique conçu pour visualiser en temps réel la distribution et l'accumulation de l'auxine dans l'organisme. Elle intègre un promoteur artificiel sensible à l'auxine DR5 couplé au gène d'une protéine fluorescente verte GFP. Ainsi, chaque fois que l'hormone s'accumule dans une cellule, celle-ci émet une fluorescence verte sous un microscope adapté, permettant de cartographier précisément sa localisation tissulaire." /> 
                      {" "}sont stérilisées en surface avant d&apos;être semées.
                    </p>
                  </div>
                )
              },
              {
                title: "c. Lancement de la croissance",
                description: "Transfert vertical en chambre de culture.",
                details: (
                  <p className="text-sm">
                    Les boîtes sont transférées verticalement dans une{" "}
                    <Tooltip term="chambre de culture" definition="Espace clos et hautement technologique conçu pour faire croître des plantes dans des conditions environnementales entièrement contrôlées." /> 
                    {" "}pendant 5-6 jours.
                  </p>
                )
              },
              {
                title: "d & e. Le système 'Split-Agar' et Mise en place du Gradient",
                description: "Création d'un stress hydrique localisé par découpe diagonale.",
                details: (
                  <div className="space-y-4 text-sm">
                    <p>
                      Pour étudier la réponse d&apos;orientation racinaire face à l&apos;eau, nous mimons un stress hydrique localisé en coupant le gel en diagonale (split = diviser/couper).
                    </p>
                    <p>
                      Procédure : Sous hotte à flux laminaire, à l&apos;aide d&apos;un scalpel stérile, la moitié inférieure du gel traité au PEG (pendant 24H) est découpée en diagonale et retirée. Elle est immédiatement remplacée par un gel HG contrôle.
                    </p>
                    <div className="relative aspect-video bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md border border-emerald-100 dark:border-emerald-900/30 group">
                      <img 
                        src="/gradient-plate.png" 
                        alt="Schéma du système Split-Agar pour le gradient hydrique" 
                        className="object-contain w-full h-full p-2 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="bg-sky-50 dark:bg-sky-900/20 p-3 rounded-lg border-l-4 border-sky-400 text-sky-900 dark:text-sky-200 text-xs">
                      <strong>*La minute biophysique* :</strong> Les pores de la paroi cellulaire végétale mesurent entre 3,5 et 5,2 nanomètres. La taille moléculaire du PEG 6000 l&apos;empêche de traverser ces pores. Contrairement aux petits solutés (comme le mannitol ou le NaCl) qui pénètrent la paroi et induisent une plasmolyse, le PEG reste exclu à l&apos;extérieur. Le milieu devient hypertonique de façon réaliste sans altérer la santé cellulaire de la plante.
                    </p>
                  </div>
                )
              },
              {
                title: "f. Le Transfert",
                description: "Positionnement critique des plantules.",
                details: (
                  <div className="text-sm space-y-2">
                    <p>
                      Les plantules de 5/6 jours sont prélevées avec précaution à l&apos;aide d&apos;une pince fine de précision. 
                      L&apos;
                      <Tooltip term="apex" definition="L'extrémité terminale d'une racine, une zone hautement dynamique d'à peine quelques millimètres qui est responsable de la croissance, de la perception environnementale et de l'exploration du sol. Il est structuré en plusieurs régions fonctionnelles distinctes : la coiffe (qui protège la pointe et perçoit les stimuli comme la gravité ou l'humidité), le méristème apical (le siège d'une division cellulaire intense), et la zone d'élongation (où les cellules s'allongent pour faire avancer la racine). C'est au niveau de cet apex que s'intègrent les signaux moléculaires complexes." /> 
                      {" "}racinaire est positionné au-dessus de la jonction diagonale séparant le milieu contrôle et le milieu PEG (frontière du gradient). 
                    </p>
                    <p className="italic font-medium text-emerald-700 dark:text-emerald-400">
                      Les boîtes sont replacées verticalement dans la chambre de culture. La racine va alors devoir \&quot;choisir\&quot; sa direction de pousse.
                    </p>
                    <div className="flex justify-center pt-4">
                      <img 
                        src="/pousse-choix.png" 
                        alt="Boîte de Petri illustrant le choix de direction de la racine" 
                        className="max-w-md w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                )
              }
            ]}
          />

          <div className="mt-12 bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-6">2.3 : Phénotypage et Imagerie</h3>
            <p className="mb-8 text-gray-600 dark:text-zinc-400 text-base">Après 5 à 7 jours de stress, nous mesurons la réponse adaptative des plantules.</p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 text-lg">1. Architecture racinaire</h4>
                <p className="text-xs text-gray-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  Les boîtes sont numérisées à haute résolution sur un scanner à plat. Les images obtenues sont analysées sur le logiciel <strong>ImageJ</strong>. Nous mesurons : <strong>la longueur de la racine primaire ainsi que son angle de courbure</strong>. Une analyse de variance (ANOVA) suivie d&apos;un test post-hoc de Tukey HSD est réalisée pour valider la significativité statistique.
                </p>
                <button 
                  onClick={() => setSelectedDetailImage({
                    src: '/imagej-interface.png', 
                    title: 'Analyse via ImageJ',
                    description: "Capture d'écran de l'interface du logiciel ImageJ montrant l'analyse de l'architecture racinaire. La numérisation permet de mesurer précisément la longueur et l'angle de pousse des racines après le transfert sur le système Split-Agar."
                  })}
                  className="w-full group focus:outline-none"
                >
                  <div className="aspect-video relative overflow-hidden rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 cursor-zoom-in">
                    <img 
                      src="/imagej-interface.png" 
                      alt="Interface du logiciel ImageJ en action" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>
                </button>
              </div>
              <div>
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 text-lg">2. Présence d&apos;auxine</h4>
                <p className="text-xs text-gray-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  Pour comprendre comment la racine ajuste son transport d&apos;eau, nous analysons la localisation et de l&apos;intensité de{" "}
                  <Tooltip term="fluorescence" definition="Émission flash de lumière par une protéine spécifique lorsqu'elle est excitée par une source lumineuse d'une longueur d'onde précise. Cette propriété physique est utilisée pour localiser visuellement et quantifier l'activité d'un gène ou la présence d'une molécule en temps réel." /> 
                  {" "}de l&apos;auxine via l&apos;observation au{" "}
                  <Tooltip term="microscope confocal" definition="Appareil permettant l'observation rapide et optimisée pour suivre l'expression génétique ou la localisation de protéines. On utilise ici le ZOE Fluorescent Cell Imager qui utilise une LED verte calibrée sur le spectre d'excitation de la GFP." />.
                </p>
                <div className="grid grid-cols-2 gap-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg p-2 border border-zinc-300">
                  <button 
                    onClick={() => setSelectedDetailImage({
                      src: '/merge_ctl_r3_bas.jpg', 
                      title: 'Controle (Moyenne CTCF: 76,80)',
                      description: "Observation au microscope confocal de la fluorescence GFP (pDR5::GFP) dans l'apex racinaire en condition contrôle (milieu HG). Valeur moyenne mesurée : 76,80 CTCF."
                    })}
                    className="group space-y-1 text-left"
                  >
                    <div className="relative overflow-hidden rounded shadow-sm cursor-zoom-in">
                      <img src="/merge_ctl_r3_bas.jpg" alt="Controle" className="w-full h-32 object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <p className="text-[10px] text-center text-zinc-500 font-medium">Controle (Moyenne: 76,80)</p>
                  </button>
                  <button 
                    onClick={() => setSelectedDetailImage({
                      src: '/merge_ctl_peg_r1_bas.jpg', 
                      title: 'PEG (Moyenne CTCF: 52,65)',
                      description: "Apex racinaire soumis à un stress osmotique homogène (milieu PEG). Valeur moyenne mesurée : 52,65 CTCF."
                    })}
                    className="group space-y-1 text-left"
                  >
                    <div className="relative overflow-hidden rounded shadow-sm cursor-zoom-in">
                      <img src="/merge_ctl_peg_r1_bas.jpg" alt="PEG" className="w-full h-32 object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <p className="text-[10px] text-center text-zinc-500 font-medium">PEG (Moyenne: 52,65)</p>
                  </button>
                  <button 
                    onClick={() => setSelectedDetailImage({
                      src: '/merge_peg_haut_r3_bas.jpg', 
                      title: 'PEG/CONTROLE (Moyenne CTCF: 65,64)',
                      description: "Apex racinaire au niveau de la jonction d'un gradient hydrique (côté PEG vers side HG). Valeur moyenne mesurée : 65,64 CTCF."
                    })}
                    className="group space-y-1 text-left"
                  >
                    <div className="relative overflow-hidden rounded shadow-sm cursor-zoom-in">
                      <img src="/merge_peg_haut_r3_bas.jpg" alt="PEG/CONTROLE" className="w-full h-32 object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <p className="text-[10px] text-center text-zinc-500 font-medium">PEG/CONTROLE (Moyenne: 65,64)</p>
                  </button>
                  <button 
                    onClick={() => setSelectedDetailImage({
                      src: '/merge_peg_haut_r1_bas.jpg', 
                      title: 'CONTROLE/PEG (Moyenne CTCF: 54,28)',
                      description: "Apex racinaire au niveau de la jonction d'un gradient hydrique (côté HG vers side PEG). Valeur moyenne mesurée : 54,28 CTCF."
                    })}
                    className="group space-y-1 text-left"
                  >
                    <div className="relative overflow-hidden rounded shadow-sm cursor-zoom-in">
                      <img src="/merge_peg_haut_r1_bas.jpg" alt="CONTROLE/PEG" className="w-full h-32 object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <p className="text-[10px] text-center text-zinc-500 font-medium">CONTROLE/PEG (Moyenne: 54,28)</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 3 */}
        <section id="chapitre3" className="scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-8 text-center sm:text-left leading-tight">
            Chapitre 3 : La lumière sur notre chemin, les statistiques
          </h2>

          <div className="space-y-12">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-6">3.1 Problématique A : Effet de l&apos;environnement osmotique sur le développement racinaire</h3>
              <div className="grid md:grid-cols-2 gap-12 text-sm sm:text-base">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">SIGNIFICATIF</span>
                    <h4 className="font-semibold text-lg">La Longueur Racinaire</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="max-w-2xl">
                      <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
                        L&apos;
                        <Tooltip term="analyse de variance (ANOVA)" definition="Méthode statistique qui permet de comparer simultanément les moyennes de trois groupes ou plus, afin de déterminer si au moins l'un d'entre eux se distingue de manière significative des autres." /> 
                        {" "}révèle un effet significatif du milieu sur la croissance (F(3,57) = 3.15, p = 0.0318).
                      </p>
                      <div className="relative h-64 bg-white dark:bg-zinc-800 rounded-xl border border-emerald-100 dark:border-emerald-800 overflow-hidden shadow-inner group">
                        <img 
                          src="/plot_a_longueur.png" 
                          alt="Graphe R : Longueur Racinaire" 
                          className="object-contain w-full h-full p-2 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="bg-emerald-50/50 dark:bg-emerald-950/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                      <h5 className="text-emerald-800 dark:text-emerald-300 font-bold text-sm mb-3">Interprétation Scientifique</h5>
                      <div className="space-y-4 text-sm text-gray-700 dark:text-zinc-300 leading-relaxed">
                        <p>
                          Ce graphique révèle deux mécanismes clés de l&apos;adaptation au déficit hydrique :
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <strong className="text-emerald-700 dark:text-emerald-400 block underline decoration-emerald-200">1. Inhibition par stress global (PEG)</strong> 
                            <p className="text-xs">Le milieu homogène réduit la plateforme de turgescence cellulaire, empêchant l&apos;extension des parois et ralentissant l&apos;élongation (moyenne de 1,90 cm).</p>
                          </div>
                          <div className="space-y-2">
                            <strong className="text-emerald-700 dark:text-emerald-400 block underline decoration-emerald-200">2. Hydrostimulation en gradient</strong> 
                            <p className="text-xs">En milieu asymétrique (ctrl/peg), les racines poussent mieux (2,86 cm) que le témoin. La détection du côté favorable induit une réponse active d&apos;exploration.</p>
                          </div>
                        </div>
                        <p className="italic pt-3 border-t border-emerald-100 dark:border-emerald-900/50 text-center text-xs">
                          La racine ne subit pas passivement le stress : elle optimise sa croissance pour fuir la zone sèche et coloniser activement la zone humide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">LIMITE</span>
                    <h4 className="font-semibold text-lg">La Courbure Racinaire (Angle)</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="max-w-2xl">
                      <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
                        L&apos;ANOVA montre un effet global à la limite de la significativité (p = 0.0547). Cependant, le test de Tukey révèle une différence significative (p = 0.0347) entre le témoin et le stress homogène (PEG). 
                        <span className="block mt-1 text-[10px] italic">Note : Une racine verticale = 180°. Plus l&apos;angle est faible, plus la courbure est forte.</span>
                      </p>
                      <div className="relative h-64 bg-white dark:bg-zinc-800 rounded-xl border border-amber-100 dark:border-amber-800 overflow-hidden shadow-inner group">
                        <img 
                          src="/plot_a_angle.png" 
                          alt="Graphe R : Angle de Courbure" 
                          className="object-contain w-full h-full p-2 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="bg-amber-50/50 dark:bg-amber-950/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-800 overflow-hidden shadow-inner group">
                      <h5 className="text-amber-800 dark:text-amber-300 font-bold text-sm mb-3">Interprétation Scientifique</h5>
                      <div className="space-y-4 text-sm text-gray-700 dark:text-zinc-300 leading-relaxed">
                        <p>
                          Ce graphique met en évidence deux comportements contrastés face au manque d&apos;eau :
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <strong className="text-amber-700 dark:text-amber-400 block underline decoration-amber-200 text-xs uppercase tracking-wider">Chaos sous stress PEG</strong> 
                            <p className="text-xs leading-relaxed">La plus forte courbure (129,6°) s&apos;explique par la <strong>perte du gravitropisme</strong> (signal SnRK2 phosphorylant PIN2) combinée à un <strong>flambement mécanique</strong> (buckling) : privée de son guide gravitationnel et de sa rigidité, la racine ondule de façon désordonnée.</p>
                          </div>
                          <div className="space-y-2">
                            <strong className="text-amber-700 dark:text-amber-400 block underline decoration-amber-200 text-xs uppercase tracking-wider">Orientation en gradient</strong> 
                            <p className="text-xs leading-relaxed">Les gradients (≈147°) montrent une courbure intermédiaire et contrôlée. C&apos;est la signature de l&apos;<strong>hydrotropisme actif</strong> : la racine courbe son apex vers le compartiment humide pour s&apos;orienter, sans subir la désorganisation mécanique du stress global.</p>
                          </div>
                        </div>
                        <p className="italic pt-3 border-t border-amber-100 dark:border-amber-900/50 text-center text-xs">
                          Alors que le stress global désorganise la croissance, le gradient révèle une stratégie d&apos;évitement active et structurée.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
                <h4 className="font-bold text-gray-900 dark:text-zinc-100 text-lg">3.2 Problématique B : Rôle de l&apos;auxine à l&apos;apex racinaire (CTCF)</h4>
                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm">
                  La quantité totale d&apos;auxine mesurée par fluorescence (lignée rapportrice d&apos;auxine pDR5::GFP au microscope confocal, quantifiée par le signal{" "}
                  <Tooltip term="CTCF" definition="Corrected Total Cell Fluorescence, métrique mathématique fondamentale utilisée par les chercheurs pour quantifier précisément l'intensité d'un signal fluorescent." />) 
                  {" "}sur un échantillon de 12 plantes n&apos;a pas montré d&apos;effet statistiquement significatif au seuil de 5% :
                </p>
              <div className="space-y-12">
                {/* CTCF vs Longueur */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold rounded">NON SIGNIFICATIF</span>
                    <h4 className="font-semibold text-lg">Relation Auxine (CTCF) & Longueur</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="max-w-2xl">
                      <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
                        Étude de l&apos;influence de la quantité d&apos;auxine à l&apos;apex (N=12) sur la longueur racinaire.
                        <span className="block mt-1 text-[10px] italic font-medium">Corrélation de Pearson : r=−0.207 | R²=0.043 | p=0.518</span>
                      </p>
                      <div className="relative h-64 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-inner group">
                        <img 
                          src="/plot_b_longueur_auxin.png" 
                          alt="Graphe CTCF : Fluorescence vs Longueur" 
                          className="object-contain w-full h-full p-2 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                      <h5 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm mb-3">Interprétation Scientifique</h5>
                      <div className="space-y-4 text-sm text-gray-700 dark:text-zinc-300 leading-relaxed">
                        <p>
                          Les résultats ne montrent <strong>aucun effet statistiquement significatif</strong> de l&apos;auxine sur la longueur (p=0.518). Seuls 4,3% de la variabilité sont expliqués par le signal CTCF.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <strong className="text-zinc-700 dark:text-zinc-300 block underline decoration-zinc-300 text-xs uppercase tracking-wider">Limites de l&apos;échantillon</strong> 
                            <p className="text-xs leading-relaxed text-zinc-500 italic text-justify">Un effectif de 12 plantes est trop faible pour dégager une tendance robuste face au bruit biologique inhérent aux organismes vivants.</p>
                          </div>
                          <div className="space-y-2">
                            <strong className="text-zinc-700 dark:text-zinc-300 block underline decoration-zinc-300 text-xs uppercase tracking-wider">Localisation du signal</strong> 
                            <p className="text-xs leading-relaxed text-zinc-500 italic text-justify">Le CTCF mesure la fluorescence globale à l&apos;apex (niche des cellules souches), alors que l&apos;élongation se produit plus haut, dans la zone d&apos;élongation.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTCF vs Angle */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold rounded">TENDANCE</span>
                    <h4 className="font-semibold text-lg">Relation Auxine (CTCF) & Courbure (Angle)</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="max-w-2xl">
                      <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
                        Étude de l&apos;influence de la quantité d&apos;auxine à l&apos;apex sur l&apos;angle de la racine (180° = droit).
                        <span className="block mt-1 text-[10px] italic font-medium">Corrélation de Pearson : r=0.405 | R²=0.164 | p=0.192</span>
                      </p>
                      <div className="relative h-64 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-inner group">
                        <img 
                          src="/plot_b_angle_auxin.png" 
                          alt="Graphe CTCF : Fluorescence vs Angle" 
                          className="object-contain w-full h-full p-2 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                      <h5 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm mb-3">Interprétation Scientifique</h5>
                      <div className="space-y-4 text-sm text-gray-700 dark:text-zinc-300 leading-relaxed">
                        <p>
                          Une corrélation positive modérée est observée : plus l&apos;auxine est élevée, plus la racine pousse droite. Inversement, les faibles niveaux d&apos;auxine sont associés à des racines déformées.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <strong className="text-zinc-700 dark:text-zinc-300 block underline decoration-zinc-300 text-xs uppercase tracking-wider">Distribution des points</strong> 
                            <p className="text-xs leading-relaxed text-zinc-500 italic text-justify">Les racines sous stress PEG (en rose) cumulent faible auxine et forte déformation, tandis que le témoin maintient un flux d&apos;auxine robuste guidant la croissance verticale.</p>
                          </div>
                          <div className="space-y-2">
                            <strong className="text-zinc-700 dark:text-zinc-300 block underline decoration-zinc-300 text-xs uppercase tracking-wider">Limite méthodologique</strong> 
                            <p className="text-xs leading-relaxed text-zinc-500 italic text-justify">La courbure est causée par une <strong>asymétrie latérale</strong> d&apos;auxine. Le CTCF mesurant l&apos;intensité totale à l&apos;apex, il ne peut pas capter cette distribution gauche/droite.</p>
                          </div>
                        </div>
                        <p className="italic pt-3 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs">
                          Pour valider le rôle de l&apos;auxine dans la courbure, il faudrait mesurer un indice d&apos;asymétrie de fluorescence sur un échantillon plus large (N&gt;30).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className="bg-zinc-900 text-zinc-100 p-8 rounded-3xl border border-zinc-800 space-y-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-ping mr-3"></span>
                CONCLUSION : Valider ou réfuter nos hypothèses ?
              </h3>
              
              <div className="space-y-6 text-zinc-300 text-base">
                <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700">
                  <h4 className="font-bold text-emerald-400 mb-2">OBJ 1 : Le Gradient Hydrique</h4>
                  <p className="leading-relaxed">
                    On s&apos;attendait à ce que la présence d&apos;un gradient de potentiel hydrique dévie la trajectoire de la racine d&apos;Arabidopsis thaliana en opposition à sa trajectoire verticale naturelle (régie par le gravitropisme) pour orienter sa croissance vers le compartiment le plus hydraté (le milieu témoin). Morphologiquement, ce comportement d&apos;évitement du stress (hydrotropisme) se traduit par l&apos;apparition d&apos;un angle de courbure racinaire au niveau de la zone de contact entre les deux géloses.
                  </p>
                </div>

                <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700">
                  <h4 className="font-bold text-emerald-400 mb-2">OBJ 2 : Le Rôle de l&apos;Auxine</h4>
                  <p className="leading-relaxed">
                    Notre hypothèse sur l&apos;auxine se base sur son implication dans le mécanisme cellulaire à l&apos;origine de la courbure hydrotropique. On aurait donc dû observer une accumulation d&apos;auxine du côté en contact avec le milieu stressant PEG. Cette forte concentration locale d&apos;auxine est supposée limiter l&apos;élongation des cellules de ce côté, alors que les cellules situées du côté opposé (côté contrôle, moins concentré en auxine) continuent de s&apos;allonger. Cette différence de vitesse de croissance entre les deux flancs de la racine génère mécaniquement la courbure vers le milieu favorable, ce qui prouverait le lien de l&apos;auxine dans l&apos;hydrotropisme racinaire.
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-800 space-y-6">
                  <p className="text-xl font-bold text-red-400">
                    MAIS ….. nos tests ont été clairs : la totalité de nos hypothèses qui nous intéressent est réfutée au{" "}
                    <Tooltip term="seuil de 5%" definition="Le seuil de significativité de 0,05 est la probabilité maximale que le chercheur accepte de commettre une erreur de type I, c'est-à-dire de conclure à tort qu'il existe un effet ou une différence, alors qu'il n'y en a pas." />.
                  </p>
                  
                  <p className="italic">
                    Est ce que ça veut dire que c&apos;est faux? Est ce que ça veut dire que tout notre raisonnement n&apos;a servi a rien et qu&apos;il manque de cohérence?
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 bg-zinc-800 rounded-xl border border-zinc-700">
                      <h5 className="font-bold text-red-400 mb-2 text-sm">Biais Expérimentaux</h5>
                      <p className="text-xs leading-relaxed text-zinc-400">
                        La réalité c&apos;est qu&apos;il y a énormément de biais dans notre étude, il y a d&apos;abord des biais expérimentaux comme notre matériel, notre méthodologie et notre technique. Le plus flagrant ici est l&apos;échantillon réduit pour chaque condition, en effet plus notre étude est vaste plus elle devient statistiquement robuste. Dans notre cas, les anomalies et surtout les{" "}
                        <Tooltip term="valeurs aberrantes" definition="Donnée expérimentale qui s'écarte de manière extrême, atypique et statistiquement anormale du reste des observations d'un échantillon. Elle peut résulter d'un hasard biologique rare, mais elle est le plus souvent le fruit d'une erreur humaine ou technique." /> 
                        {" "}deviennent la norme. Nos résultats sont alors impactés par ces biais et ne sont pas représentatifs de la réalité.
                      </p>
                    </div>
                    <div className="p-5 bg-zinc-800 rounded-xl border border-zinc-700">
                      <h5 className="font-bold text-emerald-400 mb-2 text-sm">Complexité Biologique</h5>
                      <p className="text-xs leading-relaxed text-zinc-400">
                        Est ce que vous avez également relevé le fait que notre premier test statistique montre un angle significativement marqué dans une condition PEG alors qu&apos;on s&apos;attendait juste à un ralentissement de la croissance ? Ce phénomène absolument inattendu est dû à plusieurs raisons. Comme mentionné plus tôt l&apos;auxine n&apos;est pas seule aux commandes de la réaction d&apos;hydrotropisme. Lors d&apos;un stress osmotique homogène (ici répliqué par la condition PEG), la plante sécrète une hormone de stress : l&apos;acide abscisique (ABA). Cette signalisation active des protéines kinases clés nommées <strong>SnRK2</strong>. Ces protéines vont directement phosphoryler le transporteur d&apos;auxine <strong>PIN2</strong> à la membrane cellulaire. Cette phosphorylation perturbe la polarité normale de l&apos;auxine et réduit fortement la sensibilité de la racine à la gravité la faisant dévier de sa trajectoire standard. C&apos;est pour cette raison qu&apos;on observe une pousse anormale dans la condition PEG et qu&apos;elle est révélée par notre test statistique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapitre 4 */}
        <section id="chapitre4" className="scroll-mt-24">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-8 text-center sm:text-left leading-tight">
            Chapitre 4 : Alors ? C&apos;est quoi la réponse à tout ça ?
          </h2>

          <div className="prose dark:prose-invert max-w-none space-y-12 text-base sm:text-lg">
            <div className="bg-emerald-50 dark:bg-emerald-950/20 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900 space-y-6">
              <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 leading-tight">4.1 Comportement de recherche d&apos;eau (Hydrotropisme adaptatif)</h3>
              <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                Les plantes en situation de gradient ne subissent pas la perte de croissance observée sous stress global. En orientant ou en maintenant leur croissance vers le milieu favorable, elles préservent leur métabolisme. C&apos;est une illustration parfaite de l&apos;adaptation comportementale des plantes : bien que fixées, elles \&quot;choisissent\&quot; la direction de leur développement.
              </p>
              
              <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                Nous pouvons approfondir notre recherche en s&apos;intéressant à d&apos;autres acteurs moléculaires de l&apos;hydrotropisme. Nous avons rapidement mentionné les aquaporines ainsi que l&apos;acide abscissique (ABA) qui jouent un rôle dans l&apos;absorption de l&apos;eau ainsi que dans la signalisation du stress. Il aurait été extrêmement intéressant d&apos;étudier la régulation de ces deux facteurs dans les mêmes conditions de stress chez notre modèle. 
              </p>

              <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                On trouve dans la littérature beaucoup d&apos;arguments montrant leur rôle crucial dans l&apos;adaptation du système racinaire au stress. L&apos;hydrotropisme racinaire repose sur une perception asymétrique d&apos;un gradient du potentiel hydrique, coordonnée par une signalisation cellulaire fine dans la coiffe et le cortex racinaire. Lorsqu&apos;un gradient est détecté, la biosynthèse d&apos;ABA est activée de manière localisée, agissant comme le signal instructif majeur qui gouverne la réponse de courbure au niveau cellulaire (Dietrich et al., 2017).
              </p>

              <p className="text-gray-700 dark:text-zinc-300 leading-relaxed text-base">
                Cet ABA interagit directement avec l&apos;homéostasie hydraulique en régulant l&apos;expression et l&apos;état de{" "}
                <Tooltip 
                  term="phosphorylation" 
                  definition="Condition chimique d'une protéine selon qu'elle possède ou non un ou plusieurs groupements phosphate qui peut activer ou désactiver sa fonction, changer sa localisation dans la cellule ou déclencher une cascade de signalisation en réponse à un stimulus." 
                /> 
                {" "}des aquaporines de la membrane plasmique (les PIP, notamment les sous-familles PIP1 et PIP2), modifiant ainsi drastiquement la conductivité hydraulique cellulaire (Parent et al., 2009 ; Chaumont & Tyerman, 2014).
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Mécanismes Moléculaires Approfondis</h3>
              <p className="text-gray-700 dark:text-zinc-300 text-base italic leading-relaxed">
                Allons voir ce que dit la littérature et tentons de construire un chemin plus robuste à prendre la prochaine fois. Et c&apos;est aussi ça la réalité, souvent on n&apos;obtient pas ce qu&apos;on veut même si on y met du sien pour élaborer un protocole sophistiqué et basé sur des faits robustes. Sachez que même si au sens mathématique c&apos;est un échec, cette expérience nous a énormément appris. Elle nous a forcé à réfléchir à un objectif, à mettre en place un protocole adapté et clair. On apprend aussi à prendre du recul et à identifier nos erreurs. En cherchant des explications dans la littérature, on se rend également compte de la complexité d&apos;un mécanisme qu&apos;on ne remarque généralement même pas.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
                {/* Figure 1: Dietrich / PNAS Slider */}
                <div className="space-y-4">
                  <h4 className="font-bold text-emerald-600">Modèle cellulaire de l&apos;hydrotropisme cortical</h4>
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm h-full flex flex-col">
                    <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden border border-zinc-200">
                      <ImageSlider images={pnasImages} />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <p className="text-[11px] font-bold leading-tight">Référence : Shkolnik, D. et al. (2018). &quot;MIZ1 regulates ECA1 to generate a slow, long-distance phloem-transmitted Ca2+ signal essential for root water tracking in Arabidopsis.&quot; PNAS, 115(38), 9546-9551.</p>
                      <ul className="list-disc pl-4 space-y-1 text-[10px] text-gray-600 dark:text-zinc-400 leading-tight">
                        <li>Le contrôle de la courbure n&apos;est pas coordonné par l&apos;epiderme, mais s&apos;effectue spécifiquement dans le <strong>cortex racinaire</strong>.</li>
                        <li>La protéine clé <strong>MIZ1</strong> et la kinase <strong>SnRK2.2</strong> s&apos;expriment et agissent ensemble dans le cortex pour gouverner l&apos;élongation asymétrique.</li>
                        <li>L&apos;asymétrie de l&apos;eau provoque une accumulation différentielle d&apos;ABA, déclenchant une croissance plus rapide des cellules corticales du côté hydraté par rapport au côté stressé, provoquant ainsi la courbure.</li>
                      </ul>
                      <div className="pt-2 flex flex-col space-y-1">
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8080645/figure/Fig5/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-emerald-600 hover:underline">Lien d&apos;accès direct à la figure (Dietrich)</a>
                        <a href="https://www.pnas.org/doi/10.1073/pnas.1804130115" target="_blank" rel="noopener noreferrer" className="text-[10px] text-sky-600 hover:underline">Étude source des images (Miao et al., 2018)</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Figure 2: Chaumont */}
                <div className="space-y-4">
                  <h4 className="font-bold text-sky-600">Régulation du Gating des Aquaporines</h4>
                  <button 
                    onClick={() => setIsFigure1ModalOpen(true)}
                    className="w-full text-left group h-full"
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-4 transition-transform group-hover:scale-[1.02] shadow-sm h-full flex flex-col text-xs sm:text-sm">
                      <div className="relative aspect-[4/3] bg-white rounded-lg overflow-hidden border border-zinc-200 cursor-zoom-in">
                        <img src="/figure1-regulation.webp" alt="Gating aquaporines" className="object-contain w-full h-full p-2" />
                        <div className="absolute bottom-0 left-0 right-0 bg-sky-600 text-white text-[10px] py-1 text-center font-bold">Cliquez pour agrandir</div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-[11px] font-bold leading-tight">Référence : Chaumont, F., & Tyerman, S. D. (2014). \&quot;Aquaporins: Highly Regulated Channels Controlling Plant Water Relations.\&quot; Plant Physiology, 164(4), 1600-1618.</p>
                        <p className="text-[10px] text-gray-600 dark:text-zinc-400 mt-2 leading-tight">
                          Cette figure détaille la structure 3D d&apos;une aquaporine de type PIP. Elle schématise le mécanisme d&apos;ouverture et de fermeture du canal (*gating*) : en cas de déphosphorylation ou baisse de pH, le pore se ferme. La phosphorylation par des kinases de stress ouvre le pore et permet le passage rapide de l&apos;eau.
                        </p>
                        <span className="text-[10px] text-emerald-600 hover:underline block pt-2">Lien d&apos;accès direct à la figure</span>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Figure 3: Grondin / Signaling */}
                <div className="space-y-4">
                  <h4 className="font-bold text-amber-600">Cascade Moléculaire de Signalisation</h4>
                  <button 
                    onClick={() => setIsFigure3ModalOpen(true)}
                    className="w-full text-left group h-full"
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-4 transition-transform group-hover:scale-[1.02] shadow-sm h-full flex flex-col text-xs sm:text-sm">
                      <div className="relative aspect-[4/3] bg-white rounded-lg overflow-hidden border border-zinc-200 cursor-zoom-in">
                        <img src="/figure3-signaling.webp" alt="Cascade signalisation" className="object-contain w-full h-full p-2" />
                        <div className="absolute bottom-0 left-0 right-0 bg-amber-600 text-white text-[10px] py-1 text-center font-bold">Cliquez pour agrandir</div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-[11px] font-bold leading-tight">Référence : Grondin, A. et al. (2015). \&quot;Aquaporins Contribute to ABA-Triggered Stomatal Closure through OST1-Mediated Phosphorylation of PIP2;1.\&quot; The Plant Cell, 27(7), 1945-1954.</p>
                        <p className="text-[10px] text-gray-600 dark:text-zinc-400 mt-2 leading-tight">
                          Ce diagramme représente la cascade complète : perception de l&apos;ABA par les récepteurs PYR/PYL, activation des kinases SnRK2 (comme OST1), et phosphorylation finale du transporteur <strong>PIP2;1</strong> sur son résidu Sérine 121, déclenchant l&apos;ouverture du canal.
                        </p>
                        <span className="text-[10px] text-emerald-600 hover:underline block pt-2">Lien d&apos;accès direct à la figure</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="mt-12 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 italic text-gray-600 dark:text-zinc-400 text-base leading-relaxed">
                <p>
                  J&apos;aurais adoré travailler cette piste en utilisant le même protocole expérimental que dans cette étude, malheureusement cela aurait demandé beaucoup plus de préparation étant donné la spécificité du matériel biologique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Conclusion & Perspectives</h2>
            <div className="space-y-6 text-emerald-50 leading-relaxed mb-8 text-lg sm:text-xl">
              <p>
                Quand on y pense, on n&apos;est absolument pas amené à regarder les racines des plantes. La végétation est partout mais on ne prend pas réellement le temps de s&apos;intéresser à ses mécanismes.
              </p>
              <p>
                Cette petite étude a permis, le temps d&apos;une expérience, de ralentir et à tenter de comprendre ce qui se passe sous nos pieds, de façon invisible et silencieuse. N&apos;oublions jamais de mettre à l&apos;honneur ces petits mécanismes qui régissent l&apos;existence de la vie et le bien être de la biodiversité.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/remerciements" className="bg-white text-emerald-700 px-6 py-2 rounded-full font-bold hover:bg-emerald-50 transition-colors">
                Voir les Remerciements
              </Link>
              <Link href="/ressources" className="bg-emerald-700/50 backdrop-blur text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 transition-colors border border-emerald-400/30">
                Consulter la Bibliographie
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl opacity-50"></div>
        </section>
      </div>
    </div>
  );
}
