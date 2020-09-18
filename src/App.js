import React from 'react';
import client from "./images/pic1.jpg";
import Ankita from "./images/AnkitaAgrawal.jpg";
import Anushka from "./images/Anushka_Gangwal.JPG";
import Apurva from "./images/Apurva.jpeg";
import Devika from "./images/DevikaSathayePic.jpg";
import Feya from "./images/Feya_Shah.jpg";
import Kylie from "./images/Profile copy Chinn.png";
import Parul from "./images/Parul.jpg";
import Rucha from "./images/Profile Rucha.JPG";
import './App.css';
import NavigationBar from "./NavigationBar";
import { Card } from 'react-bootstrap';

function App() {
	return (
		<div>
			<NavigationBar/>
			<div className="container-fluid">
				<div className="proj-info col-md-4">
					<p className="proj-title">PROJECT INFO</p>
					<p className="text"> Academic Period : Fall 2020 </p>
					<p className="text"> Project Name : e-Wellness Health Platform </p>
					<p className="text"> Client : Jasmine Berry</p>
					<p className="text"> Team Number : 09</p>
				</div>
				<div className="proj-desc col-md-8">
					<p className="proj-title">PROJECT DESCRIPTION</p>
					<p className="text">Our mission is to develop the adequate technical tool for patients to receive treatments that arespecificto their individual needs, dietary habits, lifestyle, exercise regimen, and personal goals in managing their diabetes. Many of today’s treatments given to patients by doctors are too generaland broad. Treatments should be focused with patient precision, which is what we aim to accomplish with our platform. Overall, the Harexi platform will work with you to make sure you are getting appropriate preventive care and screening to live long, healthy lives.</p>
				</div>
			</div>
			
			<div className="team-members"> 
				<p className="team-title">MEET OUR TEAM</p>
				<div className="member-cards row m-4">
					<div className="col-md-12">
						<Card className="client-card p-2 shadow">
							<Card.Img src={client} className="contactImages"/>
							<Card.Title className="mt-3">Jasmine Berry</Card.Title>
							<Card.Text>CTO</Card.Text>
							<Card.Text>jasmineBerry@gmail.com</Card.Text>
							<Card.Link></Card.Link>
						</Card>
					</div>
				</div>
				<div className="member-cards row m-4">
					<div className="col-md-3">
						<Card className="p-2 shadow">
							<Card.Img src={Ankita} className="contactImages"/>
							<Card.Title className="mt-3">Ankita Agrawal</Card.Title>
							<Card.Text>Software Architect | Verification </Card.Text>
							<Card.Text>apagrawa@usc.edu</Card.Text>
							<Card.Link></Card.Link>
						</Card>
					</div>
					<div className="col-md-3">
						<Card className="p-2 shadow">
							<Card.Img src={Anushka} className="contactImages"/>
							<Card.Title className="mt-3">Anushka Gangwal</Card.Title>
							<Card.Text>Implementer | PM</Card.Text>
							<Card.Text>agangwal@usc.edu</Card.Text>
							<Card.Link></Card.Link>
						</Card>
					</div>
					<div className="col-md-3">
						<Card className="p-2 shadow">
							<Card.Img src={Apurva} className="contactImages"/>
							<Card.Title className="mt-3">Apurva Hajare</Card.Title>
							<Card.Text>Software Architect</Card.Text>
							<Card.Text>hajare@usc.edu</Card.Text>
							<Card.Link></Card.Link>
						</Card>
					</div>
					<div className="col-md-3">
						<Card className="p-2 shadow">
							<Card.Img src={Devika} className="contactImages"/>
							<Card.Title className="mt-3">Devika Sathaye</Card.Title>
							<Card.Text>Implementer | Requirement Engg</Card.Text>
							<Card.Text>sathaye@usc.edu</Card.Text>
							<Card.Link></Card.Link>
						</Card>
					</div>
				</div>
				<div className="member-cards row m-4">
					<div className="col-md-3">
						<Card className="p-2 shadow">
							<Card.Img src={Feya} className="contactImages"/>
							<Card.Title className="mt-3">Feya Shah</Card.Title>
							<Card.Text>Implementer | Lifecycle Planner</Card.Text>
							<Card.Text>fashah@usc.edu</Card.Text>
							<Card.Link></Card.Link>
						</Card>
					</div>
					<div className="col-md-3">
						<Card className="p-2 shadow">
							<Card.Img src={Kylie} className="contactImages"/>
							<Card.Title className="mt-3">Kylie Chinn</Card.Title>
							<Card.Text>PM | Operational Concept Engg</Card.Text>
							<Card.Text>kchinn@usc.edu</Card.Text>
							<Card.Link></Card.Link>
						</Card>
					</div>
					<div className="col-md-3">
						<Card className="p-2 shadow">
							<Card.Img src={Parul} className="contactImages"/>
							<Card.Title className="mt-3">Parul Gupta</Card.Title>
							<Card.Text>Feasibility Analyst | Quality</Card.Text>
							<Card.Text>parulgup@usc.edu</Card.Text>
							<Card.Link></Card.Link>
						</Card>
					</div>
					<div className="col-md-3">
						<Card className="p-2 shadow">
							<Card.Img src={Rucha} className="contactImages"/>
							<Card.Title className="mt-3">Rucha Tambe</Card.Title>
							<Card.Text>Prototyper | Implementer</Card.Text>
							<Card.Text>rtambe@usc.edu</Card.Text>
							<Card.Link></Card.Link>
						</Card>
					</div>
				</div>
			</div>
		</div>
  	);
}

export default App;
