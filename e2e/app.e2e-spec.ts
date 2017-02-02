import { Docsys2FrontendPage } from './app.po';

describe('docsys2-frontend App', function() {
  let page: Docsys2FrontendPage;

  beforeEach(() => {
    page = new Docsys2FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
