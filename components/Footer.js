import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-20 flex flex-col items-center overflow-hidden md:py-40 bg-gradient-radial from-gray-600 via-gray-800 to-black">
      <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            {/* Bloque principal de links */}
            <div className="w-full space-y-12 sm:w-7/12 md:space-y-0 md:justify-start">
              <ul role="list" className="space-y-8 text-center text-gray-300 md:text-left">
                <li>
                  <a href="#" className="hover:text-black transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Blocks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            {/* Bloque de iconos sociales */}
            <div className="w-full space-y-8 text-gray-100 sm:w-5/12">
              <ul role="list" className="space-y-8 text-center md:text-right">
                {socialIcons.map((icon, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center justify-center md:justify-end space-x-3 hover:text-black transition"
                    >
                      {icon.icon}
                      <span>{icon.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Primero TODOS los componentes de íconos
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
    <path d="..." />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
    <path d="..." />
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
    <path d="..." />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
    <path d="..." />
  </svg>
);

const MediumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
    <path d="..." />
  </svg>
);

const PatreonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
    <path d="..." />
  </svg>
);

// DESPUÉS el array de iconos sociales
const socialIcons = [
  { name: 'Github', icon: <GithubIcon /> },
  { name: 'Twitter', icon: <TwitterIcon /> },
  { name: 'YouTube', icon: <YouTubeIcon /> },
  { name: 'Facebook', icon: <FacebookIcon /> },
  { name: 'Medium', icon: <MediumIcon /> },
  { name: 'Patreon', icon: <PatreonIcon /> },
];

export default Footer;
