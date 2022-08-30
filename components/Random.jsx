import { Disclosure } from '@headlessui/react'
import {useState} from "react";
import React from "react";
import Answer from "./Answer";
import QuestionCategory from "./QuestionCategory";

const Random = ({questions}) => {
    const [randomCategory, setRandomCategory] = useState(Math.floor(Math.random() * questions.length));
    const [randomQuestion, setRandomQuestion] = useState(questions[randomCategory].questions[Math.floor(Math.random() * questions[randomCategory].questions.length)]);

    const newRandomIndex = () => {
        const questionsWithoutCurrent = questions.map(category => category.questions.filter((question) => question.title !== randomQuestion.title))
        console.log(questionsWithoutCurrent)
        const randomCategory = Math.floor(Math.random() * questionsWithoutCurrent.length)
        setRandomCategory(randomCategory)
        console.log(randomCategory)
        console.log(questionsWithoutCurrent[randomCategory].questions)
        setRandomQuestion(questionsWithoutCurrent[randomCategory][Math.floor(Math.random() * questionsWithoutCurrent[randomCategory].length)])
    }

    return (
        <div className="w-full">
            <div className="w-full flex justify-center mb-20">
                <button onClick={() => newRandomIndex()} className={"inline-block rounded-lg bg-gradient-to-r to-forange-500 from-fred-500 px-4 py-2 text-left font-medium text-white font-semibold focus:outline-none focus:ring focus:ring-purple-500/40 focus:ring-opacity-75"}>
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
        <Answer question={question} random={true}/>
    </Disclosure>
)

export default Random