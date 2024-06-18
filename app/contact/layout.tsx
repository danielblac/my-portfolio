import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "My Portfolio | Contact",
  description: "Contact Me.",
};

export default function ContactLayout({ children }: layoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
