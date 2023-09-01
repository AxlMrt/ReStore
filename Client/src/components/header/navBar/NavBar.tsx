import MenuItems from './menuItems/MenuItems';

interface Props {
  navLinks: { title: string, path: string }[]
}

export default function NavBar({ navLinks }: Props) {
  return (
    <nav className="menu__box">
      <ul>
        {navLinks.map((link) => {
          return (
            <MenuItems link={link} key={link.title}/>
          );
        })}
      </ul>
    </nav>
  );
}
