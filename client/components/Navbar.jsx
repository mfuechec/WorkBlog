import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/">One</Link>
            <Link to="/two">Two</Link>
            <Link to="/three">Three</Link>  
        </div>
    )
}