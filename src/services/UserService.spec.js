import UserService from './UserService.js';


// test('adds 1 + 2 to equal 3', () => {
//     // UserService.getUser().then((user)=>{
//     expect(4).toBeGreaterThan(3);
//     // })
// });


// describe('text 1', () => {
//     it ('bla bla bla 111', () => {
//         // UserService.getUser().then((user)=>{
//             expect(5).toBeGreaterThan(3);
//         // })
//     })
// })

describe('text 2', () => {
    it('bla bla bla 222', async () => {
        var user = await UserService.getUser()
        expect(user.length).toBeGreaterThan(3);
    })
})