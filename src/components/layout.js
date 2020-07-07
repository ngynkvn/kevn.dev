/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Maze from "./maze"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main className="main">{children}</main>
                <footer>
                    <div>
                        <Maze
                            squareSize={20}
                            width={800}
                            height={40}
                            pathWidth={5}
                            timeDelta={0}
                        ></Maze>
                    </div>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
