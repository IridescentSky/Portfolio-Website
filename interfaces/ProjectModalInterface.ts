export default interface ProjectModalInterface {
    description: string;
    features: string[];
    links?: {
        github?: string;
        demo?: string;
        blog?: string;
    }
}