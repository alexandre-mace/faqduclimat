import { Disclosure } from '@headlessui/react'
import {useState} from "react";

const Random = ({questions}) => {
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * questions.length));

    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-2xl rounded-2xl bg-fdark-500 p-2">
                {[questions[randomIndex]].map((question, index) => (
                    <QuestionAnswer key={index} index={index} question={question}/>
                ))}
            </div>
            <div className="w-full flex justify-center">
                <button onClick={() => setRandomIndex(Math.floor(Math.random() * questions.length))} className={"inline-block rounded-lg bg-fdark-300 px-5 py-3 text-left font-medium text-white hover:bg-fdark-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 mt-5"}>
                    Nouvelle question aléatoire 🔀
                </button>
            </div>
        </div>
    )
}

const QuestionAnswer = ({question, index}) => (
    <Disclosure as="div" className={index === 0 ? '' : 'mt-2'}>
        {({ open= true }) => (
            <>
                <div className="flex w-full justify-between rounded-lg bg-fdark-300 px-4 py-2 text-left text-sm font-medium text-white">
                    <span>{question.title}</span>
                </div>
                <div className="px-4 pt-4 pb-2 text-sm text-white">
                    {question.answer}
                </div>
            </>
        )}
    </Disclosure>
)

export default Random