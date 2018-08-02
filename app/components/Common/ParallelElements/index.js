import React from 'react';
import { connect } from 'react-redux';

import style from './style.scss';

const ParallelElement = ({ children }) => <div className={style.parallelBase}>{children}</div>;

export default ParallelElement;
