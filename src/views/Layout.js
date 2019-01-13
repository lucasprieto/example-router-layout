import React from 'react'
import { Link } from 'react-router-dom'

export default ({children}) => <div>
    <header>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/other">Other</Link>
            </li>
            <li>
                <Link to="/nolayout">No Layout</Link>
            </li>
        </ul>
    </header>
    <main>
        {children}
    </main>
</div>