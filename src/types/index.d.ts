export type MarkdownifyProps = {
    content: string; 
    tag?: string; 
    className?: string; 
}
export type LogoProps = {
  src: string; 
}
export interface Page404Data {
  frontmatter: Record<string, any>; 
  content: string;
  mdxContent: {
    compiledSource: string;
    frontmatter: Record<string, any>;
    scope: Record<string, any>;
  }
}

