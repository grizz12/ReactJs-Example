import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-content">
      <h1>React Js Example Fetch Api</h1>
      <p>
        Views Example In Github For Learn Fetch Data In React JS Watch And Learn
      </p>
      <Link hrefLang="https://github.com">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/grizz12";
          }}
        >
          Github
        </button>
      </Link>
    </div>
  );
}
