import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function NextjsProjects({data}) {
  return (
    <>
      <Head>
        <title>Projects | NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/dan.jpg" />
      </Head>
      <div className="pb-14 pt-4 px-4">
        {data.map(({ title, id, coverImg }) => (
          <Link key={id} href={`/projects/nextjs-projects/${id}`}>
            <div className="flex flex-col items-center bg-skill mb-6 pb-5 rounded-md">
              <Image 
                className="h-64 pt-5 w-8/10 pb-3"
                src={`/image/${coverImg}`}
                alt={title}
                width={750}
                height={600}
              />
              <h3 className="font-bold text-xl">{title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { next_projects } = await import('/data/data.json')

  return {
    props: {
      data: next_projects
    }
  }
}

NextjsProjects.getLayout = function ProjectsPage(projects) {
  return (
    <>            
      <Layout criteria={false}>
        {projects}
      </Layout>
    </>
  )
}
