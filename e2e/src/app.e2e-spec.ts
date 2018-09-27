import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to my-ng6-app!');
  });


  it('empty page', () => {
    page.navigateToTest();
    expect(page.getParagraphTextTest()).toEqual('Welcome to my-ng6-app!');
  });

  it('empty page2', () => {
    page.navigateToTest2();
    expect(page.getParagraphTextTest2()).toEqual('Welcome to my-ng6-app!');
  });

  it('empty page3', () => {
    page.navigateToTest3();
    expect(page.getParagraphTextTest3()).toEqual('Welcome to my-ng6-app!');
  });

  it('empty page4', () => {
    page.navigateToTest4();
    expect(page.getParagraphTextTest4()).toEqual('Welcome to my-ng6-app!');
  });

  it('test e2e', () => {
    page.navigateTo();
    expect(page.getParagraphTextH3()).toEqual('test e2e');
  });

  it('before click event', () => {
    page.navigateTo();
    expect(page.getParagraphTextClickH4()).toEqual('before click event');
    // expect(page.getParagraphTextClickH4()).toEqual('after click event');
  });

  it('after click event', () => {
    page.navigateTo();
    expect(page.getParagraphTextClickedH4()).toEqual('after click event');
  });



});
