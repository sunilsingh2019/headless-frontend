import Head from "next/head";

const GetHead = ({ font, siteTitle, favIcon }) => (
  <>
    <Head>
      <title>
        {siteTitle?.title} || {siteTitle?.description}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Generated by create next app" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link href={font} rel="stylesheet" />
      <link rel="icon" href={favIcon?.sourceUrl} />
    </Head>
  </>
);

export default GetHead;