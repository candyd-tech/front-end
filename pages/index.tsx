import ReactFullpage from '@fullpage/react-fullpage';
import homePages from "@/components/home/homeSlides";
import Head from "next/head";


const Home = () => {
  return (
    <div className={ `min-h-screen` }>
      <Head>
        <title>Capture your Candyd Moments</title>
        <meta name="description"
          content="Campus quest with your friends, completing tasks and following clues to create your own memory lane. Sign up for an offbeat and vibrant way of capturing your campus experience!" />
      </Head>
      <ReactFullpage
        licenseKey={"gplv3-license"}
        navigation
        credits= {{enabled: true, label: 'Made with fullPage.js', position: 'right' }}
        dragAndMove={"fingersonly"}
        parallax={true}
        render={() =>
        (
          <ReactFullpage.Wrapper>
            {homePages.map(({ key, component }) => (
              <div key={key} className="section">
                {component}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )
        }
      />
    </div>
  )
}

export default Home
