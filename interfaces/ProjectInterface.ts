export default interface ProjectInterface {
    title: string;
    description: string;
    tags: string[];
    coverImage: {
        src: string;
        alt: string;
    }
    links?: {
        github?: string;
        demo?: string;
        blog?: string;
    }
}