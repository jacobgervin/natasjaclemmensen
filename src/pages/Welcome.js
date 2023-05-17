import SvgComponent from "../components/svgcomponent";

function Welcome({themeColor}) {
    return (
        <div className="w-screen h-[calc(100vh_-_10rem)] z-10 flex flex-col justify-center items-center overflow-x-hidden">
            <div>
            <SvgComponent themeColor={themeColor} />
            </div>
            <div className="absolute md:bottom-20 bottom-10 text-center">
            <h2 className="font-ivyora font-light text-2xl">Grafisk designer</h2>
            <h1 className="font-ivyora font-light text-3xl">Natasja Clemmensen</h1>
            </div>
        </div>
    );
  }
  
  export default Welcome;