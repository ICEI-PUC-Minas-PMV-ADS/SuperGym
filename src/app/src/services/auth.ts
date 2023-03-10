export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'l2k3j4lkasdjakdj2as23asd34s34ws',
        user: {
          name: 'UserName',
          email: 'user@email.com'
        }
      });
    }, 2000);
  });
}
