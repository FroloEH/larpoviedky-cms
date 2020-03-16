import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
					<footer id="footer">
						<div className="inner">
							<ul className="icons">
								<li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
								<li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
								<li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
								<li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
							</ul>
							<ul className="copyright">
								<li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
						<script src="assets/js/jquery.min.js"></script>
						<script src="assets/js/jquery.scrolly.min.js"></script>
						<script src="assets/js/jquery.scrollex.min.js"></script>
						<script src="assets/js/browser.min.js"></script>
						<script src="assets/js/breakpoints.min.js"></script>
						<script src="assets/js/util.js"></script>
						<script src="assets/js/main.js"></script>
					</footer>


    )
  }
}

export default Footer
