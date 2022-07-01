const React = require('react');
const Layout = require('./Layout');

module.exports = function Quest1() {
  return (
    <Layout>
      <form>
        <h1> Вперед!</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">"Устройство для измельчения бумаги и враг Черепашки-ниндзя:"</label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Твой ответ</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
          <button className='enter-answer'><a href='http://localhost:3000/quest/2' >Отправить</a></button>
        </div>
      </form>
    </Layout>
  );
};
