import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
    const { isLoading, user = {} } = useUser()
    const { pathname } = useLocation()

    let isAuthenticated = false
    if (user) isAuthenticated = true

    let isverified = false
    if ((user.status) === 2) isverified = true

    let isAuthorized = false

    // if (pathname.includes("admin")) {
    //     if (user && user.role === "ADMIN") isAuthorized = true
    // }
    // if (pathname.includes("owner")) {
    //     if (user && user.role === "OWNER") isAuthorized = true
    // }
    // if (pathname.includes("freelancer")) {
    //     if (user && user.role === "FREELANCER") isAuthorized = true
    // }

    const ROLES = {
        admin: "ADMIN",
        owner: "OWNER",
        freelancer: "FREELANCER"
    }

    const desirdRole = pathname.split("/").at(1)
    if (Object.keys(ROLES).includes(desirdRole)) {
        if (user && user.role === ROLES[desirdRole]) isAuthorized = true
    }


    return { isLoading, user, isAuthenticated, isAuthorized ,isverified}
}


