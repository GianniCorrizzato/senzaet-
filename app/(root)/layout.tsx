import Footer from "../Components/home/Footer";
import Navbar from "../Components/home/Navbar";


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  );
}
