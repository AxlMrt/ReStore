import { Link } from 'react-router-dom';
import './validbutton.css'

interface Props {
  href: string;
  message: string;
}

export default function ValidButton({href, message}: Props) {
  return <Link to={href} className='validbtn'>{message}</Link>;
}
