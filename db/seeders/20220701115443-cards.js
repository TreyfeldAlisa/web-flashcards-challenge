'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        question: 'Дети, вы готовы?', answer: 'Да, Капитан!', deck_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Кто проживает на дне океана?', answer: '₽оссийский ₽убль', deck_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Если картошка фри то почему она платная ?', answer: 'санкции', deck_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Самые высокооплачиваемые проститутки ?', answer: 'политические', deck_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Где беляши являются национальной кухней ?', answer: 'На вокзалах', deck_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Сколько стоит самая дорогая шаурма в мире (в фунтах стерлингов) ?', answer: '750', deck_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },     


      {
        question: 'Что прорубил Петр I ?', answer: 'Windows', deck_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какой император умер от табакерки ?', answer: 'Павел I', deck_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      { 
        question: 'Сколько мостов в Санкт-Петербурге ?', answer: '800', deck_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Самый широкий мост в Петербурге ?', answer: 'Синий', deck_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Самый счастливый человек в Петербурге ?', answer: 'Синий', deck_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'На сколько лет Путин больше у власти чем Екатерина 2 ?', answer: '12', deck_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Что общего у Екатерины 2 и джавы ?', answer: 'женский род', deck_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Кто продал Аляску ?', answer: 'не Екатерина', deck_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      

      {
        question: 'Продолжите последовательность, Микеланджело, Леонардо, Рафаэль, ...', answer: 'донателло', deck_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Устройство для измельчения бумаги и враг Черепашки-ниндзя:', answer: 'шредер', deck_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Его оружием являются два сая, а его повязка красного цвета...', answer: 'рафаэль', deck_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Волевой и решительный репортёр новостей, который всегда стремится быть в центре событий.', answer: 'эйприл', deck_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Мобильная танкоподобная крепость, которая впервые появился в мультсериале 1987 и использовался различными версиями Крэнга:', answer: 'технодром', deck_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'В команде черепашек он отвечает за комические ситуации и юмор, обожает пиццу и различные развлечения.', answer: 'микеланджело', deck_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Из род грызунов и семейства мышиных, готов всегда наставить на путь', answer: 'сплинтер', deck_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
    ]);  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
