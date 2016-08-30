// Node Modules
import React from 'react';


// Local variables
const propTypes = {
  children: React.PropTypes.any,
};

const styles = {
  body: {
    height: '100%',
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
  },
};


// Component definition
function LayoutBody(props) {
  return (
    <div
      className="layout-body"
      style={styles.body}
    >
      {props.children}
    </div>
  );
}


// Component metadata
LayoutBody.propTypes = propTypes;


export default LayoutBody;
