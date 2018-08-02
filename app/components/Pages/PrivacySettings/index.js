import React, { Component } from 'react';
import CloseIcon from 'components/Common/FormCloseIcon';
import ConformBox from './conformbox';

import styles from './style.scss';

class PrivacySettings extends Component {

  render() {
    return (
      <div className={styles.privacyWrapper}>
      	<div className={styles.privacyBlock}>
      		<div className={styles.info_Content}>
      			<h2>We care about your privacy</h2>
      		</div>
      		<div className="row">
      			<CloseIcon/>
      			<div className="col-7">
      				<ol className={styles.privacy_Content}>
      					<li>Feature One
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      					</li>
      					<li>Feature Two
							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
      					</li>
      					<li>Feature Three
							<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
      					</li>
      					<li>Feature Four
							<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
      					</li>
      					<li>Feature Four
							<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
      					</li>
      					<li>Feature Four
							<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
      					</li>
      					<li>Feature Four
							<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
      					</li>
      					<li>Feature Four
							<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
      					</li>
      				</ol>

      			</div>
      			<div className="col-5">
      				<ConformBox/>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default PrivacySettings;