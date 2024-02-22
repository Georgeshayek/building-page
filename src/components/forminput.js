"use client"
import { useState } from "react"
import styles from "./form.module.css"
const FormInputs=()=>{
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [issue,setIssue]=useState()
    const [result,setResult]=useState()
    const [isChecked,setIsChecked]=useState(false)
    const reset=()=>{
        setName('')
        setEmail('')
        setIssue('')
        setIsChecked(false)
    }
    const isCheckedChangeHandler=()=>{
        setIsChecked(prev=>!prev)
    }
    const nameChangeHandler=(e)=>{
        setName(e.target.value)
    }
    const emailChangeHandler=(e)=>{
        setEmail(e.target.value)
    }
    const issueChangeHandler=(e)=>{
        setIssue(e.target.value)
    }
    const onSubmitHandler=(e)=>{
        setResult({
            name,
            email,
            issue,
            isChecked

        })
        reset()
        e.preventDefault()
    }

    return(
    <div className={styles.backgroundImage} >
    <div className="container mx-auto">
        <h1 className=" text-center text-4xl p-6">Contact us</h1>
<form className="max-w-[600px] mx-auto my-5" onSubmit={onSubmitHandler} >
    <div className="flex flex-col justify-center items-center">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" value={name} onChange={nameChangeHandler} className="w-[50%] p-1 rounded-md m-1 border-2 border-slate-400 max-lg:w-[80%]" required/>

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" value={email} onChange={emailChangeHandler} className="w-[50%] p-1 rounded-md m-1 border-2 border-slate-400 max-lg:w-[80%]" required/>

    <label htmlFor="issue">Issue:</label>
    <textarea id="issue" name="issue" rows="8" value={issue} onChange={issueChangeHandler} className="w-[60%] p-1 rounded-lg border-2 border-slate-400 max-lg:w-[80%]" required></textarea>
    <div>
    <input
          type="checkbox"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={isCheckedChangeHandler}
        /> do you like us?
        </div>
    <button className="bg-white border-2 border-slate-400 block p-3 mt-1 rounded-lg m-auto hover:bg-[#555] hover:text-white hover:cursor-pointer hover:mx-auto max-lg:w-[70%]" type="submit">Submit</button>
     
    </div>

</form>
{result&&<p className="text-green-500 text-center"> hi {result.name} we received your concern will contact you on {result.email}, </p>}
{result&&result.isChecked&&<p className="text-green-500 text-center">Glad you like us!!</p> }
{result&&!result.isChecked&&<p className="text-green-500 text-center">Hopefully we can change your mind in the near future!!</p> }
</div>
</div>)
}
export default FormInputs