/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import Header from "./header/header"

import "../styles/global.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { SiteTitleQuery } from "../../graphql-types"
import Home from "./home/home"

interface Props {
  children: ReactNode
}

const useSiteTitle = () => {
  const data  = useStaticQuery<SiteTitleQuery>(
    graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return data?.site?.siteMetadata?.title || ""
}

const Layout: React.FC<Props> = ({ children }) => {
  const title = useSiteTitle()

  return (
    <>
      <Header siteTitle={title} />
      <Home/>
    </>
  )
}

export default Layout
