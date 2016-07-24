/**
 * Created by kevin on 16/7/21.
 */
var d = new Promise((resolve, reject) => {
    setTimeout( () => {
        if(true) {
            resolve('hello world');
        }else {
            reject('no bueno');
        }
    }, 2000);
});

d.then((data) => {
    console.log(' success : ', data);
    return 'foo bar';
    }
)
// , (error) => {
//     console.error('new error msg: ', error);
// }
    .then((data) => {
        console.log('success 2 : ', data)
        throw new Error('error thrown!');
    }).
    catch((error) => console.error('error : ', error));