import { Link } from "react-router-dom";

const EachRepo = (repos) => {
  console.log(repos);
  return (
    <section>
      <Link to={`${repos.repo.html_url}`}>
        <h2 className="repo_title">{repos.repo.name}</h2>
        <p className="repo_description">
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
