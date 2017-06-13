import { CfnaPage } from './app.po';

describe('cfna App', () => {
  let page: CfnaPage;

  beforeEach(() => {
    page = new CfnaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to sr!!'))
      .then(done, done.fail);
  });
});
