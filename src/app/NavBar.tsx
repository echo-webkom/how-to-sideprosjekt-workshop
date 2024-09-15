import Link from "next/link";
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className="navbar">

      <div className="navbarleft">
        <Link className="link" href="/">
          {" "}
          Home 🏠{" "}
        </Link>
      </div>

      <div className="navbarright">
        <Link
          href="https://github.com/KWaloen"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {" "}<Image src="/github-mark-white.svg" alt="Link to my GitHub" width = {25} height = {25}/>{" "}
        </Link>

        <Link
          href="https://www.linkedin.com/in/kai-wal%C3%B8en/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {" "}<Image src="/LI-In-Bug.png" alt="Link to my LinkedIn" width = {30} height = {30}/>{" "}
        </Link>

        <Link
          href="https://www.researchgate.net/profile/Kai-Waloen"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {" "}<Image src="/researchgatelogo.png" alt="Link to my ResearchGate" width = {25} height = {25}/>{" "}
        </Link>
      </div>
    </div>
  );
}
