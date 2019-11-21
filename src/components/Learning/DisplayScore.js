import React from "react";

const DisplayScore = props => {
	return (
		<div className='DisplayScore__div'>
			<p className='DisplayScore__p'>Total Correct: {props.totalScore}</p>
		</div>
	);
};

export default DisplayScore;
