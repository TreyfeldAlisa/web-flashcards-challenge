const React = require('react');
const Layout = require('./Layout');

module.exports = function Main() {
  return (
    <Layout>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Type your Name</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Play!</button>
      </form>
    </Layout>
  );
};
