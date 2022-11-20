import Head from "next/head";
import GetHead from "../getHead";
import Seo from "../seo";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({ data, children }) => {
  // const headerMenus = data?.menus?.headerMenus;
  // const headerLogo = data?.logo?.headerLogo?.logo;
  // const footerMenus = data?.menus?.footerMenus;
  // const footerDown = data?.footerBottom?.footerDown;
  // const footer = data?.footerTop?.footer;
  // const siteTitle = data?.siteHeader?.siteTitle;
  // const favIcon = data?.favIcons?.favIcon;
  // const page = data?.page?.seo;
  // const url = data?.page?.uri;
  const { headerLogo, footer, headerMenus, footerMenus, footerDown, favIcon, siteTitle, page, url } = data || {};
  // const {page, post, posts, header, footer, headerMenus, footerMenus} = data || {};

  return (
    <>
      <GetHead siteTitle={siteTitle} favIcon={favIcon} />
      <Seo seo={page?.seo} uri={url?.uri} />
      <Header headerLogo={headerLogo} headerMenus={headerMenus?.edges} footer={footer} />
      {children}
      <Footer footerDown={footerDown} footerMenus={footerMenus?.edges} footer={footer} />
    </>
  );
}


export default Layout;