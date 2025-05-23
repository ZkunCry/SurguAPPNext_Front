import Link from "next/link";
import "./style.css";
import { cn } from "@/utils/utils";

const Card = ({ icon, title, description, delay, href }) => {
  return (
    <div className={cn(delay, "card")}>
      <div className="card-icon">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <Link href={href} className="card-button">
        Перейти
      </Link>
    </div>
  );
};

export default Card;
