// Node Modules
import React from 'react';


// Local variables
const propTypes = {
  children: React.PropTypes.any,
  hasPadding: React.PropTypes.bool,
};


// Local functions
function getStyles() {
  return {
    container: {
      backgroundColor: '#F2F2F2',
      display: 'block',
      fontSize: '14px',
      height: '100%',
      paddingTop: '98px',
      position: 'relative',
    },
  };
}


// Component definition
function LayoutContainer(props) {
  const styles = getStyles();

  return (
    <div
      className="layout-container"
      style={styles.container}
    >
      {props.children}
    </div>
  );
}


// Component metadata
LayoutContainer.propTypes = propTypes;


export default LayoutContainer;
