import categories from "./categories";

const questions = [
    {
        title: "Qu’est-ce que le changement climatique ?",
        category: categories.one,
        priority: 1,
        answer:
"- Un changement climatique, ou dérèglement climatique, correspond à une modification durable (de la décennie au million d'années) des paramètres statistiques (paramètres moyens, variabilité) du climat global de la Terre ou de ses divers climats régionaux. Ces changements peuvent être dus à des processus intrinsèques à la Terre, à des influences extérieures ou, plus récemment, aux activités humaines. \n" +
"- Le terme réchauffement climatique désigne l'augmentation de la température moyenne de la surface terrestre en cours aux XXe et XXIe siècles mais aussi, plus généralement, la modification des régimes météorologiques à grande échelle qui en résulte. L'une comme l'autre sont attribuées aux émissions de gaz à effet de serre d'origine humaine : bien qu'il y ait eu des périodes précédentes de changement climatique, depuis le milieu du XXe siècle les activités humaines ont eu un impact sans précédent sur le système climatique de la Terre et ont provoqué des changements à l'échelle mondiale. \n",
        sources: [
            '[https://fr.wikipedia.org/wiki/Variabilit%C3%A9_et_changements_climatiques](https://fr.wikipedia.org/wiki/Variabilit%C3%A9_et_changements_climatiques)',
            '[https://fr.wikipedia.org/wiki/R%C3%A9chauffement_climatique](https://fr.wikipedia.org/wiki/R%C3%A9chauffement_climatique)',
        ]
    },
    {
        title: "Quelles sont les conséquences du changement climatique ?",
        category: categories.one,
        priority: 1,
        answer:
"- En modifiant les équilibres naturels (températures, cycle de l’eau, courants marins et aériens…), le dérèglement climatique est responsable de perturbations importantes. Parmi les conséquences les plus immédiates : l’augmentation de la fréquence, de la durée et de l’intensité des événements météorologiques extrêmes (inondations, tempêtes, cyclones, sécheresses et feux de forêts, épisodes caniculaires…). \n" +
"- D’autres phénomènes à évolution plus lente sont aussi perceptibles : la fonte des glaces et l’élévation du niveau des mers, l’érosion progressive des côtes, la désertification, la raréfaction des ressources, le bouleversement des écosystèmes et la disparition de certaines espèces. \n" +
"- Ces impacts peuvent être très différents d’une région à l’autre, mais ils concernent toute la planète et s’intensifieront au cours des prochaines décennies. \n",
        sources: [
            '[https://www.ipcc.ch/report/sixth-assessment-report-working-group-ii/](https://www.ipcc.ch/report/sixth-assessment-report-working-group-ii/)',
            '[https://www.oxfamfrance.org/climat-et-energie/comprendre-les-changements-climatiques/](https://www.oxfamfrance.org/climat-et-energie/comprendre-les-changements-climatiques/)',
        ]
    },
    {
        title: "Météo et climat: quelle différence ?",
        category: categories.one,
        priority: 1,
        answer:
"- La météorologie, étudie les processus qui pilotent la dynamique de l’atmosphère et leur mise en équations, notamment en vue de la prévision du temps. Cette prévision n’a plus de sens au bout d’une dizaine de jours car l’état de l’atmosphère à un jour et un endroit donné, dépend fortement des conditions initiales. Cela est lié au caractère chaotique de la circulation atmosphérique.\n" +
"- La météo, c'est le temps qu’il fait à un moment et à un endroit donné.\n" +
"- Les prévisions météorologiques n’ont de validité que localement et pour une période courte, de quelques jours. C’est pourquoi une période de froid prononcée localement, ne remet pas en cause la réalité du réchauffement planétaire. De même, une tempête inhabituellement violente n’est pas forcément une preuve de modification du climat. Pour l’affirmer, il faut pouvoir constater que la fréquence d’un événement climatique augmente de façon significative dans une région donnée et sur une longue période. \n" +
"- La climatologie analyse l’état moyen de l’atmosphère et des océans sur les grandes échelles de temps et étudie les processus physiques qui sont pertinents sur le long terme. Pour cette analyse, les conditions initiales n’ont pas d’importance. \n" +
"- L'évolution du climat s'observe sur une plus longue période.\n" +
"- Le climat désigne les valeurs moyennes des paramètres météorologiques (précipitations, températures, nébulosité...) mesurées sur de longues périodes et sur des secteurs géographiques vastes et bien définis, appelés zones climatiques. 30 ans d’observations sont nécessaires pour définir des caractéristiques d’ordre climatique. \n",
        sources: [
            '[https://bonpote.com/comment-ne-plus-confondre-meteo-et-climat](https://bonpote.com/comment-ne-plus-confondre-meteo-et-climat)',
        ]
    },
    {
        title: "Qu'est ce que le GIEC ?",
        category: categories.one,
        priority: 0,
        answer:
"- Le GIEC est le Groupe d’experts intergouvernemental sur l’évolution du climat (GIEC) a été créé en 1988 en vue de fournir des évaluations détaillées de l’état des connaissances scientifiques, techniques et socio-économiques sur les changements climatiques, leurs causes, leurs répercussions potentielles et les stratégies de parade.\n" +
"- Le dernier rapport du GIEC en chiffres : 234 auteurs, 14000 papiers scientifiques, 78007 commentaires des gouvernements et d’experts.\n",
        sources: [
            '[https://www.ipcc.ch/about/](https://www.ipcc.ch/about/)',
        ]
    },
    {
        title: "Que dit le GIEC sur le climat ?",
        category: categories.one,
        priority: 1,
        answer:
"- Il est incontestable que l’influence humaine a réchauffé l’atmosphère, les océans et les terres.\n" +
"- 100% du réchauffement climatique en cours est dû aux activités humaines.\n" +
"- L’ampleur des changements récents dans l’ensemble du système climatique et l’état actuel de nombreux aspects du système climatique sont sans précédent, de plusieurs siècles à plusieurs milliers d’années.\n" +
"- Le changement climatique d’origine humaine affecte déjà de nombreux phénomènes météorologiques et climatiques extrêmes dans toutes les régions du monde.\n",
        sources: [
            '[https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/](https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/)',
            '[https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/](https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/)',
        ]
    },
    {
        title: "Pourquoi la Terre se réchauffe t'elle ?",
        category: categories.one,
        priority: 1,
        answer:
"- Les activités humaines qui rejettent dans l’atmosphère des quantités considérables de gaz à effet de serre, ce qui modifie les valeurs du rayonnement : telle une couverture, les gaz à effet de serre empêchent une partie du rayonnement infrarouge de partir dans l’espace. Un déséquilibre se crée alors dans le bilan. C’est le *forçage radiatif*.\n" +
"- Voici les différentes composantes du forçage radiatif :\n" +
"   - Les gaz à effet de serre \n" +
"   - Les polluants à courte durée de vie \n" +
"   - Les aérosols \n" +
"   - Et leurs interactions avec les nuages \n" +
"   - Le changement d’albédo causé par la modification des sols \n" +
"   - Les causes naturelles : variations solaires et éruptions volcaniques \n" +
"- L’albédo désigne la capacité de la terre à réfléchir les rayonnements lumineux (donc à ne pas les absorber). Les aérosols sont des petites particules solides ou liquides en suspension dans l’air, il agissent comme des mini réflecteurs du rayonnement. \n",
        sources: [
            '[https://fr.wikipedia.org/wiki/For%C3%A7age_radiatif](https://fr.wikipedia.org/wiki/For%C3%A7age_radiatif)',
            '[https://bonpote.com/forcage-radiatif-a-la-base-du-changement-climatique](https://bonpote.com/forcage-radiatif-a-la-base-du-changement-climatique)',
        ]
    },
    {
        title: "Effet de serre et Gaz à effet de serre ?",
        category: categories.one,
        priority: 0,
        answer:
"- L’effet de serre est un phénomène naturel. Présents dans l’atmosphère, certains gaz retiennent une part de l’énergie solaire renvoyée vers l’espace par la Terre sous forme de rayonnement infrarouge.\n" +
"- Ils maintiennent ainsi la température sur Terre à une moyenne d’environ 15 °C. Sans eux, cette moyenne descendrait à -18 °C, interdisant le développement de la vie. \n" +
"- Ces gaz à effet de serre sont présents naturellement dans l’atmosphère, comme le gaz carbonique (CO2), le méthane (CH4) ou la vapeur d’eau (H2O). \n",
        sources: [
            '[https://www.ademe.fr/expertises/changement-climatique/quoi-parle-t](https://www.ademe.fr/expertises/changement-climatique/quoi-parle-t)',
        ]
    },
    {
        title: "Quels secteurs émettent le plus de GES ?",
        category: categories.one,
        priority: 0,
        answer:
            "- Dans le monde voici les 4 secteurs qui emettent le plus de GES en 2016  \n" +
            "   - Industrie (24,2%) \n" +
            "   - Agriculture et usages des sols (18,4%) \n" +
            "   - Bâtiment (17,5%) \n" +
            "   - Transport (16,2%) \n",
        sources: [
            '[https://ourworldindata.org/emissions-by-sector](https://ourworldindata.org/emissions-by-sector)',
        ]
    },
    {
        title: "Emissions de GES et empreinte carbone : quelle différence ?",
        category: categories.one,
        priority: 0,
        answer:
            "- La plupart du temps, lorsque l'on parle des émissions de GES d'un pays, l'import et l'export de sont pas pris en compte, on parle d'emissions \"sur le territoire\".  \n" +
            "- L'empreinte constitue un calcul plus \"réaliste\" car elle prend en compte l'import et l'export" +
            "- L'exemple de la France : ceci explique notamment le fait que la tertiarisation de la France a fait baisser les emissions de GES de la France pour le secteur industrie, mais ces nouvelles émissions délocalisées sont pris en compte dans *l'empreinte carbone*. L'empreinte de la France est quasiment le double de ses émissions.\n",
        sources: [
            '[https://ourworldindata.org/emissions-by-sector](https://ourworldindata.org/emissions-by-sector)',
        ]
    },
    {
        title: "Comment réduire mes émissions de GES / mon empreinte carbone ?",
        category: categories.one,
        priority: 1,
        answer:
        "- Pour avoir une vision globale de ses émissions de GES, il faut calculer son empreinte carbone : https://nosgestesclimat.fr/  \n" +
        "- Les postes d'émissions qui sont en moyenne les plus émetteurs par personne sont : \n" +
        "   - Un régime carné \n" +
        "   - Transport en voiture individuelle \n" +
        "   - Transport en avion \n" +
        "   - Chauffage au gaz ou au fioul \n",
        sources: [
            '[https://nosgestesclimat.fr/](https://nosgestesclimat.fr/)',
            '[https://fr.wikipedia.org/wiki/Empreinte_carbone](https://fr.wikipedia.org/wiki/Empreinte_carbone)'
        ]
    },
    {
        title: "Est-il trop tard pour agir ?",
        category: categories.one,
        priority: 1,
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
        title: "A partir de quelle température peut-on mourir de chaud ?",
        category: categories.one,
        priority: 0,
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
        priority: 0,
        answer:
        "- Le Bangladesh est l’un des pays les plus touchés par les dérèglements climatiques. À cause de la montée des eaux, 700 000 Bangladais perdent déjà chaque année leur foyer. \n",
        sources: [
            '[https://bonpote.com/criminels-climatiques-pourquoi-personne-ne-les-connait/](https://bonpote.com/criminels-climatiques-pourquoi-personne-ne-les-connait/)',
        ]
    },
    {
        title: "Les événements météorologiques extrêmes sont-ils dus au changement climatique ?",
        category: categories.one,
        priority: 0,
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
        priority: 0,
        answer:
        "- L’économie sera durement impactée par le changement climatique, puisque les conditions seront si dures qu’il ne sera tout simplement plus possible de travailler \n" +
        "- Par exemple, l’Inde perd actuellement plus de 100 milliards d’heures de travail par an à cause des vagues de chaleur. C’est de très loin le pays le plus concerné par le sujet, et les chiffres anticipés par un réchauffement de +2°C ou +4°C sont bien supérieurs. \n",
       
        sources: [
            '[https://www.nature.com/articles/s41467-021-27328-y](https://www.nature.com/articles/s41467-021-27328-y)',
        ]
    },
    {
        title: "Pourquoi parles-t'on d'injustice climatique ?",
        category: categories.one,
        priority: 0,
        answer:
        "- La moitié la plus pauvre de la population mondiale n’est responsable que de 10% des émissions de CO2, tandis que les 10% les plus riches de la planète génèrent à eux seuls 50% de ces émissions. \n" +
        "- 1 % des plus riches ont une empreinte carbone huit fois supérieure à la moitié la plus pauvre des Français. \n" +
        "- La fiscalité carbone pèse proportionnellement quatre fois plus sur les 20 % de foyers les plus précaires que sur les 20 % de ménages les plus riches. \n" +
        "- Les plus pauvres sont les plus exposés au changement climatique. \n" +
        "- Les plus jeunes seront les plus exposés au changement climatique. \n" +
        "- \"La vulnérabilité des écosystèmes et des populations au changement climatique varie considérablement d'une région à l'autre et au sein d'une même région (confiance très élevée), sous l'effet de schémas de développement socio-économique croisés, de l'utilisation non durable l'utilisation des océans et des terres, l'inégalité, la marginalisation, les schémas historiques et permanents d'inégalité tels que le colonialisme, et la gouvernance (confiance élevée).\" \n" +
        "- \"Environ 3,3 à 3,6 milliards de personnes vivent dans des contextes qui sont hautement vulnérables au changement climatique (confiance élevée). Une proportion élevée d'espèces est vulnérable au changement climatique (confiance élevée). La vulnérabilité de l'homme et celle des écosystèmes sont interdépendantes (confiance élevée). Les modèles actuels de développement non durable augmentent l'exposition des écosystèmes et des personnes aux risques climatiques.\" \n", 

        sources: [
            '[https://twitter.com/valmasdel/status/1538155011070476290?s=20&t=3uEgre3Fm4VLPzDc-ENPPQ](https://twitter.com/valmasdel/status/1538155011070476290?s=20&t=3uEgre3Fm4VLPzDc-ENPPQ)',
            '[https://report.ipcc.ch/ar6wg2/pdf/IPCC_AR6_WGII_SummaryForPolicymakers.pdf](https://report.ipcc.ch/ar6wg2/pdf/IPCC_AR6_WGII_SummaryForPolicymakers.pdf)',
        ]
    },
    {
        title: "Qu'est ce que l'énergie ?",
        category: categories.one,
        priority: 1,
        answer:
        "- Il s’agit de la grandeur qui caractérise un changement d’état d’un système. Bigre ! Voici bien des mots compliqués ! En fait c’est très simple : cela ne dit rien d’autre que le fait que dès que le monde qui nous entoure (= « un système ») change, de l’énergie entre en jeu, et la mesure de cette énergie mesure le degré de transformation entre avant et après. \n",
        sources: [
            '[https://jancovici.com/transition-energetique/l-energie-et-nous/lenergie-de-quoi-sagit-il-exactement/](https://jancovici.com/transition-energetique/l-energie-et-nous/lenergie-de-quoi-sagit-il-exactement/)',
            '[https://fr.wikipedia.org/wiki/%C3%89nergie](https://fr.wikipedia.org/wiki/%C3%89nergie)',
        ]
    }
]

export default questions
