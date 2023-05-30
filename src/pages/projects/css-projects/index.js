import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function CssProjects({data}) {
  return (
    <>
      <Head>
        <title>Projects | CSS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/dan.jpg" />
      </Head>
      <div className="pb-16 pt-4 px-4 w-full mx-auto sm:max-w-md md:ml-3 md:max-w-none md:grid md:grid-cols-2 xxl:grid-cols-3">
        {data.map(({ title, id, coverImg }) => (
          <Link key={id} href={`/projects/css-projects/${id}`}>
            <div className="flex flex-col items-center bg-skill mb-6 pb-5 rounded-md sm:rounded-lg md:px-1 md-mx-auto md:max-w-sm md:w-9/10 md:h-9/10 xl:max-w-lg">
              <Image 
                className="h-64 pt-5 w-8/10 pb-3 mx-auto sm:pt-7 sm:max-w-sm"
                src={`/image/${coverImg}`}
                alt={title}
                width={750}
                height={600}
              />
              <h3 className="font-bold text-xl text-center sm:text-2xl sm:py-3 md:px-3 lg:text-3xl">{title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { css_projects } = await import('/data/data.json')

  return {
    props: {
      data: css_projects
    }
  }
}

CssProjects.getLayout = function ProjectsPage(projects) {
  return (
    <>            
      <Layout criteria={false}>
        {projects}
      </Layout>
    </>
  )
}
