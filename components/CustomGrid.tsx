import React from 'react'

const CustomGrid = () => {
    return (
        <div className='py-20 space-y-6' id="testimonials">
            <h1 className="heading">
                Testing {' '}
                <span className="text-purple">Custom Grid Layout</span>
            </h1>

            <div className="w-full mt-12 grid md:grid-cols-3 gap-10">
                <div className=" lg:col-span-2 lg:row-span-2   min-h-[150px] rounded-lg bg-orange-500 shadow"></div>
                <div className=" lg:col-span-1 lg:row-span-1      min-h-[150px] rounded-lg bg-teal-500 shadow"></div>

                <div className=" lg:col-span-1 md:row-span-1       min-h-[150px] rounded-lg bg-blue-500 shadow"></div>

                <div className=" lg:col-span-1 lg:row-span-1   min-h-[150px] rounded-lg bg-blue-500 shadow"></div>
                <div className=" lg:col-span-2 lg:row-span-2      min-h-[150px] rounded-lg bg-teal-500 shadow"></div>

                <div className=" lg:col-span-1 lg:row-span-1       min-h-[150px] rounded-lg bg-orange-500 shadow"></div>
            </div>
        </div>
    )
}

export default CustomGrid