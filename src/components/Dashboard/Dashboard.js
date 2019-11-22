import React, { Component } from "react";
import Button from "../Button/Button";
import languageContext from "../../contexts/LanguageContext";
// import { Link } from "react-router-dom";
import "./Dashboard.css";

export default class Dashboard extends Component {
	static contextType = languageContext;

	render() {
		const { language, words } = this.context;

		return (
			<div className='Dashboard___mainContainer'>
				<h3 className='Dashboard__h3'>Phrases to Practice</h3>
				<ul className='Dashboard__ul'>
					<div className='Dashboard___tableHeaders Dashboard__li'>
						<div className='Display__h4 term tableCell bold'>Term</div>

						{/* <div className='bold'>Translation</div> */}

						<div className='Display__scoreHeaders'>
							<div className='tableCell bold'>Correct</div>
							<div className='tableCell bold'>Wrong</div>
							<div className='tableCell bold'>Total</div>
						</div>
					</div>
					{words.map(word => {
						return (
							<li key={word.id} className='Dashboard__li'>
								{/* dangerouslySet h4 to allow for 'ĉ' character */}
								<h4 className='Display__h4 term tableCell' dangerouslySetInnerHTML={{__html: word.original}} />
								<div className='Dashboard___scoreContainer'>
									<div className='tableCell'>{word.correct_count}</div>
									<div className='tableCell'>{word.incorrect_count}</div>
									<div className='tableCell'>{word.correct_count + word.incorrect_count}</div>
								</div>
							</li>
						);
					})}
				</ul>

				<h5>Total correct answers: {language.total_score}</h5>
				<a href='/learn'>
					<Button className='Dashboard__button mobile___longButton'>Start Practice</Button>
				</a>
			</div>
		);
	}
}
