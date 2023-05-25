import Layout from "@/components/Layout";

export default function javascriptProjects() {
  return (
    <div>
      <h1>javascripy projects</h1>
    </div>
  )
}

javascriptProjects.getLayout = function ProjectsPage(projects) {
  return (
    <>            
      <Layout criteria={false}>
        {projects}
      </Layout>
    </>
  )
}
