import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-500"
                        // : isPending
                        // ? "pending"
                        : ""
                    }
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;