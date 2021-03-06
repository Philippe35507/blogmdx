import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Header } from "./Header"

export const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <>
        <Header siteTitle={title} siteDescription = {description} />
        {children}
        </>
    )
}