const categories = {
    one: '🥵 Climat',
    two: '💪 Énergie',
    three: '🌍 Biodiversité',
}

const questions = [
    {
        title: "Que dit le GIEC sur le climat ?",
        category: categories.one,
        answer:
"- Il est incontestable que l’influence humaine a réchauffé l’atmosphère, les océans et les terres.\n" +
"- 100% du réchauffement climatique est dû aux activités humaines.\n" +
"- L’ampleur des changements récents dans l’ensemble du système climatique et l’état actuel de nombreux aspects du système climatique sont sans précédent, de plusieurs siècles à plusieurs milliers d’années.\n" +
"- Le changement climatique d’origine humaine affecte déjà de nombreux phénomènes météorologiques et climatiques extrêmes dans toutes les régions du monde.\n",
        sources: [
            'https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/',
            'https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/',
        ]
    },
    {
        title: "Est-il trop tard pour agir ?",
        category: categories.one,
        answer: 
        "- Non, il n'est pas trop tard pour agir sur le réchauffement planétaire : \"le réchauffement devrait plus ou moins s’arrêter lorsque les émissions de dioxyde de carbone (CO2) seront nulles, ce qui signifie que l’Homme a le pouvoir de choisir son avenir climatique\" \n" +
        "- Cependant, certains changements comme la fonte des glaciers sont irréversibles et vont se produire sur plusieurs siècles. \n",
       
        sources: [
            'https://www.youtube.com/watch?v=iiKuUElvGhM',
            'https://www.carbonbrief.org/explainer-will-global-warming-stop-as-soon-as-net-zero-emissions-are-reached/',
            'https://bonpote.com/existe-t-il-vraiment-une-inertie-climatique-de-20-ans/',
            'https://www.novethic.fr/actualite/environnement/climat/isr-rse/science-meme-avec-un-rechauffement-limite-a-2-c-la-fonte-des-glaces-pourrait-etre-irreversible-et-entrainer-une-montee-des-oceans-catastrophique-146591.html'
        ]
    },
    {
        title: "L'inaction climatique coute-t'elle plus cher que l'action climatique ?",
        category: categories.one,
        answer: 
        "- L’économie sera durement impactée par le changement climatique, puisque les conditions seront si dures qu’il ne sera tout simplement plus possible de travailler \n" +
        "- Par exemple, l’Inde perd actuellement plus de 100 milliards d’heures de travail par an à cause des vagues de chaleur. C’est de très loin le pays le plus concerné par le sujet, et les chiffres anticipés par un réchauffement de +2°C ou +4°C sont bien supérieurs. \n",
       
        sources: [
            'https://www.nature.com/articles/s41467-021-27328-y',
        ]
    },
    {
        title: "Les activistes climats sont-ils des dangereux radicaux ?",
        category: categories.one,
        answer: "« Les activistes climats sont souvent décrits comme des dangereux radicaux mais les dangereux radicaux sont les pays qui augmentent la production des énergies fossiles ». Antonio Guterres, secrétaire général de l’ONU, à propos du dernier rapport du GIEC. \n",
        sources: [
            'https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/'
        ]
    },
    {
        title: "4",
        category: categories.three,
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda, cumque debitis doloremque dolores facere iste iure modi, nostrum, obcaecati pariatur reprehenderit tenetur. Accusamus amet commodi esse est eum, nihil.\n",
        sources: [
            'https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/'
        ]
    },
    {
        title: "5",
        category: categories.three,
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda, cumque debitis doloremque dolores facere iste iure modi, nostrum, obcaecati pariatur reprehenderit tenetur. Accusamus amet commodi esse est eum, nihil.\n",
        sources: [
            'https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/'
        ]
    },    {
        title: "6",
        category: categories.three,
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda, cumque debitis doloremque dolores facere iste iure modi, nostrum, obcaecati pariatur reprehenderit tenetur. Accusamus amet commodi esse est eum, nihil.\n",
        sources: [
            'https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/'
        ]
    },    {
        title: "7",
        category: categories.three,
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda, cumque debitis doloremque dolores facere iste iure modi, nostrum, obcaecati pariatur reprehenderit tenetur. Accusamus amet commodi esse est eum, nihil.\n",
        sources: [
            'https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/'
        ]
    },
]

export default questions
