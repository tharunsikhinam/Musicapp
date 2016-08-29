/**
 * Created by quikr on 7/12/16.
 */
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (<nav> <IndexLink to="/" activeClassName="active">Home</IndexLink>
                  {" | "}
                <Link to="/users"  activeClassName="active" >Users</Link>
                {" | "}
                <Link to="/login"  activeClassName="active" >Login</Link>
          </nav>
);
};

export default Header;

