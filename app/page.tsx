import Banner from './banner/page'
import {SparklesPreview} from './landingpage/page'
import {NavbarDemo} from './components/navbar';

export default function Home() {
  return (
    <>
    <div className="bg-white dark:bg-black">
      <NavbarDemo />
        <section className="h-screen  bg-white dark:bg-black">
          <div className="h-full">
            <SparklesPreview/>
            {/* <Banner />  */}
          </div>
        </section> 
    </div>
      </>
  )
}