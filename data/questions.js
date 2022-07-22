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
            '[https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/](https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/)',
            '[https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/'](https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/'),
        ]
    },
    {
        title: "Est-il trop tard pour agir ?",
        category: categories.one,
        answer: 
        "- Non, il n'est pas trop tard pour agir sur le réchauffement planétaire : \"le réchauffement devrait plus ou moins s’arrêter lorsque les émissions de dioxyde de carbone (CO2) seront nulles, ce qui signifie que l’Homme a le pouvoir de choisir son avenir climatique\" \n" +
        "- Cependant, certains changements comme la fonte des glaciers sont irréversibles et vont se produire sur plusieurs siècles. \n",
       
        sources: [
            '[https://www.youtube.com/watch?v=iiKuUElvGhM](https://www.youtube.com/watch?v=iiKuUElvGhM)',
            '[https://www.carbonbrief.org/explainer-will-global-warming-stop-as-soon-as-net-zero-emissions-are-reached/](https://www.carbonbrief.org/explainer-will-global-warming-stop-as-soon-as-net-zero-emissions-are-reached/)',
            '[https://bonpote.com/existe-t-il-vraiment-une-inertie-climatique-de-20-ans/](https://bonpote.com/existe-t-il-vraiment-une-inertie-climatique-de-20-ans/)',
            '[https://www.novethic.fr/actualite/environnement/climat/isr-rse/science-meme-avec-un-rechauffement-limite-a-2-c-la-fonte-des-glaces-pourrait-etre-irreversible-et-entrainer-une-montee-des-oceans-catastrophique-146591.html](https://www.novethic.fr/actualite/environnement/climat/isr-rse/science-meme-avec-un-rechauffement-limite-a-2-c-la-fonte-des-glaces-pourrait-etre-irreversible-et-entrainer-une-montee-des-oceans-catastrophique-146591.html)'
        ]
    },
    {
        title: "Mourir de chaud ?",
        category: categories.one,
        answer: 
        "- Le mélange de chaleur et d’humidité est à un certain seuil insupportable pour l’humain et même en excellente santé, cela peut être mortel en seulement quelques heures. Dans un monde plus chaud, le stress thermique humide peut se produire pendant des mois et dans plusieurs régions du monde, y compris dans les régions densément peuplées. \n" +
        "- Les conséquences sont très inégalitaires et sans adaptation ni réduction importante et rapide de nos émissions de GES, la fréquence avec laquelle le seuil limite du thermomètre humide sera atteint voire dépassé sera de plus en plus importante. \n" +
        "- La valeur d’un thermomètre humide de 35°C est souvent présentée comme létale. Mais cette valeur est théorique, et les dernières études (avec résultats empiriques) montrent que cette valeur serait plutôt autour de 31°C. \n",
       
        sources: [
            '[https://bonpote.com/mourir-de-chaud-a-quel-degre-la-temperature-devient-elle-mortelle/](https://bonpote.com/mourir-de-chaud-a-quel-degre-la-temperature-devient-elle-mortelle/)',
            '[Actual and simulated weather data to evaluate wet bulb globe temperature and heat index as alerts for occupational heat-related illness](https://www.tandfonline.com/doi/abs/10.1080/15459624.2018.1532574)',
            '[Trend analysis of Humidex as a heat discomfort index using Mann-Kendall and Sen’s slope estimator statistical tests](https://ehemj.com/article-1-950-fa.pdf)',
            '[https://www.omnicalculator.com/physics/wet-bulb#what-is-the-wet-bulb-temperature](https://www.omnicalculator.com/physics/wet-bulb#what-is-the-wet-bulb-temperature)',
        ]
    },
    {
        title: "Migrer ou mourir ?",
        category: categories.one,
        answer: 
        "- Le Bangladesh est l’un des pays les plus touchés par les dérèglements climatiques. À cause de la montée des eaux, 700 000 Bangladais perdent déjà chaque année leur foyer. \n" +
        sources: [
            '[https://bonpote.com/criminels-climatiques-pourquoi-personne-ne-les-connait/](https://bonpote.com/criminels-climatiques-pourquoi-personne-ne-les-connait/)',
        ]
    },
    {
        title: "Les évenements météorologiques extrêmes sont-ils vraiment dus au changement climatique ?",
        category: categories.one,
        answer: 
        "- 2022: La vague de chaleur qui frappe l’Inde et le Pakistan depuis début mars a été rendue trente fois plus probable par le changement climatique. \n" +
        "- 2019/2020 Des feux aussi sévères que ceux survenus en Australie sont 9 fois plus probables dans le climat actuel que pour un climat typique des années 1900 \n" +
        "- 2020: Les feux survenus en Sibérie sont 600 fois plus probables dans le climat actuel que dans un climat préindustriel.   \n",
       
        sources: [
            '[https://www.worldweatherattribution.org/about/](https://www.worldweatherattribution.org/about/)',
            '[https://www.worldweatherattribution.org/wp-content/uploads/India_Pak-Heatwave-scientific-report.pdf](https://www.worldweatherattribution.org/wp-content/uploads/India_Pak-Heatwave-scientific-report.pdf)',
            '[https://www.worldweatherattribution.org/bushfires-in-australia-2019-2020/](https://www.worldweatherattribution.org/bushfires-in-australia-2019-2020/)',
            '[https://www.worldweatherattribution.org/siberian-heatwave-of-2020-almost-impossible-without-climate-change/](https://www.worldweatherattribution.org/siberian-heatwave-of-2020-almost-impossible-without-climate-change/)',
        ]
    },
    {
        title: "L'inaction climatique coute-t'elle plus cher que l'action climatique ?",
        category: categories.one,
        answer: 
        "- L’économie sera durement impactée par le changement climatique, puisque les conditions seront si dures qu’il ne sera tout simplement plus possible de travailler \n" +
        "- Par exemple, l’Inde perd actuellement plus de 100 milliards d’heures de travail par an à cause des vagues de chaleur. C’est de très loin le pays le plus concerné par le sujet, et les chiffres anticipés par un réchauffement de +2°C ou +4°C sont bien supérieurs. \n",
       
        sources: [
            '[https://www.nature.com/articles/s41467-021-27328-y](https://www.nature.com/articles/s41467-021-27328-y)',
        ]
    },
    {
        title: "Les activistes climats sont-ils des dangereux radicaux ?",
        category: categories.one,
        answer: "« Les activistes climats sont souvent décrits comme des dangereux radicaux mais les dangereux radicaux sont les pays qui augmentent la production des énergies fossiles ». Antonio Guterres, secrétaire général de l’ONU, à propos du dernier rapport du GIEC. \n",
        sources: [
            '[https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/](https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/)'
        ]
    },
]

export default questions
