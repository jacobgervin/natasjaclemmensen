import { Myprojects } from "./myprojects";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Carousel } from 'flowbite-react';

function Projects({themeColor}) {
  const projects = Myprojects;
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageId) => {
    const selectedProject = projects.find((project) => project.id === imageId);
    setSelectedImage(selectedProject);
    document.documentElement.style.overflow = 'hidden'; // Prevent scrolling on the root element
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.documentElement.style.overflow = 'auto'; // Enable scrolling on the root element
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('modal')) {
      closeImage();
    }
  };

  return (
    <div id="projekter" className="w-screen z-10 flex flex-col justify-center items-center mt-44 bg-[#FEFDFF]">
      <div className="container p-2 md:p-0">
        <h2 className="text-4xl font-light font-ivyora tracking-widest text-[#2A2538]">Projekter</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mt-5 p-2 md:p-0">
  <AnimatePresence>
    {projects.map((project) => (
      <motion.div
        whileTap={{ scale: 0.9 }}
        layoutId={project.id}
        key={project.id}
        onClick={() => openImage(project.id)}
        className="image-container overflow-hidden mb-8 cursor-pointer"
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          className="w-full aspect-square"
          src={project.image}
          alt={project.title}
        />
      </motion.div>
    ))}
  </AnimatePresence>
</div>


{selectedImage && (
  <AnimatePresence>
    <motion.div
      onClick={closeModal}
      style={{ backgroundColor: `${themeColor}90` }}
      className={`modal z-50 fixed top-0 left-0 h-screen w-screen  flex flex-col justify-center items-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content md:w-2/3 md:w-3/4 w-screen bg-[#FEFDFF] max-h-screen overflow-y-scroll">
        <div className="flex flex-col md:flex-row mb-5">
          {selectedImage.slides && (
            <Carousel className="aspect-square w-full " slideInterval={9000}>
              {selectedImage.slides.map((slide) => (
                <img
                  className="aspect-square w-fit p-2"
                  key={slide}
                  alt="..."
                  src={slide}
                />
              ))}
            </Carousel>
          )}

          <div className="p-2 space-y-5 mt-2 flex flex-col md:justify-center max-w-lg">
            <p className="text-xl font-light font-ivyora tracking-widest">
              {selectedImage.name}
            </p>
            <p>{selectedImage.about}</p>
            <div>
              {selectedImage.tools.map((tool) => (
                <span
                  key={tool}
                  style={{ backgroundColor: themeColor }}
                  className="inline-block px-3 py-1 text-sm font-medium text-black mr-2 mb-2 tracking-widest"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center ">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: themeColor }}
            className="p-2 w-full flex flex-row justify-center bg-[#2A2538]"
            onClick={closeImage}
          >
            <motion.svg
              whileHover={{ rotate: 90 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FEFFF5"
              className="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
)}

    </div>
  );
}

export default Projects;
