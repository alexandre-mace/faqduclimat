import { Disclosure } from '@headlessui/react'
import {useState} from "react";
import React from "react";
import Answer from "./Answer";
import QuestionCategory from "./QuestionCategory";
import {ChevronUpIcon} from "@heroicons/react/solid";
import JSConfetti from 'js-confetti'

const Random = ({questions}) => {
    const [randomCategory, setRandomCategory] = useState(Math.floor(Math.random() * questions.length));
    const [randomQuestion, setRandomQuestion] = useState(questions[randomCategory].questions[Math.floor(Math.random() * questions[randomCategory].questions.length)]);

    const newRandomIndex = () => {
        const questionsWithoutCurrent = questions.map(category => category.questions.filter((question) => question.title !== randomQuestion.title))
        const randomCategory = Math.floor(Math.random() * questionsWithoutCurrent.length)
        setRandomCategory(randomCategory)
        setRandomQuestion(questionsWithoutCurrent[randomCategory][Math.floor(Math.random() * questionsWithoutCurrent[randomCategory].length)])
        jsConfetti.addConfetti({
            emojis: ['🔥'],
        })
    }

    const jsConfetti = new JSConfetti()

    return (
        <div className="w-full">
            <div className="w-full flex justify-center mb-20">
                <button onClick={() => newRandomIndex()} className={"inline-block rounded-lg bg-gradient-to-r to-forange-500 from-fred-500 px-6 py-4 hover:shadow-lg hover:ring-1 hover:ring-forange-500 text-left font-medium text-white font-semibold focus:outline-none"}>
                    Nouvelle question aléatoire 🔀
                </button>
            </div>
            <div className="mode-wrapper relative mb-10">
                <QuestionCategory category={questions[randomCategory].category}/>
                <QuestionAnswer question={randomQuestion}/>
            </div>
        </div>
    )
}

const QuestionAnswer = ({question, index}) => (
    <Disclosure as="div" className={'mt-2'}>
        <div
            className={`ring-gray-700 ring-opacity-50 rounded-t-xl flex w-full justify-between bg-fdark-300 px-6 py-4 text-left font-medium text-white`}>
            <span>{question.title}</span>
            <ChevronUpIcon
                className={'rotate-180 transform h-5 w-5 text-gray-400'}
            />
        </div>
        <Answer question={question} random={true}/>
    </Disclosure>
)

export default Random