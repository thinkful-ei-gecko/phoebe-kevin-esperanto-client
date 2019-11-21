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
			<>
				<h3>Words to practice</h3>
				<ul className='Dashboard__ul'>
					<li className='Dashboard__li'>
						<div className='Display__h4 word table bold'>Term</div>

						{/* <div className='bold'>Translation</div> */}

						<div className='table bold'>Correct</div>

						<div className='table bold'>Wrong</div>
            <div className='table bold'>Total</div>
					</li>
					{words.map(word => {
						return (
							<li key={word.id} className='Dashboard__li'>
								{/* dangerouslySet h4 to allow for 'ĉ' character */}
								<h4 className='Display__h4 word table' dangerouslySetInnerHTML={{__html: word.original}} />
								<div className='table'>{word.correct_count}</div>
								<div className='table'>{word.incorrect_count}</div>
                <div className='table'>{word.correct_count + word.incorrect_count}</div>
							</li>
						);
					})}
				</ul>

				<h5>Total correct answers: {language.total_score}</h5>
				<a href='/learn'>
					<Button>Start</Button>
				</a>
			</>
		);
	}
}
