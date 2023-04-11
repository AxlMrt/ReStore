import "./style.css";

interface Props {
  message?: string;
}

export default function LoadingComponent({message = 'Loading...'}: Props) {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <h4>{message}</h4>
    </div>
  );
}
