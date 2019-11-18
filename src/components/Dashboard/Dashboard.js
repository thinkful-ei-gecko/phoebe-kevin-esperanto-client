import React, { Component } from "react";
import Button from "../Button/Button";
import languageContext from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default class Dashboard extends Component {
	static contextType = languageContext;

	render() {
		const { language, words } = this.context;

		return (
			<>
				<table>
					<thead>
						<tr>
							<td>
								<span className='bold'>Term</span>
							</td>
							<td>
								<span className='bold'>Translation</span>
							</td>
							<td>
								<span className='bold'>Correct Attempts</span>
							</td>
							<td>
								<span className='bold'>Total Attempts</span>
							</td>
						</tr>
					</thead>
					<tbody>
						{words.map(word => {
							return (
								<tr key={word.id}>
									<td>{word.original}</td>
									<td>{word.translation}</td>
									<td>{word.correct_count}</td>
									<td>{word.correct_count + word.incorrect_count}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<h3 className='Dashboard__h3 totalScore'>
					Total Score: {language.total_score}
				</h3>
				<Link to='/learn'>
					<Button>Learnu Esperanto!</Button>
				</Link>
			</>
		);
	}
}
