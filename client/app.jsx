import React from 'react';

module.exports = () => (
	<div>
		<h1>Hello hrr22 and hrr23!</h1>
		<p>This app is <span>{process.env.working || 'not'}</span> working properly!</p>
	</div>
);
