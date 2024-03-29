import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Answer from "./Answer";
import React, {useState} from "react"
import QuestionCategory from "./QuestionCategory";
import categories from "./../data/categories";
import classNames from "../helpers/classNames";

const Classic = ({questions}) => {
    const [seeMore, setSeeMore] = useState({
        [categories.one]: false,
        [categories.two]: false,
        [categories.three]: false,
    })

    return (
        <div className="w-full">
            <div className="mode-wrapper">
                {questions.map(((category, index) => (
                    <div className={"relative"} key={index}>
                        <div className={classNames(
                            "category-wrapper",
                            (index + 1 === questions.length ? '' : 'mb-16')
                        )} key={index} id={category.category}>
                            {category.questions.map((question, index) => (
                                <React.Fragment key={index}>
                                    {((!seeMore[category.category] && question.priority >= 1) || seeMore[category.category]) &&
                                        <QuestionAnswer key={index} index={index} question={question}/>
                                    }
                                    {index + 1 === category.questions.length &&
                                        <>
                                            <div className={"text-center mt-3"}>
                                                {!seeMore[category.category] &&
                                                    <button onClick={() => setSeeMore({...seeMore, [category.category]: true})} className={"inline-block rounded-lg bg-fdark-300 px-4 py-2 text-left font-medium text-white font-semibold focus:outline-none mt-2"}>
                                                        Voir plus 👀
                                                    </button>
                                                }
                                                {seeMore[category.category] &&
                                                    <button onClick={() => setSeeMore({...seeMore, [category.category]: false})} className={"inline-block rounded-lg bg-fdark-300 px-4 py-2 text-left font-medium text-white font-semibold focus:outline-none mt-2"}>
                                                        Voir moins 👻
                                                    </button>
                                                }
                                            </div>
                                        </>
                                    }
                                </React.Fragment>
                            ))}
                        </div>
                        <QuestionCategory category={category.category}/>
                    </div>
                )))}
            </div>
        </div>
    )
}

const QuestionAnswer = ({question, index}) => (
    <Disclosure key={index} as="div" className={'mt-4'}>
        {({ open }) => (
            <>
                <Disclosure.Button
                    className={`${
                        open ? 'ring-gray-700 ring-opacity-50 focus:outline-none focus:ring-2 rounded-t-xl' : 'rounded-xl'
                    } flex w-full justify-between bg-fdark-300 px-6 py-4 text-left font-medium text-white hover:bg-fdark-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}>
                    <span>{question.title}</span>
                    <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : 'rotate-90 transform'
                        } h-5 w-5 text-gray-400`}
                    />
                </Disclosure.Button>
                <Answer question={question}/>
            </>
        )}
    </Disclosure>
)

export default Classic