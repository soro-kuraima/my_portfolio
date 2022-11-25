import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import awsS3 from './assets/aws-s3-logo-svgrepo-com.svg'
import sql from './assets/database.png'
import excel from './assets/icons8-microsoft-excel.svg'
import powerBI from './assets/icons8-power-bi (1).svg'
import snowflake from './assets/snowflake-svgrepo-com.svg'

export default function Skills() {
    const techs = [
        {
          id: 1,
          src: excel,
          title: "M S Excel",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: sql,
          title: "SQL",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: powerBI,
          title: "Power BI",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: awsS3,
          title: "AWS S3",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: snowflake,
          title: "Snowflake",
          style: "shadow-sky-400",
        }, 
      ];

  return (
    <div className='skills' id='skills'>
      <div
      name="experience"
      className="bg-neutral-focus w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className='flex flex-col items-center'>
          <p className="text-4xl font-bold text-center p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  )
}
