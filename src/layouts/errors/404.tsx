import {markdownify} from "@/lib/utils/textConverter"; 
import {Page404Data} from "@/types";
const NotFound = ({data}: {data: Page404Data}) => {
    const {frontmatter, content} = data;
    return (
        <section className="section">
            <div className="container">
                <div className="flex h-[40vh] items-center justify-center">
                    <div className="text-center">
                        <h1 className="mb-4 text-4xl font-bold">{frontmatter.title}</h1>
                        {markdownify({content, tag: "div", className:"content"})}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NotFound;