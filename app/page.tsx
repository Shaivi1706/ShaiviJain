import Banner from './banner/page'
import {SparklesPreview} from './landingpage/page'
import {NavbarDemo} from './components/navbar';
import ProjectsPage from './projects/page';
import SkillsPage from './skills/page';
import About from './about/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <>
    <div className="bg-white dark:bg-black">
      <NavbarDemo />
        <section className=" min-h-screen bg-white dark:bg-black">
          <div className="">
            {/* <SparklesPreview/> */}
            <About/>
            <ProjectsPage/>
            <SkillsPage/>
            <Contact/>
            
             {/* <Banner />  */}
          </div>
        </section> 
    </div>
    </>
  )
}
// "use client"
// import Banner from './banner/page'
// import {SparklesPreview} from './landingpage/page'
// import {NavbarDemo} from './components/navbar';

// export default function Home() {
//   return (
//     <>
//       {/* Your original content (commented out) */}
//       {/* 
//       <div className="bg-white dark:bg-black">
//         <NavbarDemo />
//         <section className="h-screen bg-white dark:bg-black">
//           <div className="h-full">
//             <SparklesPreview/>
//             <Banner />
//           </div>
//         </section>
//       </div> 
//       */}
      
//       {/* Fixed star implementation - Tailwind approach */}
//       <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
//         {/* Star */}
//         <div 
//           className="absolute w-1 h-1 bg-white rounded-full animate-pulse shadow-sm"
//           style={{
//             top: '56.7%',
//             left: '49.2%',
//             filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))'
//           }}
//         ></div>
        
//         {/* Orbiting Planet */}
//         <div 
//           className="planet animate-orbit-medium absolute"
//           style={{
//             ...({ '--orbit-distance': '190px' } as React.CSSProperties),
//             animationDelay: '5s',
//             animationDuration: '25s'
//           }}
//         >
//           <div 
//             className="rounded-full relative glow-outline"
//             style={{
//               width: '18px',
//               height: '18px',
//               background: 'rgb(107, 147, 214)'
//             }}
//           ></div>
//         </div>
//       </div>
//       <style jsx>{`
//         .planet {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//         }
        
//         .animate-orbit-medium {
//           animation: orbit var(--animation-duration, 25s) linear infinite;
//           animation-delay: var(--animation-delay, 5s);
//         }
        
//         @keyframes orbit {
//           0% {
//             transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-distance, 190px)) rotate(0deg);
//           }
//           100% {
//             transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-distance, 190px)) rotate(-360deg);
//           }
//         }
        
//         .glow-outline {
//           box-shadow: 0 0 10px rgba(107, 147, 214, 0.6), 0 0 20px rgba(107, 147, 214, 0.4);
//         }
//       `}</style>
//     </>
//   )
// }