import React from "react";
import space_blue from "./assets/space-blue.svg";


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Telecom Churn Analysis',
      description: 'Built an end to end Power BI dashboard for telco-customer churn Rate after performing EDA',
    },
    {
      id: 2,
      title: 'Amazon Sales Analysis',
      description: 'Analyze the raw data from amazon to generate sales and business insight',
    },
    
  ];

  return (
    <div id="projects"
      className="bg-black w-full text-white md:h-screen" style={{backgroundImage: `url(${space_blue})`}}>
    
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col items-center">
          <p className="text-4xl font-bold inline">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, repo_link, live_link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className=" p-6 rounded-md duration-200 hover:scale-105">
                <h1 className="font-bold text-2xl text-center">
                  {title}
                </h1>
                <h2 className="font-medium text-xl text-center">
                  {description}
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {}
                </p>
                <p href={repo_link} target='_blank' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

