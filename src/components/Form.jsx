import React from 'react'
import {useForm} from 'react-hook-form';
import List from './List';
export default function Form() {

    const {register, handleSubmit, resetField} =useForm();
    const onSubmit=(data)=>{
        console.log(data);
    }
  return (
    <div className="form max-w-sm mx-auto w-96 ">
        <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

        <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div className="input-group">
                    <input {...register('name')} className='form-input' type="text" placeholder='Sallary, House rent, SIP' />
                </div>
                <select {...register('type')}  className='form-input'>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expense" >Expense</option>
                    <option value="Savings" >Savings</option>
                </select>

                <div className="input-group">
                    <input {...register('amount')} className='form-input' type="text" placeholder='Amount' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full '>Make Transaction</button>
                </div>
            </div>
        </form>
        <List></List>
    </div>
  )
}
