import React from "react";
import space_blue from "./assets/space-blue.svg";


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Spacey',
      description: 'Solution to space tourism website challenge',
      repo_link: 'https://github.com/kn-oz/Spacey',
      live_link: 'https://kn-oz.github.io/Spacey/',
    },
    {
      id: 2,
      title: 'birdie',
      description: 'twitter like social app UI',
      repo_link: 'https://github.com/kn-oz/birdie',
      live_link: 'https://kn-oz.github.io/birdie/',
    },
    {
      id: 3,
      title: 'chat.io',
      description: 'A real time private chat app using firebase',
      repo_link: 'https://github.com/kn-oz/chat.io',
      live_link: 'https://kn-oz.github.io/chat.io/',
    },
    {
      id: 4,
      title: 'Tetris',
      description: 'classic game using vanilla javascript',
      repo_link: 'https://github.com/kn-oz/tetris',
      live_link: 'https://kn-oz.github.io/tetris/',
    },
    {
      id: 5,
      title: 'storeX',
      description: 'an ecommerce app Ui with stripe integration',
      repo_link: '',
      live_link: '',
    },
    {
      id: 6,
      title: 'zen_sama',
      description: 'to help you find your lost zen in life',
      repo_link: 'https://github.com/kn-oz/zen_sama',
      live_link: '',
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
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
                <a href={live_link} target='_blank' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={repo_link} target='_blank' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

