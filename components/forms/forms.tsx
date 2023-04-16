import styles from "@/styles/forms.module.scss"
import Image from "next/image";
import { useEffect, useState } from "react";

import { SurveyViews } from "./survey";
import { JoinViews } from "./join";
import FormComponent from "./formComponent";

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
      <div className={`${styles.forms_section}`}>
        {formType === "survey" ? <FormComponent
            currentView={currentView}
            setCurrentView={setCurrentView}
            views={SurveyViews}
          /> : <FormComponent
            currentView={currentView}
            setCurrentView={setCurrentView}
            views={JoinViews} 
          /> 
        }
      </div>

      <div className={`${styles.image_section}`}>
        <Image
          src={"sign_up.svg"}
          alt={"Sign Up"}
          width={450}
          height={450}
        />
      </div>
    </>
  )
}

export default Forms;
