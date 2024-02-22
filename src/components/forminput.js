import styles from "./form.module.css"
const FormInputs=()=>{

    return(
    <div className={styles.backgroundImage} >
    <div className="container mx-auto">
        <h1 className=" text-center text-4xl p-6">Contact us</h1>
<form className="max-w-[600px] mx-auto my-5" action="/" method="POST">
    <div className="flex flex-col justify-center items-center">
    <label htmlfor="name">Name:</label>
    <input type="text" id="name" name="name" className="w-[50%] p-1 rounded-md m-1 border-2 border-slate-400 max-lg:w-[80%]" required/>

    <label htmlfor="email">Email:</label>
    <input type="email" id="email" name="email" className="w-[50%] p-1 rounded-md m-1 border-2 border-slate-400 max-lg:w-[80%]" required/>

    <label htmlfor="issue">Issue:</label>
    <textarea id="issue" name="issue" rows="8" className="w-[60%] p-1 rounded-lg border-2 border-slate-400 max-lg:w-[80%]" required></textarea>

    <button className="bg-white border-2 border-slate-400 block p-3 mt-1 rounded-lg m-auto hover:bg-[#555] hover:text-white hover:cursor-pointer hover:mx-auto max-lg:w-[70%]" type="submit">Submit</button>
    </div>

</form>

</div>
</div>)
}
export default FormInputs