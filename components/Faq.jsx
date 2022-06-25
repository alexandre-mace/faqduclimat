import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const Faq = ({questions}) => (
    <div className="w-full">
        <div className="mx-auto w-full max-w-2xl rounded-2xl border-2 border-gray-700 border-opacity-50 bg-fdark-500 p-2">
            {questions.map((question, index) => (
                <QuestionAnswer key={index} index={index} question={question}/>
            ))}
        </div>
    </div>
)

const QuestionAnswer = ({question, index}) => (
    <Disclosure as="div" className={index === 0 ? '' : 'mt-2'}>
        {({ open }) => (
            <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-fdark-300 px-4 py-2 text-left text-sm font-medium text-white hover:bg-fpurple-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>{question.title}</span>
                    <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gray-400`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                    {question.answer}
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
)

export default Faq