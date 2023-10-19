import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">About Hyderabad Technology (BD) Ltd</h1>
        <p className="text-lg text-gray-600 max-w-prose mb-6">
          Welcome to Hyderabad Technology (BD) Ltd. We are a prominent player in the technology sector, dedicated to bringing cutting-edge solutions and the latest innovations to the heart of Hyderabad, India.
        </p>
        <p className="text-lg text-gray-600 max-w-prose mb-6">
          Our mission at Hyderabad Technology (BD) Ltd. is clear - to deliver exceptional technology solutions that empower our clients to achieve their business objectives. With a robust product portfolio, a highly skilled team, and an unwavering commitment to client satisfaction, we are here to help your business thrive in the digital age.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Services and Products</h2>
        <p className="text-lg text-gray-600 max-w-prose mb-6">
          We take pride in offering an extensive and diverse product portfolio that includes top-tier brands like APPLE, SAMSUNG, SONY, GOOGLE, INTEL, and AMAZON. Our portfolio encompasses hardware, software solutions, managed IT services, and a commitment to digital transformation.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Client-Centric Approach</h2>
        <p className="text-lg text-gray-600 max-w-prose mb-6">
          At Hyderabad Technology (BD) Ltd., client satisfaction is our top priority. We prioritize understanding your unique needs and work closely with you throughout the project lifecycle. Our dedicated approach has earned us a reputation for delivering projects on time and within budget.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Distribution Excellence</h2>
        <p className="text-lg text-gray-600 max-w-prose mb-6">
          With a well-established distribution network, we serve clients not only within Hyderabad but across the nation. Our efficient logistics and reliable partners enable us to deliver products promptly and efficiently.
        </p>
      </div>
    </div>
  );
};

export default About;
