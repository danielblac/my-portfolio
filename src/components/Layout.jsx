import Footer from "./Footer";
import Header from "./Header";
import ProjectHeader from "./ProjectHeader";

export default function Layout({children, criteria}) {
  return (
    <div>
      {criteria ? <Header /> : <ProjectHeader />}
        {children}
      <Footer />
    </div>
  )
}
