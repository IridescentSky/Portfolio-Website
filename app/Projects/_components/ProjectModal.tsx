import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import ProjectModalInterface from "@/interfaces/ProjectModalInterface";

// Interface so that I can pull the title from the Project Entry
interface ProjectModalProps{
  title: string;
  modalData: ProjectModalInterface;
}

export function ProjectModal({title, modalData} : ProjectModalProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
        <DialogContent className="max-w-md sm:max-w-lg md:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {/* <DialogDescription>
            </DialogDescription> */}
          </DialogHeader>

          {/* Scrollable Content */}
          <div className="h-[60vh] overflow-y-auto px-4 space-y-4">
            {/* Description */}
            <div className="text-md">
              <h2 className="text-lg font-bold">Description</h2>
              <p>
                {modalData.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-lg font-bold">Features</h2>
              <ul className="list-disc pl-5 space-y-1">
                {modalData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <DialogFooter>
            {/* Details */}
              <div>
                  {modalData.links && <div className="flex gap-3 items-center">
                      {modalData.links.github && <a href={modalData.links.github}>
                          <FaGithub className="w-5 h-5" />
                      </a>}
                      {modalData.links.demo && <Button variant="link"><a href={modalData.links.demo}>Demo</a></Button>}
                      {modalData.links.blog && <Button variant="link"><Link href={modalData.links.blog}>Blog</Link></Button>}
                  </div>}
              </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
