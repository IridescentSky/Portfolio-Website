import ProjectModalInterface from "./ProjectModalInterface";

export default interface ProjectInterface {
    title: string;
    description: string;
    tags: string[];
    coverImage: {
        src: string;
        alt: string;
    }
    modalData: ProjectModalInterface;
}