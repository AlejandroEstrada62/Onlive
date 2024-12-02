import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-gray-400 p-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        <div>
          <h6 className="text-gray-300 font-bold mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Program</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Chat</a></li>
            <li><a href="#" className="hover:text-white">Login</a></li>
            <li><a href="#" className="hover:text-white">Assessment</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-gray-300 font-bold mb-4">Become a mentor</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Be a Coach</a></li>
            <li><a href="#" className="hover:text-white">Why choose us?</a></li>
            <li><a href="#" className="hover:text-white">View roles</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-gray-300 font-bold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Terms of use</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">Cookie policy</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-gray-300 font-bold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Jobs</a></li>
            <li><a href="#" className="hover:text-white">Press kit</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
