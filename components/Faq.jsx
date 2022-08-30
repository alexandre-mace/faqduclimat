import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import Classic from "./Classic";
import questions from "../data/questions";
import Random from "./Random";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Faq = () => {
    const modes = [
        {
            name: 'Mode classique',
            emoji: '🤓'
        },
        {
            name: 'Mode aléatoire',
            emoji: '🔀'
        }
    ]
    const [selectedMode, setSelectedMode] = useState(modes[0]);

    return (
        <div className="w-full max-w-2xl pt-10 md:px-8 -translate-y-40">
            <Tab.Group>
                <Tab.List className="flex space-x-5 rounded-xl border-gray-700 border-opacity-50 shadow">
                    {(modes).map((mode, idx) => (
                        <Tab
                            onClick={() => setSelectedMode(mode)}
                            key={idx}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg p-0.5 font-medium leading-5 text-white focus:outline-none',
                                    selected
                                        ? 'bg-fdark-300 bg-fred-500 bg-gradient-to-r to-forange-500 from-fred-500'
                                        : 'bg-fdark-300 hover:bg-fdark-400'
                                )
                            }
                        >
                            <div className={
                                classNames(
                                    'w-full rounded-lg bg-fdark-300 p-5',
                                )}
                                >
                                <div className={
                                    classNames(
                                        'bg-fdark-200 inline-block rounded-xl p-2 text-xl',
                                        (mode.name === selectedMode.name)
                                            ? 'bg-fred-500 bg-gradient-to-r to-forange-500 from-fred-500'
                                            : ''
                                    )
                                }>
                                    {mode.emoji}
                                </div>
                                <div className={"text-lg mt-2"}>
                                    {mode.name}
                                </div>
                            </div>
                        </Tab>
                    ))}
                </Tab.List>
                {selectedMode.name === modes[0].name &&
                    <div className={"mt-14 text-center"}>
                        <span className={"text-2xl font-semibold mb-6 block"}>Navigation rapide</span>
                        <div>
                            {questions.map((category, i) => (
                                <a href={'#' + category.category} key={i} className={`cursor-pointer text-white bg-fdark-300 hover:bg-gradient-to-r hover:from-fred-500 hover:to-forange-500 inline-block rounded-lg py-2 px-4 mr-4`}>{category.category}</a>
                            ))}
                        </div>
                    </div>
                }
                <Tab.Panels className="mt-24">
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