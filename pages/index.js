// pages/index.js
import Link from 'next/link';

const HomePage = () => {
  return (
      <div className="container">
        <div className="content" style={{ padding: '20px' }}>
          <nav>
            <ul className="index-nav">
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
              <li>
                <Link href="/match">Match</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  );
};

export default HomePage;
