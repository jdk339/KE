import { KidExchangerPage } from './app.po';

describe('kid-exchanger App', () => {
  let page: KidExchangerPage;

  beforeEach(() => {
    page = new KidExchangerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
