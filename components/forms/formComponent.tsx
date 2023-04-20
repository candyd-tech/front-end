import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import styles from "@/styles/forms.module.scss"
import { db } from "../firebase";
import { Poppins } from "next/font/google"
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const poppins800 = Poppins({
  weight: '700',
  subsets: [ "latin" ]
})

interface FormComponentPropsType {
  formType: "survey" | "join"
  views: ReactNode[]
  currentView: number
  setCurrentView: Dispatch<SetStateAction<number>>
}

const FormComponent = ({formType}: FormComponentPropsType) => {
  const router = useRouter()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [excitment, setExcitment] = useState("");

  const submitForm = async () => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/ 

    if (name != "" && excitment != "") {
      if (re.test(email)) {
        try {
          const docRef = await addDoc(collection(db, "formData"), {
            name, email, excitment
          });
          console.log(docRef.id);
          setName("")
          setEmail("")
          setExcitment("")

          router.push("/done")
        } catch (e) {
          console.error(e);
        }
      } else {
        toast("Please Enter a valid email address", {
          className: styles.toast
        })
      }
    } else {
      toast("All fields must be field", {
        className: styles.toast
      })
    }
  }

  return (
    <div className="pt-8 flex flex-col gap-10 w-full md:w-[85%] items-start justify-between">
      <div>
        <h1 className={ `pb-3 text-2xl lg:text-4xl ${poppins800.className}` }>
          {formType == "survey" ? "Be the First to Know!" : "Be the First to Know!"}
        </h1>

        <p>Sign up now to receive exclusive perks and benefits when our product launches</p>
      </div>

      <form className={`${styles.view_section}`}>
        <div className={`
          ${styles.view} ${styles.active} gap-8 md:gap-12
        `}>
          <div>
            <label htmlFor="">Name</label>
            <input required value={name} onChange={e => setName(e.target.value)}type="text" />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input required value={email} onChange={e => setEmail(e.target.value)} type="email" />
          </div>

          <div>
            <label htmlFor="">What do you think? Feedback, insights, and initial thoughts are all welcome, be it good, bad, or neutral!</label>
            <input value={excitment} onChange={e => setExcitment(e.target.value)} type="text" />
          </div>
        </div>
        {/*
          views.map(( view, index ) => {
            return (
              <div key={index + 1} className={`
                ${styles.view}
                ${currentView === index + 1 ? styles.active : styles.hidden}
              `}>
                {view}
              </div>
            )
          })
        */}
      </form>

      <div className={`${styles.form_buttons} flex flex-col gap-4 md:gap-10 w-full`}>
        {/*
        <div className="flex justify-between gap-4 w-full">
          <button
            onClick={prevView}
            className={``}
            disabled={currentView <= 1 ? true : false}
          >Previous</button>

          <button
            onClick={nextView}
            className={``}
            disabled={currentView >= views.length ? true : false}
          >Next</button>
      </div>
            ${currentView != views.length ? 'opacity-0' : 'opacity-100'}
*/}
        <button
          className={`
          `}
          onClick={submitForm}
        >Join Now</button>
        <ToastContainer hideProgressBar={true} autoClose={3000} />
      </div>
    </div>
  )
}

export default FormComponent;
