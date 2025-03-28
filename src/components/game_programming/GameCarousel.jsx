import React, { useState } from "react";
import check from "../../assets/hero/check.png";
import avatar from "../../assets/hero/avatar.png";
import arrow from "../../assets/hero/arrow.png";
import element1 from "../../assets/game_programming/element1.png";
import element2 from "../../assets/game_programming/element2.png";
import element3 from "../../assets/game_programming/element3.png";
import gem from "../../assets/game_programming/gem.png";
import VideosModal from "./VideosModal";

const GameCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showVideosModal, setShowVideosModal] = useState(false); // Estado para controlar la visibilidad del modal

  const projects = [
    {
      id: 1,
      image: element1,
      title: "Riley's Big Move",
      username: "@tempestdigital_",
      description: "Top-Down Adventure Game",
      details: "Unravel the mystery through hidden clues.",
      link: "https://juju136.itch.io/rileys-big-move",
    },
    {
      id: 2,
      image: element2,
      title: "Glitch",
      username: "@tempestdigital_",
      description: "2D Dungeon Crawler",
      details: "Escape a spaceship through puzzles and combat.",
      link: "https://juju136.itch.io/glitch",
    },
    {
      id: 3,
      image: element3,
      title: "A Pirate's Lost Treasure",
      username: "@tempestdigital_",
      description: "2D Platformer",
      details: "Seek treasure in a perilous jungle.",
      link: "https://the-true-blue.itch.io/a-pirates-lost-treasure",
    },
    {
      id: 4,
      image: element1,
      title: "Robotron Clone",
      username: "@tempestdigital_",
      description: "Top-Down Shooter",
      details: "Survive endless waves of foes.",
      link: "https://dominique-mccormack.itch.io/robotron-clone",
    },
    {
      id: 5,
      image: element2,
      title: "Wizard-Towers",
      username: "@tempestdigital_",
      description: "Tower-Defense Game",
      details: "Defend your territory!",
      link: "https://dominique-mccormack.itch.io/wizard-themed-tower-defense-game",
    },
    {
      id: 6,
      image: gem,
      title: "Sonic The Hedgehog Fan Game",
      username: "@tempestdigital_",
      description: "Gameplay Demo in Unreal Engine",
      details: "3D assets ripped from Sonic games!",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Función para manejar el clic en el botón "View"
  const handleViewClick = () => {
    const currentProject = projects[activeIndex];
    if (currentProject.id === 6) {
      // Si es el proyecto con ID 6 (Sonic), abre el modal de videos
      setShowVideosModal(true);
    } else if (currentProject.link) {
      // Para el resto, abre el enlace externo
      window.open(currentProject.link);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  // Calcular los índices de elementos visibles
  const getPrevIndex = () =>
    (activeIndex - 1 + projects.length) % projects.length;
  const getNextIndex = () => (activeIndex + 1) % projects.length;

  return (
    <>
      <div className="w-full relative overflow-hidden py-8 h-[300px] md:h-[400px] mx-auto max-w-7xl">
        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-blue-600/30 hover:bg-blue-600/50 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-blue-600/30 hover:bg-blue-600/50 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Carousel Items Container */}
        <div
          className="flex items-center justify-center h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Three-element carousel layout */}
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Previous Item - Left Side */}
            <div className="absolute left-33  hidden md:block z-10 opacity-60 scale-75">
              <div className="flex items-center justify-center w-[179px] h-[120px]">
                <div className="flex items-center justify-center backdrop-blur-3xl w-[179px] h-[120px] bg-[#FFFFFF2D] border-4 border-[#FFFFFF47] rounded-4xl">
                  <img
                    src={projects[getPrevIndex()].image}
                    alt={projects[getPrevIndex()].title}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Active Item - Center */}
            <div className="z-30">
              <div className="flex items-center justify-center md:w-[530px] h-[220px]">
                {/* Element container */}
                <div className="flex items-center justify-center backdrop-blur-3xl md:w-[279px] md:h-full w-[165px] h-[125px] bg-[#FFFFFF2D] border-4 border-[#FFFFFF47] rounded-4xl z-20">
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="md:w-[149px] md:h-[149px] w-[127px] h-[107px] object-contain"
                  />
                </div>
                {/* Info container */}
                <div className="items-center -ml-[40px] z-10 justify-center backdrop-blur-3xl md:w-[306px] md:h-full w-[159px] h-[125px] bg-[#FFFFFF2D] border-4 border-[#FFFFFF47] rounded-4xl">
                  <div className="flex flex-col md:items-start  h-full md:pl-12 pl-[45px]">
                    <div className="flex flex-col h-full justify-evenly gap-3 pe-5 md:py-[24px] py-2">
                      <div className="flex w-full gap-2 items-center">
                        <div className="flex h-fit w-fit">
                          <img
                            src={avatar}
                            alt="avatar"
                            className="md:w-[30px] md:h-[30px] w-[10px] h-[10px] object-contain"
                          />
                          <img
                            src={check}
                            alt="check-icon"
                            className="w-[5px] h-[5px]"
                          />
                        </div>
                        <div className="text-white font-rajdhani text-nowrap">
                          <h2 className="text-[7px] md:text-[20px] font-bold text-wrap leading-tight">
                            "{projects[activeIndex].title}"
                          </h2>
                          <h3 className="text-[6px] md:text-[15px] font-semibold  text-white">
                            {projects[activeIndex].username}
                          </h3>
                        </div>
                      </div>
                      <div className="text-white">
                        <h2 className="text-[7px] md:text-[12px] font-bold">
                          {projects[activeIndex].description}
                        </h2>
                        <h3 className="text-[6px] md:text-[12px] font-rajdhani font-semibold text-white">
                          {projects[activeIndex].details}
                        </h3>
                      </div>
                      <button
                        onClick={handleViewClick}
                        className="border-2 border-[#1F29AA] w-[38px] md:w-[88px] ms-auto cursor-pointer"
                      >
                        <div className="font-rajdhani flex items-center gap-0 md:gap-3 bg-gradient-to-r px-[6px] from-[#1194CA] to-[#375191]">
                          <span className="font-medium text-white text-[8px] md:text-[20px]">
                            View
                          </span>
                          <img
                            src={arrow}
                            alt="arrow"
                            className="w-[8px] md:w-[16px] object-contain"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Item - Right Side */}
            <div className="absolute right-33 hidden md:block z-10 opacity-60 scale-75">
              <div className="flex items-center justify-center w-[179px] h-[120px]">
                <div className="flex items-center justify-center backdrop-blur-3xl w-[179px] h-[120px] bg-[#FFFFFF2D] border-4 border-[#FFFFFF47] rounded-4xl">
                  <img
                    src={projects[getNextIndex()].image}
                    alt={projects[getNextIndex()].title}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-blue-500" : "bg-blue-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {showVideosModal && (
        <VideosModal onClose={() => setShowVideosModal(false)} />
      )}
    </>
  );
};

export default GameCarousel;
