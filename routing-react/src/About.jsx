import React, { useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const topic = searchParams.get("topic") || "general";

  const urlParams = new URLSearchParams(window.location.search);
  const topicFromUrl = urlParams.get("topic");
  
  console.log("useSearchPrams: ", topic);
  console.log("useSearchPrams: ", topicFromUrl);
  
  
  const hadleTopic = (newTopic) => {
    setSearchParams({topic: newTopic});
  };

  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-600">About Us</h2>
      <p className="text-gray-700 mt-4 text-lg max-w-2xl text-center">
        Learn more about our mission, vision, and the team that makes it happen.
      </p>

      <nav className="mt-6">
        <ul className="flex space-x-4">
          <li><Link to="team" className="text-blue-500 hover:underline">Our Team</Link></li>
          <li><Link to="/" className="text-blue-500 hover:underline">Back to Home</Link></li>
        </ul>
      </nav>

      <div className="mt-6">
        <h3 className='text-xl text-gray-800'>Choose a topic:</h3>
        <div className='flex space-x-4 mt-4'>
          <button
            onClick={() => hadleTopic("Team")} 
            className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
            Team
          </button>
          <button
            onClick={() => hadleTopic("Mission")} 
            className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
            Mission
          </button>
          <button
            onClick={() => hadleTopic("Vision")}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
            Vision
          </button>
        </div>  
      </div>
      <div className='mt-8 text-lg text-gray-700'>
        <p>Current Topic: {topic}</p>
      </div>
      {/* Outlet for nested routes */}
      <div className="mt-8 w-full max-w-4xl">
        <Outlet />
      </div>

      
    </div>
  );
}

export default About;
