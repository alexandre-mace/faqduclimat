import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Answer from "./Answer";

const Classic = ({questions}) => (
    <div className="w-full">
        <div className="mx-auto w-full max-w-2xl rounded-2xl bg-gradient-to-r to-indigo-500 from-purple-500 p-3">
            {questions.map((question, index) => (
                <>
                    {((index > 1 && question.category !== questions[index - 1].category) || index === 0) &&
                        <div className={`${index === 0 ? '' : 'mt-3'} text-white font-semibold bg-gradient-to-r to-indigo-900/80 from-purple-900/80 inline-block rounded-lg py-1 px-3`}>{question.category}</div>
                    }
                    <QuestionAnswer key={index} index={index} question={question}/>
                </>
            ))}
        </div>
    </div>
)

const QuestionAnswer = ({question, index}) => (
    <Disclosure as="div" className={'mt-2'}>
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