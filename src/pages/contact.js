

function Contact({themeColor}) {
    return (
<div id="kontakt" className="w-screen h-screen z-10 flex flex-col justify-center mt-10 items-center">
            <div className="container flex flex-col items-center">
            <div className=" space-y-10"> 
                    <div style={{ borderColor: themeColor }} className="py-2 border-b-2 flex flex-row"><h2 className="text-2xl font-ivyora font-light tracking-widest">Kontaktoplysninger</h2></div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-row items-center space-x-2">
                         <p style={{ backgroundColor: themeColor }} className="text-sm font-medium tracking-widest p-2 uppercase">TLF</p><p style={{ backgroundColor: themeColor }}  className="text-sm font-medium tracking-widest p-2 uppercase">2272 2015</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                        <p style={{ backgroundColor: themeColor }} className="text-sm font-medium tracking-widest p-2 uppercase">EMAIL</p><p style={{ backgroundColor: themeColor }}  className="text-sm font-medium tracking-widest p-2 uppercase">nata2301@live.dk</p>
                        </div>

                    </div>
            </div>

            </div>

            </div>
    );
  }
  
  export default Contact;