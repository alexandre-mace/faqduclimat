import React from "react";

const Category = ({category}) => {
    return (
        <div className={`absolute-category text-white font-semibold bg-gradient-to-r to-forange-500 from-fred-500 inline-block rounded-xl pt-1 px-3 pb-10`}>{category}</div>
    )
}

export default Category