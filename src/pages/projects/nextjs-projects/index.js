import Layout from "@/components/Layout";

export default function NextjsProjects() {
  return (
    <div>
      <h1>next projects</h1>
    </div>
  )
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

export async function getStaticProps() {
  const { real_projects } = await import('@/data/data.json')
  console.log(real_projects)

  return {
    props: {
      data: real_projects
    }
  }
}
