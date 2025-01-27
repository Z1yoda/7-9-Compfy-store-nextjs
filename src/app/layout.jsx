import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import sun from '../../public/sun.svg';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>  <div className="container">
          <div className="header-wrapper">
            <p>Sign in/Guest</p>
            <p>Create Account</p>
          </div>
        </div></header>
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <div className="nav-start">C</div>
              <div className="nav-center">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li>
                    <Link href="/cart">Cart</Link>
                  </li>
                </ul>
              </div>
              <div className="nav-end">
                <div className="mode">
                  <Image src={sun} alt="" />
                </div>
                {/* <Link to="/cart">
                  <div className="cart-numbers">
                  <Image src={cartIcon} alt="" />
                  <div className="counter">  {cartCount.countCard} </div>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </nav >
        <main className="main container"> {children}</main>
      </body >
    </html >
  );
}
