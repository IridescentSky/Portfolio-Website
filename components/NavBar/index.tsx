"use client"
import MainNav from "./MainNav"
import MobileNav from "./MobileNav"

export default function NavBar() {
    return (
        <>
            <div className="sticky top-0 z-10 max-md:hidden display-block">
                <MainNav/>
            </div>
            <div className="sticky top-0 z-10 display-block md:hidden">
                <MobileNav/>
            </div>
        </>
    )
}