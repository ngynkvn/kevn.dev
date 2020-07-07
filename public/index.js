---
title: "Kevin Nguyen"
draft: false
---

import { Link } from "gatsby"

import Layout from "../src/components/layout"
import SEO from "../src/components/seo"

const links = ["about", "projects", "javascript"]

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <ul>
            {links.map(link => (
                <li key={link}>
                    <Link to={link}>/{link}</Link>
                </li>
            ))}
        </ul>
        Currently hacking on a <a href="https://github.com/ngynkvn/wasm-raytracer">a raytracer with wasm bindings</a>: <a href="http://unhealthy-vacation.surge.sh/"> Demo </a>
    </Layout>
)

export default IndexPage
