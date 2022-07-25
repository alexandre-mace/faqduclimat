import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Answer from "./Answer";
import React from "react"
import QuestionCategory from "./QuestionCategory";

const Classic = ({questions}) => (
    <div className="w-full">
        <div className="mode-wrapper">
            {questions.map((question, index) => (
                <React.Fragment key={index}>
                    {((index > 1 && question.category !== questions[index - 1].category) || index === 0) &&
                        <div className={`${index === 0 ? '' : 'mt-3'}`}>
                            <QuestionCategory question={question}/>
                        </div>
                    }
                    <QuestionAnswer key={index} index={index} question={question}/>
                </React.Fragment>
            ))}
        </div>
    </div>
)

const QuestionAnswer = ({question, index}) => (
    <Disclosure key={index} as="div" className={'mt-2'}>
        {({ open }) => (
            <>
                <Disclosure.Button
                    className={`${
                        open ? 'ring-gray-700 ring-opacity-50 focus:outline-none focus:ring-2' : ''
                    } flex w-full justify-between rounded-lg bg-fdark-300 px-4 py-2 text-left  font-medium text-white hover:bg-fpurple-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}>
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