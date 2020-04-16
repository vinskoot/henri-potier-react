import home from '../pages/home';

fixture`Home`.page`http://localhost:3000`;

test('Home title', async (t) => {
    await t.expect(home.title.innerText).contains('Page d’accueil');
});
