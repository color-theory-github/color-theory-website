import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Card from "../../components/blogCard";
import * as styles from "../../components/card.module.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Latest Releases">
      <div className={styles.flexList}>
        {data.allMdx.nodes.map((node) => (
          <Card
            link={`/blog/${node.slug}`}
            date={node.frontmatter.datePublished}
            title={node.frontmatter.title}
            id={node.id}
            image={getImage(node.frontmatter.hero_image)}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        frontmatter {
          datePublished(formatString: "MMMM DD, YYYY")
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
        }
        id
        slug
      }
    }
  }
`;
export default BlogPage;
