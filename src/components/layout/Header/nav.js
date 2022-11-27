import { isEmpty } from 'lodash';
import Link from 'next/link';

const Nav = ({ headerMenus }) => {
  return (
    <>
      <nav id="mobile-menu">
        {headerMenus?.length ? (
          <ul>
            {headerMenus?.map(menu => (
              <li key={menu?.node.id} className={`${menu.node?.childItems?.edges.length > 0 ? 'has-dropdown' : ''}`}>

                <Link key={menu?.node.id} href={menu?.node.path}>{menu?.node.label}</Link>
                {/* {JSON.stringify(menu)} */}
                {/* {JSON.stringify(menu.node.childItems)} */}
                {/* {JSON.stringify(menu.node.childItems.edges.node)} */}
                {/* {JSON.stringify(menu.node.childItems.edges)} */}
                {menu.node?.childItems?.edges.length > 0 && (
                  <ul className="submenu">
                    {menu.node?.childItems?.edges.map(childMenu => (
                      <li key={childMenu?.node.id}><Link href={childMenu?.node.path}>{childMenu?.node.label}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </>
  );
}

export default Nav;