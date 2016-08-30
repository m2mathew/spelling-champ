// Node Modules
import React from 'react';


// Local variables
const styles = {
	welcomeText: {
		fontSize: '24px',
	},
};


class WelcomeContainer extends React.Component {

	render() {
		return (
			<p style={styles.welcomeText}>
				YOU ARE WELCOME HERE
			</p>
		);
	}

}


export default WelcomeContainer;
