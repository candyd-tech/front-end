import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "@/styles/forms.module.scss"
import {ref, push} from "firebase/database"
import { db } from "../firebase";
import { Poppins } from "next/font/google"

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

const FormComponent = ({formType, views, currentView, setCurrentView}: FormComponentPropsType) => {
  const nextView = () => {
    setCurrentView( currentView >= views.length ? views.length : currentView + 1);
  }

  const prevView = () => {
    setCurrentView( currentView <= 1 ? 1 : currentView - 1);
  }

  return (
    <div className="pt-8 flex flex-col gap-10 w-full md:w-[85%] items-start justify-between">
      <h1 className={ `text-2xl lg:text-4xl ${poppins800.className}` }>
        {formType == "survey" ? "Survey" : "Join"}
      </h1>

      <form className={`${styles.view_section}`}>
        {
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
        }
      </form>

      <div className={`${styles.form_buttons} flex flex-col gap-4 md:gap-10 w-full`}>
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

        {
          <button
            className={`
              ${currentView != views.length ? 'opacity-0' : 'opacity-100'}
            `}
            disabled={currentView != views.length ? true : false}
            onSubmit={() => {
              push(ref(db, 'users/'), {
                something: "in the way",
              })
            }}
          >Submit</button>
        }
      </div>
    </div>
  )
}

export default FormComponent;
