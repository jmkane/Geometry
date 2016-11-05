import { GeometryPage } from './app.po';

describe('geometry App', function() {
  let page: GeometryPage;

  beforeEach(() => {
    page = new GeometryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
