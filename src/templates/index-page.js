import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
	<>

	{/* <!-- Banner --> */}
		<section id="banner" className="major">
			<div className="inner">
				<header className="major">
					<h1>Uvítanie na stránke</h1>
				</header>
				<div className="content">
					<p>Krátky text o tom, aký typ akcií môžeš nájsť na tejto stránke.</p>
					<ul className="actions">
						<li><a href="#one" className="button next scrolly">Get Started</a></li>
					</ul>
				</div>
			</div>
		</section>

	{/* <!-- Main --> */}
		<div id="main">

			{/* <!-- One --> */}
				<section id="one" className="tiles">
					<article>
						<span className="image">
							<img src="images/PlaceholderChemicals.jpg" alt="" />
						</span>
						<header className="major">
							<h3><a href="landing.html" className="link">Smrteľný Experiment</a></h3>
							<p>Ipsum dolor sit amet</p>
						</header>
					</article>
					<article>
						<span className="image">
							<img src="images/PlaceholderGroup.jpg" alt="" />
						</span>
						<header className="major">
							<h3><a href="landing.html" className="link">All In</a></h3>
							<p>feugiat amet tempus</p>
						</header>
					</article>
					
				</section>

			{/* <!-- O role playových hrách --> */}
				<section id="two">
					<div className="inner">
						<header className="major">
							<h2>Role play hry</h2>
						</header>
						<p>
							Detailnejší text o tom, ako takéto hry prebiehajú a čo môžu očakávať. 
							Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.
						</p>
					</div>
					<div className="inner">
						<header className="major">
							<h2>Vizuály z hry</h2>
						</header>
						<p>
							Pekné veľké fotky, možno nejaké videa.
						</p>
						<ul className="actions">
							<li><a href="landing.html" className="button next">Get Started</a></li>
						</ul>
					</div>
				</section>
			
			{/* <!-- Referencia a kto sme --> */}
				<section id="three">
					<div className="inner">
						<header className="major">
							<h2>Povedali o nás</h2>
						</header>
						<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
					</div>
					<div className="inner">
						<header className="major">
							<h2>Kto sme</h2>
						</header>
						<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
						<ul className="actions">
							<li><a href="landing.html" className="button next">Výber hier</a></li>
						</ul>
					</div>
				</section>

		</div>

	{/* <!-- Contact --> */}
		<section id="contact">
			<div className="inner">
				<section>
					<form method="post" action="#">
						<div className="fields">
							<div className="field half">
								<label htmlFor="name">Name</label>
								<input type="text" name="name" id="name" />
							</div>
							<div className="field half">
								<label htmlFor="email">Email</label>
								<input type="text" name="email" id="email" />
							</div>
							<div className="field">
								<label htmlFor="message">Message</label>
								<textarea name="message" id="message" rows="6"></textarea>
							</div>
						</div>
						<ul className="actions">
							<li><input type="submit" value="Send Message" className="primary" /></li>
							<li><input type="reset" value="Clear" /></li>
						</ul>
					</form>
				</section>
				<section className="split">
					<section>
						<div className="contact-method">
							<span className="icon solid alt fa-envelope"></span>
							<h3>Email</h3>
							<a href="#">information@untitled.tld</a>
						</div>
					</section>
					<section>
						<div className="contact-method">
							<span className="icon solid alt fa-phone"></span>
							<h3>Phone</h3>
							<span>(000) 000-0000 x12387</span>
						</div>
					</section>
					<section>
						<div className="contact-method">
							<span className="icon solid alt fa-home"></span>
							<h3>Address</h3>
							<span>1234 Somewhere Road #5432<br />
							Nashville, TN 00000<br />
							United States of America</span>
						</div>
					</section>
				</section>
			</div>
		</section>
</>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
