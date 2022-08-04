import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Answer from "./Answer";
import React, {useState} from "react"
import QuestionCategory from "./QuestionCategory";
import categories from "./../data/categories";

const Classic = ({questions}) => {
    const [seeMore, setSeeMore] = useState({
        [categories.one]: false,
        [categories.two]: false,
        [categories.three]: false,
    })

    return (
        <div className="w-full">
            <div className="mode-wrapper">
                {questions.map((question, index) => (
                    <React.Fragment key={index}>
                        {((!seeMore[question.category] && question.priority >= 1) || seeMore[question.category]) &&
                        <>
                            {((index > 1 && question.category !== questions[index - 1].category) || index === 0) &&
                                <div className={`${index === 0 ? '' : 'mt-3'}`}>
                                    <QuestionCategory question={question}/>
                                </div>
                            }
                            <QuestionAnswer key={index} index={index} question={question}/>
                        </>
                        }
                        {(
                            (!questions[index + 1]) || (questions[index + 1] && question.category !== questions[index + 1].category)
                        ) &&
                            <div className={"text-center"}>
                                {!seeMore[question.category] &&
                                    <button onClick={() => setSeeMore({...seeMore, [question.category]: true})} className={"inline-block rounded-lg bg-gradient-to-r to-purple-900 from-fdark-300 px-4 py-2 text-left font-medium text-white font-semibold focus:outline-none focus:ring focus:ring-purple-500/40 focus:ring-opacity-75 mt-2"}>
                                    Voir plus 👀
                                    </button>
                                }
                                {seeMore[question.category] &&
                                    <button onClick={() => setSeeMore({...seeMore, [question.category]: false})} className={"inline-block rounded-lg bg-gradient-to-r to-purple-900 from-indigo-900 px-4 py-2 text-left font-medium text-white font-semibold focus:outline-none focus:ring focus:ring-purple-500/40 focus:ring-opacity-75 mt-2"}>
                                        Voir moins 👻
                                    </button>
                                }
                            </div>
                        }
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

const QuestionAnswer = ({question, index}) => (
    <Disclosure key={index} as="div" className={'mt-2'}>
        {({ open }) => (
            <>
                <Disclosure.Button
                    className={`${
                        open ? 'ring-gray-700 ring-opacity-50 focus:outline-none focus:ring-2 rounded-t-lg' : 'rounded-lg'
                    } flex w-full justify-between bg-fdark-300 px-4 py-2 text-left font-medium text-white hover:bg-fpurple-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}>
                    <span>{question.title}</span>
                    <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gray-400`}
                    />
                </Disclosure.Button>
                <Answer question={question}/>
            </>
        )}
    </Disclosure>
)

export default Classic