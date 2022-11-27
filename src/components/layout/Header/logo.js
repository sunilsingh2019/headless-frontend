import Link from 'next/link';

const Logo = ({ headerLogo }) => {
  const getLogo = headerLogo?.headerFieldGroup?.logo;
  return (
    <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-6 col-6">
      <div className="logo-dark">
        <Link href="/">
          <a>
            <img src={getLogo?.sourceUrl} alt="logo" />
          </a>
        </Link>
      </div>
      <div className="logo-white">
        <Link href="/">
          <a><img src={getLogo?.sourceUrl} alt="logo" /></a>
        </Link>
      </div>
    </div>
  );
}

export default Logo;