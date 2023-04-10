import './validbutton.css'

interface Props {
  href: string;
  message: string;
}

export default function ValidButton({href, message}: Props) {
  return <a href={href} className='validbtn'>{message}</a>;
}
