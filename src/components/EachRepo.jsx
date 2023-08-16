import { Link } from "react-router-dom";

const EachRepo = (repos) => {
  return (
    
    <Link to={`${repos.repo.html_url}`} target="_blank" className="each_repo">
      <h2 className="each_repo-title">{repos.repo.name}</h2>
      <p className="each_repo-description">
        {repos.repo.description?.length > 35
          ? repos.repo.description.substr(0, 35) + "..."
          : repos.repo.description}
      </p>
    </Link>
  );
};

export default EachRepo;
