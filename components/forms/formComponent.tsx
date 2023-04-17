import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "@/styles/forms.module.scss"
import {ref, push} from "firebase/database"
import { db } from "../firebase";

interface FormComponentPropsType {
  views: ReactNode[]
  currentView: number
  setCurrentView: Dispatch<SetStateAction<number>>
}

const FormComponent = ({views, currentView, setCurrentView}: FormComponentPropsType) => {
  const nextView = () => {
    setCurrentView( currentView >= views.length ? views.length : currentView + 1);
  }

  const prevView = () => {
    setCurrentView( currentView <= 1 ? 1 : currentView - 1);
  }

  return (
    <div className="flex flex-col gap-40 w-[100%] items-start justify-between">
      <form className={`${styles.view_section}`}>
        {
          views.map(( view, index ) => {
            return (
              <div key={index + 1} className={`${styles.view} ${currentView === index + 1 ? styles.active : styles.hidden}`}>
                {view}
              </div>
            )
          })
        }
      </form>

      <div className={`${styles.form_buttons}`}>
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

        {
          currentView === views.length && <button
            disabled={currentView != views.length ? true : false}
            onClick={() => {}}
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
