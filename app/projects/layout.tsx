import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "My Portfolio | Projects",
  description: "This are my projects.",
};

export default function ProjectsLayout({ children }: layoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
