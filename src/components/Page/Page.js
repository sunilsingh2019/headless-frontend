import { BlockRenderer } from "../BlockRenderer";
import Layout from "../layout";

export const Page = ({data, blocks}) => {
    console.warn("data", data);
    console.warn("blocks", blocks);
    return (
        <Layout data={data}>
		{/* {data?.page?.content ? <div dangerouslySetInnerHTML={{ __html: sanitize(data?.page?.content ?? {}) }} /> : null} */}
		<BlockRenderer blocks={blocks} data={data} /> 
	  </Layout>
    );
}

