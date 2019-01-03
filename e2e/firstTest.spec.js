describe('Example', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('sign_button')).tap();
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('should show other screen after tap show more button', async () => {
    await element(by.id('show_button')).tap();
    await expect(element(by.id('other'))).toBeVisible();
  });

  it('should show home screen after tap back button', async () => {
    await element(by.id('back_button')).tap();
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('should show welcome screen after tap', async () => {
    await element(by.id('signout_button')).tap();
    await expect(element(by.id('welcome'))).toBeVisible();
  });
})