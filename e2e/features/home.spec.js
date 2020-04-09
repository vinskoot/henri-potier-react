import home from '../pages/home';

fixture`Home`.page`http://localhost:3000`;

test('Home text', async (t) => {
    await t.expect(home.text.innerText).contains('Hello World');
});
