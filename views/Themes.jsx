const React = require('react');
const Layout = require('./Layout');

module.exports = function Theme() {
    return (
      <Layout>
        <form className='themes'>
          <h1> Выбери тему!</h1>
          <button type="submit" className="btn tema1"><a href='http://localhost:3000/quest' >Беляши</a></button>
          <button type="submit" className="btn tema2"><a href='http://localhost:3000/quest' >Культурная</a></button>
          <button type="submit" className="btn tema3"><a href='http://localhost:3000/quest' >Секретная</a></button>
        </form>
      </Layout>
    );
  };