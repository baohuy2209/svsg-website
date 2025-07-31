import { MarkdownifyProps } from "@/types";
import {slug} from "github-slugger";
import {marked} from "marked";
import { JSX, ReactNode } from "react";
// slugify 
export const slugify = (content: string) => {
    if (!content){
        return null; 
    }
    return slug(content); 
}
// markdownify 
export const markdownify = ({content, tag, className}: MarkdownifyProps) : JSX.Element | null => {
    if (!content){
        return null; 
    }
    const Tag = tag as keyof JSX.IntrinsicElements; 
    const html = tag === "div" ? marked.parse(content) : marked.parseInline(content);
    return (tag ? (
        <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
    ) : (
        <span className={className} dangerouslySetInnerHTML={{ __html: marked.parseInline(content) }} />
    ))
}

// humanize 
export const humanize = (content: string) => {
    if (!content){
        return ""; 
    }
    return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function (m) {
        return m.toUpperCase(); 
    });
}

// plainify 
export const plainify = async (content: string) : Promise<ReactNode | null> => {
    if (!content) {
        return null;
    }
    const mdParsed = await marked.parseInline(String(content)); 
    const filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, "");
    const filteredSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    const stripHTML = htmlEntityDecoder(filteredSpaces); 
    return stripHTML;
}
const htmlEntityDecoder = (htmlWithEntities: string) => {
    let entityList = {
        "&nbsp": " ",
        "&lt": "<", 
        "&gt": ">", 
        "&amp": "&", 
        "&quot": "\"", 
        "&apos": "'", 
        "&copy": "©", 
    }; 
    let htmlWithoutEnitiies = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&apos;|&copy;)/g, (entity) => {
        return entityList[entity as keyof typeof entityList]; 
    }); 
    return htmlWithoutEnitiies; 
}
