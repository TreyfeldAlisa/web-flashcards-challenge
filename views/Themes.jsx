const React = require('react');
const Layout = require('./Layout');

module.exports = function Theme() {
    return (
      <Layout>
        <form className='themes'>
          <h1> Выбери тему!</h1>
          <button type="submit" className="btntema1">Беляши</button>
          <button type="submit" className="btntema2">Культурная</button>
          <button type="submit" className="btntema3">Секретная</button>
        </form>
      </Layout>
    );
  };