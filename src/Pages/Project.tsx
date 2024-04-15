import Accordion from "../Components/Accordion";

import { FaDesktop, FaGithub } from "react-icons/fa";



type projectPropTypes = {
    name: string,
    thumbnail_url: string,
    description: string,
    accordion_data: {question: string, answer:  JSX.Element | string }[],
    github_url: string,
    live_url: string
}


export default function ProjectPage ({ name, thumbnail_url, description, accordion_data, github_url, live_url }:projectPropTypes) {
    return(
        <>
        <div className='section project '>
            <h3 className='text-center text-3xl pb-8 xxs:text-4xl sm:text-5xl sm:mb-2'>{name}</h3>
            <img className="mx-auto md:my-2" src={thumbnail_url} />
            <p className=' px-4 py-5 text-center xs:text-xl sm:text-2xl md:text-3xl'>{description}</p>
            <div className='px-4 pb-5 flex justify-center md:pt-12'>
                <Accordion data={accordion_data} />
            </div>
            <div className="flex flex-col items-center my-[12.5%]">
                <div className='project-links flex justify-center pt-8'>
                    <a className="m-4" href={github_url}> <FaGithub /> </a>
                    <a className="m-4" href={live_url}> <FaDesktop />  </a>
                </div>
            </div>
        </div>
      </>
    )
}