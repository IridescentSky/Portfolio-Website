"use client"
import MainNav from "./MainNav"
import MobileNav from "./MobileNav"

export default function NavBar() {
    return (
        <>
            <div className="max-md:hidden display-block">
                <MainNav/>
            </div>
            <div className="display-block md:hidden">
                <MobileNav/>
            </div>
        </>
    )
}