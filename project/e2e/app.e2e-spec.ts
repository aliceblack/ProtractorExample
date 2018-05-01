import { AppPage } from './app.po';

describe('e2e-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should have title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('E2eProject');
  });

  it('calculated total should be correct', () => {
    page.navigateTo();
    page.calculate(5,5);
    expect(page.getTotal()).toEqual('10');
  });
});
