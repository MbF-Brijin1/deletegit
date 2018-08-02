import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { map } from 'lodash';

class Accordion extends Component {
  accordionToggle(id) {
    const $targetId = $(`#accordionHead${id}`);
    if ($targetId.hasClass('accordionActive') === false) {
      $('.accordionBlock').removeClass('accordionActive');
      $('.accordionContent').slideUp();
      $targetId.addClass('accordionActive');
      $(`#accordionContent${id}`).slideDown();
    } else {
      $('.accordionBlock').removeClass('accordionActive');
      $('.accordionContent').slideUp();
    }
    return false;
  }

  render() {
    const { data } = this.props;
    const list = map(data, (el, i) => (
      <div key={i} id={`accordionHead${i}`} className="accordionBlock" onClick={this.accordionToggle.bind(this, i)}>
        <h5>{el.title}</h5>
        <div id={`accordionContent${i}`} className="accordionContent">
          <p>{el.body}</p>
        </div>
      </div>
    ));
    return <div className="accordionRow">{list}</div>;
  }
}

export default Accordion;
