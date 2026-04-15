import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="site">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;