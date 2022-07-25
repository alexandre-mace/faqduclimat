import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Classic from "./Classic";
import questions from "../data/questions";
import Random from "./Random";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Faq = () => {
    const modes = ['Classique 🤓', 'Aléatoire 🔀']
    const [mode, setMode] = useState(modes[0]);

    return (
        <div className="w-full max-w-2xl pt-10 md:px-8">
            <Tab.Group>
                <Tab.List className="flex space-x-2 rounded-xl border-gray-700 border-opacity-50 bg-gradient-to-r to-indigo-500 from-purple-500 p-2 shadow">
                    {(modes).map((mode) => (
                        <Tab
                            key={mode}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 font-medium leading-5 text-white',
                                    'ring-gray-700 ring-opacity-50 ring-offset-fpurple-500 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-fdark-300 shadow'
                                        : 'bg-fdark-300/50 hover:bg-fpurple-500 hover:text-white'
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
                                <Classic questions={questions}/>
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

export default Faq