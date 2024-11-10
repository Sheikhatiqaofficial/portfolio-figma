import Link from "next/link";

interface HeaderProps {
  font:{
    className : string;
  };
}

export default function Header({font} : HeaderProps ) {
    return (
      <>
     <header className={`${font.className} links-parent`}>
    <ul className="links">

        <li className="link"> <Link href="">Work</Link></li>
        <li className="link"><Link href="">About me</Link></li>
        <li className="link"><Link href="">Contact</Link></li>
    </ul>
     </header>
      </>
    );
  }
  