import { useFormik } from "formik";
import { basicSchema } from "../schemas/schema";
export default function Contact() {
    const onSubmit = () =>{
        console.log("Submitted");
    }
    const {values, errors, isSubmitting, touched, handleBlur, handleChange} = useFormik({
        initialValues: {
            name:"",
            email:"",
            age:"",
            password:""
        },
    validationSchema: basicSchema,
    onSubmit,
    })
return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center bg-white">
        <h1 className="font-bold uppercase text-5xl mx-4 inline-block text-slate-700 text-center">Contact Section</h1>
        <span className='relative text-slate-700 mb-8'>
            <div className="after:h-1 after:w-24 after:bg-slate-700 after:absolute after:left-10 after:top-1/2 before:h-1 before:w-24 before:bg-slate-700 before:absolute before:right-10 before:top-1/2">
                <i className="fa-solid fa-star py-2 after:clear"></i>
            </div>
        </span>
        <form className="flex flex-col items-start min-w-[21rem] mb-8" autoComplete="off">
            <label className="block mb-2 px-3 text-sm font-medium text-gray-900 " htmlFor="name">Name:</label>

            <input style={errors.name && touched.name ? {borderColor: "red"}:{borderColor:""}} className="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="name" type="text" value={values.name} onChange= {handleChange} onBlur={handleBlur} placeholder="Enter your Name" />
            {errors.name && touched.name ? <p className="text-red-800 text-[0.75em]">{errors.name}</p> :""}
            <label  className="block mb-2 px-3 text-sm font-medium text-gray-900 " htmlFor="age">Age:</label>

            <input style={errors.age && touched.age ? {borderColor: "red"}:{borderColor:""}}  className="bg-gray-50  border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="age" type="number" value={values.age} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your Age" />
            {errors.age && touched.age ? <p className="text-red-800 text-[0.75em]">{errors.age}</p> :""}

            <label className="block mb-2 px-3 text-sm font-medium text-gray-900 " htmlFor="email">Email:</label>

            <input style={errors.email && touched.email ? {borderColor: "red"}:{borderColor:""}}  className="bg-gray-50  border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your Email" />
            {errors.email && touched.email ? <p className="text-red-800 text-[0.75em]">{errors.email}</p> :""}

            <label className="block mb-2 px-3 text-sm font-medium text-gray-900 " htmlFor="password">Password:</label>

            <input style={errors.password && touched.password ? {borderColor: "red"}:{borderColor:""}}  className="bg-gray-50  border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your Password" />
            {errors.password && touched.password ? <p className="text-red-800 text-[0.75em]">{errors.password}</p> :""}

            <button disabled={isSubmitting} className= "bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-6 py-2.5 text-center mt-4 disabled:opacity-35" type="submit">Submit</button>
        </form>
    </div>
)
}
