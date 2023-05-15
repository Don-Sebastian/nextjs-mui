import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
      <>
        <div className="min-h-screen pt-[14px]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </>
    );
}