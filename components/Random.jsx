import { Disclosure } from '@headlessui/react'
import {useState} from "react";
import React from "react";
import Answer from "./Answer";
import QuestionCategory from "./QuestionCategory";

const Random = ({questions}) => {
    const [randomQuestion, setRandomQuestion] = useState(questions[Math.floor(Math.random() * questions.length)]);

    const newRandomIndex = () => {
        const questionsWithoutCurrent = questions.filter((question) => question !== randomQuestion)
        setRandomQuestion(questions[Math.floor(Math.random() * questionsWithoutCurrent.length)])
    }

    return (
        <div className="w-full">
            <div className="w-full flex justify-center mb-3">
                <button onClick={() => newRandomIndex()} className={"inline-block rounded-lg bg-gradient-to-r to-purple-500 from-indigo-500 px-4 py-2 text-left font-medium text-white font-semibold focus:outline-none focus:ring focus:ring-purple-500/40 focus:ring-opacity-75"}>
                    Nouvelle question aléatoire 🔀
                </button>
            </div>
            <div className="mode-wrapper">
                {[randomQuestion].map((question, index) => (
                    <React.Fragment key={index}>
                        <QuestionCategory question={question}/>
                        <QuestionAnswer key={index} index={index} question={question}/>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

const QuestionAnswer = ({question, index}) => (
    <Disclosure as="div" className={'mt-2'}>
        <Answer question={question} random={true}/>
    </Disclosure>
)

export default Random