import { Link } from "react-router-dom";

const EachRepo = (repos) => {
  console.log(repos);
  return (
    <section className="each_repo-container">
      <Link to={`${repos.repo.html_url}`} className="each_repo">
        <h2 className="each_repo-title">{repos.repo.name}</h2>
        <p className="each_repo-description">
          {repos.repo.description?.length > 25 ? repos.repo.description.substr(0,25) + "..." : repos.repo.description}
          {/* {repos.repo.description.length > 10 
            ? repos.repo.description.substr(0, 10) + "..."
            : repos.repo.description} */}
        </p>
      </Link>
    </section>
  );
};

export default EachRepo;
