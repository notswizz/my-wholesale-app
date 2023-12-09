import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header-nav">
          <li>
            <Link href="/agents">Agents</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
          <li>
            <Link href="/shows">Shows</Link>
          </li>
          <li>
            <Link href="/bookings">Bookings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
