import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default function ScreenShot() {
  const data = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/screenshot/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Image fluid={data.file.childImageSharp.fluid} />
}
