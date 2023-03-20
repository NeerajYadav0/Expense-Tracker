import React from 'react'

const obj=[
    {
        type:"Savings",
        color:"#f9c74f",
        percent:45,
    },
    {
        type:"Investment",
        color:"#f9c74f",
        percent:20,
    },
    {
        type:"Expense",
        color:"#f9c74f",
        percent:10,
    }
]
export default function Labels() {
  return (
    <>
    {obj.map((data,index)=>{ return <LabelComponent key={index} data={data}></LabelComponent>})};
    </>
  )
}

function LabelComponent({data}){
    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{background:data.color}}></div>
                <h3 className='text-md'>{data.type}</h3>
            </div>
            <h3 className='font-bold'>{data.percent}%</h3>
        </div>
    )
}
