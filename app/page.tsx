// "use client"

// import Banner from './banner/page'
// import {SparklesPreview} from './landingpage/page'
// import {NavbarDemo} from './components/navbar';
// import ProjectsPage from './projects/page';
// import SkillsPage from './skills/page';
// import About from './about/page';
// import Contact from './contact/page';

// export default function Home() {
//   return (
//    <>
//       {/* Background Image Layer */}
//       <div className="fixed inset-0 z-[-1] bg-universe"></div>

//       {/* Foreground Content */}
//       <div className="relative z-10">
//         <NavbarDemo />
        
//         <section className="min-h-screen">
//           <SparklesPreview />
//           <About />
//           <ProjectsPage />
//           <SkillsPage />
//           <Contact />
//           {/* <Banner /> */}
//         </section>
//       </div>
//     </>
//   )
// }

"use client"
import Banner from './banner/page'
import LandingPage from './landingpage/page'
import {NavbarDemo} from './components/navbar';
import ProjectsPage from './projects/page';
import SkillsPage from './skills/page';
import About from './about/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <>
      {/* Fixed Background Layer with starry night effect */}
      <div className="bg-universe"></div>
      
      {/* Fixed Mountains */}
      <div className="mountains"></div>
      
      {/* Fixed Blue Celestial Object */}
      <div className="blue-celestial"></div>
      
      {/* Fixed Aurora effect */}
      <div className="aurora"></div>
      
    {/* ✨ Randomized Star Positions */}
    <div className="star star-small" style={{ top: '12vh', left: '18vw' }}></div>
    <div className="star star-small" style={{ top: '27vh', left: '73vw' }}></div>
    <div className="star star-small" style={{ top: '33vh', left: '8vw' }}></div>
    <div className="star star-small" style={{ top: '48vh', left: '88vw' }}></div>
    <div className="star star-small" style={{ top: '53vh', left: '31vw' }}></div>
    <div className="star star-small" style={{ top: '66vh', left: '64vw' }}></div>
    <div className="star star-small" style={{ top: '5vh', left: '54vw' }}></div>
    <div className="star star-small" style={{ top: '22vh', left: '42vw' }}></div>
    <div className="star star-small" style={{ top: '37vh', left: '91vw' }}></div>
    <div className="star star-small" style={{ top: '41vh', left: '5vw' }}></div>
    <div className="star star-small" style={{ top: '17vh', left: '26vw' }}></div>
    <div className="star star-small" style={{ top: '58vh', left: '79vw' }}></div>
    <div className="star star-small" style={{ top: '62vh', left: '14vw' }}></div>
    <div className="star star-small" style={{ top: '13vh', left: '67vw' }}></div>
    <div className="star star-small" style={{ top: '19vh', left: '46vw' }}></div>
    <div className="star star-small" style={{ top: '34vh', left: '97vw' }}></div>
    <div className="star star-small" style={{ top: '29vh', left: '3vw' }}></div>
    <div className="star star-small" style={{ top: '8vh', left: '32vw' }}></div>
    <div className="star star-small" style={{ top: '39vh', left: '82vw' }}></div>
    <div className="star star-small" style={{ top: '60vh', left: '55vw' }}></div>
    <div className="star star-small" style={{ top: '15vh', left: '9vw' }}></div>
    <div className="star star-small" style={{ top: '50vh', left: '70vw' }}></div>
    <div className="star star-small" style={{ top: '44vh', left: '16vw' }}></div>
    <div className="star star-small" style={{ top: '68vh', left: '60vw' }}></div>
    <div className="star star-small" style={{ top: '24vh', left: '36vw' }}></div>
    <div className="star star-small" style={{ top: '10vh', left: '93vw' }}></div>
    <div className="star star-small" style={{ top: '31vh', left: '48vw' }}></div>
    <div className="star star-small" style={{ top: '43vh', left: '11vw' }}></div>
    <div className="star star-small" style={{ top: '57vh', left: '85vw' }}></div>
    <div className="star star-small" style={{ top: '70vh', left: '38vw' }}></div>
      
    {/* ✨ Fixed Medium Stars (Shuffled + Unique) */}
    <div className="star star-medium" style={{ top: '9vh', left: '28vw' }}></div>
    <div className="star star-medium" style={{ top: '19vh', left: '64vw' }}></div>
    <div className="star star-medium" style={{ top: '33vh', left: '12vw' }}></div>
    <div className="star star-medium" style={{ top: '47vh', left: '72vw' }}></div>
    <div className="star star-medium" style={{ top: '52vh', left: '41vw' }}></div>
    <div className="star star-medium" style={{ top: '15vh', left: '82vw' }}></div>
    <div className="star star-medium" style={{ top: '26vh', left: '37vw' }}></div>
    <div className="star star-medium" style={{ top: '39vh', left: '58vw' }}></div>
    <div className="star star-medium" style={{ top: '43vh', left: '19vw' }}></div>
    <div className="star star-medium" style={{ top: '60vh', left: '66vw' }}></div>
    <div className="star star-medium" style={{ top: '11vh', left: '49vw' }}></div>
    <div className="star star-medium" style={{ top: '24vh', left: '76vw' }}></div>
    <div className="star star-medium" style={{ top: '30vh', left: '33vw' }}></div>
    <div className="star star-medium" style={{ top: '36vh', left: '92vw' }}></div>
    <div className="star star-medium" style={{ top: '50vh', left: '10vw' }}></div>
    <div className="star star-medium" style={{ top: '56vh', left: '57vw' }}></div>
    <div className="star star-medium" style={{ top: '13vh', left: '21vw' }}></div>
    <div className="star star-medium" style={{ top: '29vh', left: '69vw' }}></div>
    <div className="star star-medium" style={{ top: '44vh', left: '5vw' }}></div>
    <div className="star star-medium" style={{ top: '61vh', left: '35vw' }}></div>
    <div className="star star-medium" style={{ top: '17vh', left: '90vw' }}></div>
      
    {/* ✨ Fixed Large Stars (Shuffled + Unique) */}
    <div className="star star-large" style={{ top: '7vh', left: '22vw' }}></div>
    <div className="star star-large" style={{ top: '18vh', left: '78vw' }}></div>
    <div className="star star-large" style={{ top: '29vh', left: '58vw' }}></div>
    <div className="star star-large" style={{ top: '39vh', left: '12vw' }}></div>
    <div className="star star-large" style={{ top: '48vh', left: '83vw' }}></div>
    <div className="star star-large" style={{ top: '15vh', left: '33vw' }}></div>
    <div className="star star-large" style={{ top: '34vh', left: '69vw' }}></div>
    <div className="star star-large" style={{ top: '43vh', left: '24vw' }}></div>
    <div className="star star-large" style={{ top: '55vh', left: '11vw' }}></div>
    <div className="star star-large" style={{ top: '21vh', left: '91vw' }}></div>
    <div className="star star-large" style={{ top: '13vh', left: '61vw' }}></div>
    <div className="star star-large" style={{ top: '30vh', left: '6vw' }}></div>
    <div className="star star-large" style={{ top: '42vh', left: '50vw' }}></div>
    <div className="star star-large" style={{ top: '59vh', left: '39vw' }}></div>
    <div className="star star-large" style={{ top: '25vh', left: '73vw' }}></div>
      
      {/* Fixed Shooting stars */}
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      
      {/* Scrollable Foreground Content */}
      <div className="relative z-10 min-h-auto">
        <NavbarDemo />
        <section className="min-h-auto">
          <LandingPage />
        </section>
        <section className="min-h-auto">
          <About />
        </section>
        <section className="min-h-auto">
          <ProjectsPage />
        </section>
        <section className="min-h-auto">
          <SkillsPage />
        </section>
        <section className="min-h-auto">
          <Contact />
        </section>
        {/* <Banner /> */}
      </div>
    </>
  )
}