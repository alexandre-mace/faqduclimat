import React from "react";

const QuestionCategory = ({question}) => {
    return (
        <div className={`text-white font-semibold bg-gradient-to-r to-indigo-900/80 from-purple-900/80 inline-block rounded-lg py-1 px-3`}>{question.category}</div>
    )
}

export default QuestionCategory