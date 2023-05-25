import Layout from "@/components/Layout";

export default function reactProjects() {
  return (
    <div>
      <h1>react projects</h1>
    </div>
  )
}

reactProjects.getLayout = function ProjectsPage(projects) {
  return (
    <>            
      <Layout criteria={false}>
        {projects}
      </Layout>
    </>
  )
}
