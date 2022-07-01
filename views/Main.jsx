const React = require('react');
const Layout = require('./Layout');


module.exports = function Main() {
  return (
    <Layout>
      <form className="userName">
        <h1> Весёлые картинки!</h1>
        <div className="container-lg">
          <label htmlFor="exampleInputPassword1" className="form-label">Для начала впиши своё имя</label>
          <br/>
          <input type="text" className="player" id="player" />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Играть!</button>
      </form>
    </Layout>
  );
};
