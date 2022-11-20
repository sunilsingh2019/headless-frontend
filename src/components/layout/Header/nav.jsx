import { isEmpty } from 'lodash';
import Link from 'next/link';

const Nav = ({ headerMenus }) => {


  return (
    <>
      <nav id="mobile-menu">
        {headerMenus?.length ? (
          <ul>
            {headerMenus?.map(menu => (
              <li key={menu?.node.id}>
                <Link key={menu?.node.id} href={menu?.node.path}>{menu?.node.label}</Link>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </>
  );
}

export default Nav;