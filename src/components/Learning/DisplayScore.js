import React from "react";

const DisplayScore = props => {
	return (
		<div className='DisplayScore'>
			<p>Your total score is: {props.totalScore}</p>
		</div>
	);
};

export default DisplayScore;
