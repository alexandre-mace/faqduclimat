import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Faq from "./Faq";
import questions from "../data/questions";
import Random from "./Random";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ModeSelector = () => {
    const modes = ['Classique 🤓', 'Aléatoire 🔀']
    const [mode, setMode] = useState(modes[0]);

    return (
        <div className="w-full max-w-2xl pt-10 md:px-8">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-fdark-500 p-2">
                    {(modes).map((mode) => (
                        <Tab
                            key={mode}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-fpurple-500 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-fdark-300 shadow'
                                        : 'hover:bg-fpurple-500 hover:text-white'
                                )
                            }
                        >
                            {mode}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-4">
                    {modes.map((mode, idx) => (
                        <Tab.Panel key={idx}>
                            {idx === 0 &&
                                <Faq questions={questions}/>
                            }
                            {idx === 1 &&
                                <Random questions={questions}/>
                            }
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default ModeSelector