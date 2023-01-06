import { gql } from "@apollo/client";
import client from "../apollo/client";
import MenuFragment from "../queries/fragments/menus";
import SeoFragment from "../queries/fragments/seo";
import { HeaderFooter } from "../queries/get-menus";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPageStaticProps = async (context) => {
  console.log("CONTEXT: ", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
    query: gql`
    query PageQuery($uri: String!) {
       ${HeaderFooter}
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            content
            slug
            uri
            blocksJSON
            seo {
              ...SeoFragment
            }
          }
        }
      }
     ${SeoFragment}
     ${MenuFragment}
    `,
    variables: {
      uri,
    },
  });
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
  return {
    props: {
        blocks,
        data: data || {},
    },
  };
};
