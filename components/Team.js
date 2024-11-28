import React, { useState } from "react";

const TeamMember = ({ member }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-black rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
        <div>
          <img
            className="object-center object-cover"
            src={member.image}
            alt={`Photo of ${member.name}`}
            width={member.width}
            height={member.height}
          />
        </div>
        <div className="text-center py-8 sm:py-6">
          <p 
            className="text-xl text-white font-bold mb-2 cursor-pointer hover:text-gray-300"
            onClick={() => setIsModalOpen(true)}
          >
            {member.name}
          </p>
          <p className="text-base text-white font-normal">{member.role}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-stone-800 p-8 rounded-lg max-w-md w-full relative">
            <button 
              className="absolute top-2 right-2 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            
            <div className="flex flex-col items-center">
              <img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="w-48 h-48 object-cover rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
              <p className="text-white mb-4">{member.role}</p>
              
              <div className="space-y-2 text-center">
                <p className="font-semibold">Cédula Profesional:</p>
                <p>{member.cedula}</p>
                
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-300 block"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dany Bailey",
      role: "psicologo",
      image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      width: 300,
      height: 400,
      cedula: "12345678",
      linkedin: "https://linkedin.com/in/dany-bailey"
    },
    {
      name: "Lucy Carter",
      role: "psiquiatra",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      width: 300,
      height: 400,
      cedula: "87654321",
      linkedin: "https://linkedin.com/in/lucy-carter"
    },
    {
      name: "Jade Bradley",
      role: "pediatra",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
      width: 300,
      height: 400,
      cedula: "23456789",
      linkedin: "https://linkedin.com/in/jade-bradley"
    }
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
