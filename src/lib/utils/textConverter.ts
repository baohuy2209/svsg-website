import {slug} from "github-slugger";
import {marked} from "marked";
import { ReactHTMLElement } from "react";

export const slugify = (content: string) => {
    if (!content){
        return null; 
    }
    return slug(content); 
}
export const markdownify = (content: string, tag: ReactHTMLElement<any, any>, className: string) => {
    if (!content){
        return null; 
    }
    const Tag = tag; 
    return (tag ? (
        <Tag className={className} dangerouslySetInnerHTML={{ __html: tag === "div" ? marked.parse(content) : marked.parseInline(content), }} />
    ) : (
        <span className={className} dangerouslySetInnerHTML={{ __html: marked.parseInline(content), }} />
    ))
}