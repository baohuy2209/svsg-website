import {serialize} from "next-mdx-remote/serialize"; 
import rehypeSlug from "rehype-slug"; 
import remarkGfm from "remark-gfm";

export const parseMDX = async (content: string) => {
    const options = {
        mdxOptions: {
            rehypePlugins: [rehypeSlug], 
            remarkPlugins: [remarkGfm]
        }, 
    }; 
    return await serialize(content, options);
}
