const assert = require('assert');
const _ = require("lodash");
const fs = require('fs');
describe("Auth", async function() {
  const authInstance = new Auth({
    providersSend: {
      //это для нас бесплатный провайдер и у многих уже есть
      async taximeterSend() {}

      // тоже бесплатно
      async tgBotSend() {},
      async voiceCallSend () {},
      async smsSend () {}

      //у смс может быть фрод, эта функция чекает его типо не больше одной смс в сутки но не более 5 смс в месяц на номер
      async smsFraudCheck () {}
    },
    user: {
      id: 1,
      phone: '+79182647123',
      taximeter: true,
      telegram_id: 123456
    }
  });

  it("Получить все доступные способы авторизации", async function() {
    authInstance.getEnabledProvidersList()
  }).timeout(0);

  it("Отправить код на каждого провайдера", async function() {
    authInstance.getEnabledProvidersList()
  }).timeout(0);

  it("Попытка повторной отправки кода смс (мы не должны еще раз отправлять его, т.к. код уже был отправлен)", async function() {
    authInstance.getEnabledProvidersList()
  }).timeout(0);

});
