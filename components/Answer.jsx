import {Disclosure} from "@headlessui/react";
import ReactMarkdown from "react-markdown";

const Answer = ({question, random = false}) => {
        return (
            <>
                    {!random &&
                        <Disclosure.Panel className="p-4 mt-2 text-white bg-fdark-300 rounded-lg prose dark:prose-invert max-w-none">
                                <AnswerContent question={question}/>
                        </Disclosure.Panel>
                    }
                    {random &&
                        <Disclosure as={random ? "div" : "div"} className="p-4 mt-2 text-white bg-fdark-300 rounded-lg prose dark:prose-invert max-w-none">
                                <AnswerContent question={question}/>
                        </Disclosure>
                    }
            </>

        )
}

const AnswerContent = ({question}) => (
    <>
            <ReactMarkdown className=''>{question.answer}</ReactMarkdown>
            <hr className={"mt-8 mb-4"}/>
            <div className={"font-semibold"}>Sources</div>
            <ul className={"mt-2"}>
                    {question.sources.map((source, index) => (<li key={index}><a className={"hover:text-gray-200"} href={source}>{source}</a></li>))}
            </ul>
    </>
)

export default Answer