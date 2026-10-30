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

// Temporary testing code
type ProjectModalProps = {
  links?: {
      github?: string;
      demo?: string;
      blog?: string;
  }
} 

export function ProjectModal({links} : ProjectModalProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
        <DialogContent className="max-w-md sm:max-w-lg md:max-w-2xl">
          <DialogHeader>
            <DialogTitle>VPCI FIRST Tech Challenge Robotics</DialogTitle>
            {/* <DialogDescription>
            </DialogDescription> */}
          </DialogHeader>

          {/* Scrollable Content */}
          <div className="h-[60vh] overflow-y-auto px-4 space-y-4">
            {/* Description */}
            <div className="text-md">
              <h2 className="text-lg font-bold">Description</h2>
              <p>
                In high school, I was my team's Programming Co-Lead for our FTC Robotics team.
                We had our rookie year in Gr. 11, and it was a fun experience learning to program both
                tele-op and autonomous modes when we didn't have much relevant prior experience. I was
                most proud that we got a 50-point auton working.
              </p>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-lg font-bold">Summary</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Uses model trained on pre-built FTC tooling to detect location of game-piece</li>
                <li>Coordinates of detected game-piece used to decide where to place pixels</li>
                <li>Path-planning and PIDS using the RoadRunner Odometry to path towards locations for placing pixels</li>
              </ul>
            </div>
          </div>

          <DialogFooter>
            {/* Details */}
              <div>
                  {links && <div className="flex gap-3">
                      {links.github && <a href={links.github}>
                          <FaGithub className="w-5 h-5" />
                      </a>}
                      {links.demo && <a href={links.demo}>Demo</a>}
                      {links.blog && <Link href={links.blog}>Blog</Link>}
                  </div>}
              </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
