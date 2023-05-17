import { SKILLS } from "./skills.js";

function About({ themeColor }) {

    return (
        <div className="w-screen h-screen z-10 flex flex-col items-center">
            <div className="container flex flex-col items-center mt-10">
            <div className="md:w-1/2 space-y-20"> 
                    <div className="container p-2 md:p-0"><h2 className="text-4xl font-light tracking-widest">Om Natasja</h2></div>
                    <div style={{ borderColor: themeColor }} className={`border-l-2 border-${themeColor} px-3 space-y-2`}>
                    <h2 className="text-2xl font-light tracking-widest">Kort fortalt</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                    </div>
                    <div style={{ borderColor: themeColor }} className={`border-l-2 border-${themeColor} flex flex-col mt-10 px-3`}>
                    <h2 className="text-2xl font-light tracking-widest">Færdigheder</h2>
                    <div className="mt-5 w-full">
                    {SKILLS.map((skill, index) => (
                    <span key={index} style={{ backgroundColor: themeColor }} className="inline-block px-3 py-1 text-sm font-medium text-black mr-2 mb-2 tracking-widest">
                    {skill.name}
                    </span>
                    ))}
                    </div>
                    </div>
            </div>
            </div>
            </div>
    );
  }
  
  export default About;