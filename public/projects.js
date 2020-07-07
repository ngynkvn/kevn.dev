import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const links = ["chess", "chip-8"]
export default () => (
    <Layout>
        <ul>
            {links.map(link => (
                <li key={link}>
                    <Link to={`/projects/${link}`}>/projects/{link}</Link>
                </li>
            ))}
        </ul>
    </Layout>
)
