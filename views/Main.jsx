const React = require('react');
const Layout = require('./Layout');


module.exports = function Main() {
  return (
    <Layout>
      <form name="userName" className="userName">
        <h1> Весёлые картинки!</h1>
        <div className="container-lg">
          <label htmlFor="exampleInputPassword1" className="form-label">Для начала впиши своё имя</label>
          <input type="text" className="player" id="player" />
        </div>
        <button type="submit" className="btn btn-primary"><a href='http://localhost:3000/theme' >Играть!</a></button>
      </form>
    </Layout>
  );
};
