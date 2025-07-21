import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem' }}>
        <li><Link to="/">Strona główna</Link></li>
        <li><Link to="/o-nas">O nas</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
}
