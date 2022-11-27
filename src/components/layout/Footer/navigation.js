import Link from 'next/link';

const Navigation = ({ footerMenus }) => {
  return (
    <div className="footer__widget">
      {footerMenus?.length ? (
        <ul id="footer-link-inline">
          {footerMenus?.map(menu => (
            <li key={menu?.node.id}>
              <Link key={menu?.node.id} href={menu?.node.path}>{menu?.node.label}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Navigation;