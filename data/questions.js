const categories = {
    one: '🥵 Climat',
    two: '🌍 Énergie',
    three: '🥼 Biodiversité',
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
        answer: "Non, il n'est pas trop tard pour agir sur le réchauffement planétaire : \"le réchauffement devrait plus ou moins s’arrêter lorsque les émissions de dioxyde de carbone (CO2) seront nulles, ce qui signifie que l’Homme a le pouvoir de choisir son avenir climatique\" \n",
        sources: [
            'https://www.youtube.com/watch?v=iiKuUElvGhM',
            'https://www.carbonbrief.org/explainer-will-global-warming-stop-as-soon-as-net-zero-emissions-are-reached/',
            'https://bonpote.com/existe-t-il-vraiment-une-inertie-climatique-de-20-ans/'
        ]
    },
    {
        title: "3",
        category: categories.two,
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda, cumque debitis doloremque dolores facere iste iure modi, nostrum, obcaecati pariatur reprehenderit tenetur. Accusamus amet commodi esse est eum, nihil.\n",
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
