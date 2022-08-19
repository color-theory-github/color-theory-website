import * as React from "react";
import { graphql, Script } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

// ...
const BlogPost = ({ data, location }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={"image"} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <div>
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

        <div id="fb-root"></div>
        <Script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0"
          nonce="YQuNWYfT"
        ></Script>
        <div
          className="fb-share-button"
          data-href={`${data.site.siteMetadata.domain}${location.pathname}`}
          data-layout="button"
          data-size="large"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore"
          >
            Share
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* <Script
        type="text/javascript"
        src="https://platform-api.sharethis.com/js/sharethis.js#property=62ead85d8ed6360019ab5462&product=sticky-share-buttons"
        async="async"
      ></Script> */}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    site {
      siteMetadata {
        domain
      }
    }
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
