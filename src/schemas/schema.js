import * as yup from "yup";
const passwordRules = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z]). {5,}$/;
export const basicSchema = yup.object().shape({
    name: yup.string().min(3,"Please enter valid name").required("Please enter your Name"),
    email: yup.string().email('Please enter valid email').required("Please enter your email"),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(5, "must be over 5 characters").matches(passwordRules,{message: "must contain min 5 characters, 1 upper case and a lower case letter and one number"}).required("Required")
})