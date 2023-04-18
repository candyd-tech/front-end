import styles from "@/styles/anim.module.scss"


export const ArrowBottom = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    width={800}
    height={800}
    fill="#000"
    transform="rotate(90)"
    className={`${styles.arrow}`}
    viewBox="0 0 91 91"
  >
    <path d="M36.6 43.5C31.1 49 25.7 54.8 20.7 60.8 15.6 67 8.7 74.5 8 82.7c-.1 1.3 1.5 2.5 2.7 2 7.7-3.1 13.1-11.4 18.6-17.4 6.7-7.3 13.6-14.4 20.9-21 2.8-2.5 1.9-7.3-1.2-9.1-12.7-7.2-22-18.4-29.3-31C15-1.9 2.2 5.6 7.2 13.5c7.6 12.2 17.4 22.3 29.4 30z"
      className={ `st0 ${styles.upperPath}` }
    />
    <path d="M72.9 43.5C67.3 49 62 54.8 57 60.8c-5 6.3-12 13.7-12.7 21.9-.1 1.3 1.5 2.5 2.7 2 7.7-3.1 13.1-11.4 18.6-17.4 6.7-7.3 13.6-14.4 20.9-21 2.8-2.5 1.9-7.3-1.2-9.1-12.7-7.2-22-18.4-29.3-31-4.7-8.1-17.5-.6-12.5 7.3 7.6 12.2 17.4 22.3 29.4 30z"
      className={ `st0 ${styles.lowerPath}` }
    />
  </svg>
)
