// pages/index.js
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to The Smith Agency Staffing App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/agents">Agents Management</Link>
          </li>
          <li>
            <Link href="/clients">Clients Management</Link>
          </li>
          <li>
            <Link href="/shows">Shows Management</Link>
          </li>
          <li>
            <Link href="/bookings">Bookings Management</Link>
          </li>
          <li>
            <Link href="/work">Work Compilation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
