import React, { Component } from 'react'

export default class MainPage extends Component {
	componentDidMount() {
		document.title = 'i-Engineer'
	}

	render() {
		return (
			<div class="is-preload">
				{/* // <!-- Header --> */}
				<section id="header">
					<header>
						<h1>i-Engineer</h1>
						<p>Welcome!</p>
					</header>
					<footer>
						<a href="#about" class="button style2 scrolly-middle">About</a>
					</footer>
				</section>

				<section id="about">
					<header>
						<h2>About i-Engineer</h2>
					</header>
					<p>
						&#x2713; Share personal experiences in tech<br/>
						&#x2713; Help those new to programming<br/>
						&#x2713; Discuss interesting topics<br/>
					</p>
					<footer>
						<a href="#posts" class="button style2 scrolly">Posts</a>
					</footer>
				</section>

			{/* // <!-- Feature 1 --> */}
				<article id="posts" class="container box style1 right">
					<a href="#" class="image fit"><img src="images/pic01.jpg" alt="" /></a>
					<div class="inner">
						<header>
							<h2>Lorem ipsum<br />
								dolor sit amet</h2>
						</header>
						<p>Tortor faucibus ullamcorper nec tempus purus sed penatibus. Lacinia pellentesque eleifend vitae est elit tristique velit tempus etiam.</p>
					</div>
				</article>

			{/* // <!-- Feature 2 --> */}
				<article class="container box style1 left">
					<a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
					<div class="inner">
						<header>
							<h2>Mollis posuere<br />
							lectus lacus</h2>
						</header>
						<p>Rhoncus mattis egestas sed fusce sodales rutrum et etiam ullamcorper. Etiam egestas scelerisque ac duis magna lorem ipsum dolor.</p>
					</div>
				</article>

			{/* // <!-- Portfolio --> */}
				<article class="container box style2">
					<header>
						<h2>Magnis parturient</h2>
						<p>Justo phasellus et aenean dignissim<br />
						placerat cubilia purus lectus.</p>
					</header>
					<div class="inner gallery">
						<div class="row gtr-0">
							<div class="col-3 col-12-mobile"><a href="images/fulls/01.jpg" class="image fit"><img src="images/thumbs/01.jpg" alt="" title="Ad infinitum" /></a></div>
							<div class="col-3 col-12-mobile"><a href="images/fulls/02.jpg" class="image fit"><img src="images/thumbs/02.jpg" alt="" title="Dressed in Clarity" /></a></div>
							<div class="col-3 col-12-mobile"><a href="images/fulls/03.jpg" class="image fit"><img src="images/thumbs/03.jpg" alt="" title="Raven" /></a></div>
							<div class="col-3 col-12-mobile"><a href="images/fulls/04.jpg" class="image fit"><img src="images/thumbs/04.jpg" alt="" title="I'll have a cup of Disneyland, please" /></a></div>
						</div>
						<div class="row gtr-0">
							<div class="col-3 col-12-mobile"><a href="images/fulls/05.jpg" class="image fit"><img src="images/thumbs/05.jpg" alt="" title="Cherish" /></a></div>
							<div class="col-3 col-12-mobile"><a href="images/fulls/06.jpg" class="image fit"><img src="images/thumbs/06.jpg" alt="" title="Different." /></a></div>
							<div class="col-3 col-12-mobile"><a href="images/fulls/07.jpg" class="image fit"><img src="images/thumbs/07.jpg" alt="" title="History was made here" /></a></div>
							<div class="col-3 col-12-mobile"><a href="images/fulls/08.jpg" class="image fit"><img src="images/thumbs/08.jpg" alt="" title="People come and go and walk away" /></a></div>
						</div>
					</div>
				</article>

			{/* // <!-- Contact --> */}
				<article class="container box style3">
					<header>
						<h2>Nisl sed ultricies</h2>
						<p>Diam dignissim lectus eu ornare volutpat orci.</p>
					</header>
					<form method="post" action="#">
						<div class="row gtr-50">
							<div class="col-6 col-12-mobile"><input type="text" class="text" name="name" placeholder="Name" /></div>
							<div class="col-6 col-12-mobile"><input type="text" class="text" name="email" placeholder="Email" /></div>
							<div class="col-12">
								<textarea name="message" placeholder="Message"></textarea>
							</div>
							<div class="col-12">
								<ul class="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</div>
						</div>
					</form>
				</article>
	
				<section id="footer">
					<ul class="icons">
						<li><a href="https://twitter.com/timcodestoo" target="_blank" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="https://www.facebook.com/tim.han.3" target="_blank" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
						<li><a href="https://www.linkedin.com/in/tim-han/" target="_blank" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
					</ul>
				</section>
			</div>
		)
	}
}
