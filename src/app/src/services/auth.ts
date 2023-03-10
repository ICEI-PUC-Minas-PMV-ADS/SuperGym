interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
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
