import { useParams } from "react-router-dom";
import "./banner.css";

interface Props {
  name: string;
}

export default function Banner({ name }: Props) {
  
  return (
    <section className="banner">
      <h4>
        Home / <span>{name}</span>
      </h4>
    </section>
  );
}
