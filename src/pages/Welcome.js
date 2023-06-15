import SvgComponent from "../components/svgcomponent";

function Welcome({themeColor}) {
    return (
        <div id="welcome" className="w-screen h-[calc(100vh_-_10rem)] z-10 flex flex-col justify-center items-center overflow-x-hidden">
            <div>
            <SvgComponent themeColor={themeColor} />
            </div>
            <div className="absolute z-10 md:bottom-20 bottom-10 text-center space-y-2">
            <h2 className="font-ivyora font-thin text-lg md:text-2xl tracking-widest text-[#2A2538]">MULTIMEDIEDESIGNER</h2>
            <h1 className="font-ivyora font-medium text-xl md:text-3xl tracking-widest text-[#2A2538]">NATASJA CLEMMENSEN</h1>
            </div>
        </div>
    );
  }
  
  export default Welcome;