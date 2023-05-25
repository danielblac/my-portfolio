import Layout from "@/components/Layout";

export default function cssProjects() {
  return (
    <div>
      <h1>css projects</h1>
    </div>
  )
}

cssProjects.getLayout = function ProjectsPage(projects) {
  return (
    <>            
      <Layout criteria={false}>
        {projects}
      </Layout>
    </>
  )
}
