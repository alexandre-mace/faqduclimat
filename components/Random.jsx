import { Disclosure } from '@headlessui/react'
import {useState} from "react";
import Answer from "./Answer";

const Random = ({questions}) => {
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * questions.length));

    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-2xl rounded-2xl bg-gradient-to-r to-indigo-500 from-purple-500 p-3 shadow">
                {[questions[randomIndex]].map((question, index) => (
                    <>
                        <div className={`mb-2 text-fdark-300/90 font-bold bg-fdark-200/25 inline-block rounded-lg py-1 px-3`}>{question.category}</div>
                        <QuestionAnswer key={index} index={index} question={question}/>
                    </>
                ))}
            </div>
            <div className="w-full flex justify-center">
                <button onClick={() => setRandomIndex(Math.floor(Math.random() * questions.length))} className={"inline-block rounded-lg bg-gradient-to-r to-purple-500 from-indigo-500 px-5 py-3 text-left font-medium text-white font-semibold focus:outline-none focus:ring focus:ring-purple-500/40 focus:ring-opacity-75 mt-5"}>
                    Nouvelle question aléatoire 🔀
                </button>
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