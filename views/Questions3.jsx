const React = require('react');
const Layout = require('./Layout');

module.exports = function Quest3() {
  return (
    <Layout>
      <form>
        <h1> Вперед!</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Волевой и решительный репортёр новостей, который всегда стремится быть в центре событий.</label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Твой ответ</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
          <button className='enter-answer'><a href='http://localhost:3000/quest/4' >Отправить</a></button>
        </div>
      </form>
    </Layout>
  );
};
