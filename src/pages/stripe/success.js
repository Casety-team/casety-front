import "./success.css";

function Success() {
  return (
    <div id="body" className="text-center mt-5">
      <div className="form-signin">
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"
          alt="error loading "
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Success</h1>

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Success;
