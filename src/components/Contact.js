import React from 'react';
import './Contact.css';
import Header from './Header';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Contact() {
	return (
		<div id="contact" className="contact" handleContact={true}>
			<Header white />
			<h1 className="contact__title">contact</h1>
			<div className="contact__body">
				<div className="contact__columns">
					<div className="contact__firstColumn">
						<h2>Contact us via email, phone or come by into our office!</h2>
						<div className="contact__contacts">
							<p>
								<MailOutlineIcon />{' '}
								<span className="contact__withIcon underlined">
									info@airhitect.com
								</span>
							</p>
							<div className="contact__centerP">
								<p>
									<PhoneInTalkOutlinedIcon />{' '}
									<span className="contact__withIcon">+12 34 567 890</span>
								</p>
								<p>
									<span className="contact__withoutIcon">+09 87 654 321</span>
								</p>
							</div>
							<p>
								<HomeOutlinedIcon />{' '}
								<span className="contact__withIcon">1012 Budapest</span>
							</p>
							<p>
								<span className="contact__withoutIcon">Márvány utca 16</span>
							</p>
						</div>
					</div>
					<div className="contact__secondColumn">
						<div className="contact__socialIcons">
							<LinkedInIcon />
							<FacebookIcon />
							<InstagramIcon />
							<i class="fab fa-google-plus-g"></i>
						</div>
						<h3>We are hiring!</h3>
						<p>
							We are looking for new talents to our team! If you think you are
							the right person for AIRhitect send us an email with your CV and
							portfolio. Don't forget to write a little about yourself!
						</p>
						<p>
							<span className="underlined">job@airhitect.com</span>
						</p>
					</div>
				</div>
				<form className="contact__form">
					<TextField
						id="outlined-basic"
						className="contact__textField"
						label="Name"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						className="contact__textField"
						label="E-mail"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						className="contact__textField"
						label="Subject"
						variant="outlined"
					/>
					<TextField
						id="outlined-multiline-static"
						className="contact__textField textarea"
						multiline
						rows={4}
						defaultValue="Message"
						variant="outlined"
					/>
					<Button className="contact__button" variant="contained">
						Send Message
					</Button>
				</form>
			</div>
			<iframe
				title="map"
				className="contact__map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.707078302421!2d19.024983015626734!3d47.49561947917758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc25d4ad9a07%3A0x5b41f2bc2f5e42d9!2zQnVkYXBlc3QsIE3DoXJ2w6FueSB1LiAxNiwgMTAxMiBIdW5ncsOtYQ!5e0!3m2!1ses-419!2sar!4v1622483510328!5m2!1ses-419!2sar"
				allowfullscreen=""
				loading="lazy"
			></iframe>
		</div>
	);
}

export default Contact;
