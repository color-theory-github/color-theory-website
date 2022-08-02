import * as React from "react";
import { graphql, Script } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

// ...
const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={"image"} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-size="large"
        data-text="Check out this article from Color Theory!"
        data-hashtags="ColorTheory"
        data-show-count="false"
      >
        Tweet
      </a>
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></Script>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        datePublished(formatString: "MMMM DD, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export default BlogPost;
