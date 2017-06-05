// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button';
import Link from '../common/link';
import * as styleDefs from '../../styles/styleDefs';

type Props = {
  title: string
};

const TestText = ({title}: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <Link to="/" ><Button light raised>A button</Button></Link>
      <Link to="/" ><Button raised>A button</Button></Link>
      <Link to="/" ><Button dark raised>A button</Button></Link>
      <Link to="/" ><Button disabled raised>A button</Button></Link>
      <br />
      <Link to="/" ><Button light raised success>A button</Button></Link>
      <Link to="/" ><Button raised success>A button</Button></Link>
      <Link to="/" ><Button dark raised success>A button</Button></Link>
      <Link to="/" ><Button disabled raised success>A button</Button></Link>
      <br />
      <Link to="/" ><Button light raised warning>A button</Button></Link>
      <Link to="/" ><Button raised warning>A button</Button></Link>
      <Link to="/" ><Button dark raised warning>A button</Button></Link>
      <Link to="/" ><Button disabled raised warning>A button</Button></Link>
      <br />
      <Link to="/" ><Button light raised error>A button</Button></Link>
      <Link to="/" ><Button raised error>A button</Button></Link>
      <Link to="/" ><Button dark raised error>A button</Button></Link>
      <Link to="/" ><Button disabled raised error>A button</Button></Link>
      <br />
      <Link to="/" ><Button light raised other>A button</Button></Link>
      <Link to="/" ><Button raised other>A button</Button></Link>
      <Link to="/" ><Button dark raised other>A button</Button></Link>
      <Link to="/" ><Button disabled raised other>A button</Button></Link>
    </div>
  );
};

TestText.propTypes = {
  title: PropTypes.string.isRequired
};

export default TestText;
