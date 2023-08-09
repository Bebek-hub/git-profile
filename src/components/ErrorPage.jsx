
// add an image 
function ErrorPage(errors) {
  return (
    <div className="error_container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error just occur</p>
      <p className="error_container-message">{errors.error}</p>
    </div>
  );
}

export default ErrorPage;
