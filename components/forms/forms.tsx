import styles from "@/styles/forms.module.scss"
import Image from "next/image";
import { useEffect, useState } from "react";

import { SurveyViews } from "./survey";
import { JoinViews } from "./join";
import FormComponent from "./formComponent";

const JOIN_IMAGES: string[] = [
  "sign_up.svg", "sign_up.svg"
]

const SURVEY_IMAGES: string[] = [
  "sign_up.svg", "sign_up.svg", "sign_up.svg", "sign_up.svg", "sign_up.svg"
]

const Forms = ({formType}: {formType: "survey" | "join"}) => {
  const [currentView, setCurrentView] = useState(1);

  useEffect(() => {
    setCurrentView(1);
    return () => {
      setCurrentView(1);
    }
  }, [])

  return (
    <>
      <div className={`${styles.forms_section} w-full md:w-[1/2] flex-1 lg:flex-[0.6]`}>
        {formType === "survey" ? <FormComponent
            currentView={currentView}
            setCurrentView={setCurrentView}
            views={SurveyViews}
            formType={formType}
          /> : <FormComponent
            currentView={currentView}
            setCurrentView={setCurrentView}
            views={JoinViews} 
            formType={formType}
          /> 
        }
      </div>

      <div className={`${styles.image_section} flex-1 lg:flex-[0.4] hidden lg:flex`}>
        { formType === "survey" ? 
            SURVEY_IMAGES.map(( imgage, index ) => {
              return <div key={index} className={`${currentView === index + 1 ? styles.active : styles.hidden }`}>
                <Image
                  src={imgage}
                  alt={"Sign Up"}
                  fill style={{
                    objectFit: 'scale-down'
                  }}
                />
              </div>
            }) : 
            JOIN_IMAGES.map(( imgage, index ) => {
              return <div key={index} className={`${currentView === index + 1 ? styles.active : styles.hidden }`}>
                <Image
                  src={imgage}
                  alt={"Sign Up"}
                  fill style={{
                    objectFit: 'scale-down'
                  }}
                />
              </div>
            })
        }
      </div>
    </>
  )
}

export default Forms;
