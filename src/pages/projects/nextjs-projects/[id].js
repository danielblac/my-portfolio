import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from 'react-icons/fa'

export default function NextjsProjectInfo({data}) {
  const { title, coverImg, description, liveLink, githubLink} = data
  return (
    <>
      <Head>
        <title>Projects | NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/dan.jpg" />
      </Head>
      <div className="pb-20 p-2">
        <div className="bg-skill pt-4 px-3 flex flex-col items-center rounded-md">
          <h2 className="font-bold text-2xl text-center">{title}</h2>
          <Image 
            className="h-64 mt-3 w-9/10"
            src={`/image/${coverImg}`}
            alt={title}
            width={750}
            height={600}
          />
          <div className="flex p-3 gap-8 items-center text-lg">
            <Link 
              className="relative inline-block p-1 text-inherit border-b-2 border-primary after:content-[''] after:-z-10 after:block after:absolute after:top-0 after:left-0 after:right-full after:bg-primary after:h-full after:transition-all after:duration-500 focus:after:right-0 focus:after:bg-primary hover:after:right-0 hover:after:bg-primary"
              href={liveLink} 
              target='_blank'
              rel="noopener noreferrer"
            >
              Visit Site <span className="pl-2">&rarr;</span>
            </Link>
            <Link 
              className="netlify-link transition-all duration-300 hover:scale-150"
              href={githubLink} 
              target='_blank'
              rel="noopener noreferrer"
              title="View Source Code"
            >
              <FaGithub />
            </Link>
          </div>
          <p className="pb-5 tracking-wide">{description}</p>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const { next_projects } = await import('/data/data.json')
  
  const allPaths = next_projects.map(project => {
    return {
      params: {
        id: project.id.toString(),
      }
    }
  })
  
  return {
    paths: allPaths,
    fallback: false
  }
  
}
  
export async function getStaticProps(context) {
  const id = context.params.id
  const { next_projects } = await import('/data/data.json')
  
  const projectData = next_projects.find(project => id == project.id)

  return {
    props: {
      data: projectData
    }
  }
}

NextjsProjectInfo.getLayout = function ProjectsPage(projects) {
  return (
    <>            
      <Layout criteria={false}>
        {projects}
      </Layout>
    </>
  )
}