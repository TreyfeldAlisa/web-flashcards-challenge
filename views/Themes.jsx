const React = require('react');
const Layout = require('./Layout');

module.exports = function Theme() {
    return (
      <Layout>
        <form>
          <h1> Выбери тему!</h1>
          <button type="submit" className="btn tema1">Беляши</button>
          <button type="submit" className="btn tema2">Культурная</button>
          <button type="submit" className="btn tema3">Секретная</button>
        </form>
      </Layout>
    );
  };