/**
 * Render the component example and the JSON documentation (generated by
 * react-docgen)
 */

import PropTypes from 'prop-types';
import React from 'react';
import ReactComponentExample from './ReactComponentExample';
import ReactPropDocs from './ReactPropDocs';

class ReactComponentDoc extends React.PureComponent {
  renderExample() {
    if (this.props.hideExample) return;

    // Resolve the example component relative to the /packages/ directory
    const renderComponent = require(`../../../../${this.props
      .path}.example.jsx`).default;
    return <ReactComponentExample renderComponent={renderComponent} />;
  }

  renderPropDocs() {
    if (this.props.propDocs) {
      return (
        <div>
          <h3>Props</h3>
          <ReactPropDocs propDocs={this.props.propDocs} />
        </div>
      );
    }
  }

  render() {
    return (
      <section>
        <div
          className="c-details ds-u-margin-y--2 ds-u-measure--wide"
          dangerouslySetInnerHTML={{ __html: this.props.description }}
        />
        {this.renderExample()}
        {this.renderPropDocs()}
      </section>
    );
  }
}

ReactComponentDoc.propTypes = {
  description: PropTypes.string,
  hideExample: PropTypes.bool,
  path: PropTypes.string.isRequired,
  /* eslint-disable react/forbid-prop-types */
  propDocs: PropTypes.object
};

export default ReactComponentDoc;
