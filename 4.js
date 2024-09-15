                    const deg = (x, p) => 
                    {
                        let res = 0;
                         while (x % p === 0) 
                         {
                             x /= p;
                             res++;
                         }
                          return res;
                    }

            const solve = (x) => 
            {
                let ans = 1;
                let max_degree = 0;
                let p;

                 for (let i = 2; i * i <= x; i++) 
                 {
                     if (x % i === 0) 
                     {
                         ans *= i;
                         let q = 0;
                          while (x % i === 0) 
                          {
                             x /= i;
                             q++;
                          }
                          if (q > max_degree) 
                          {
                              max_degree = q;
                              p = i;
                          }
                     }
                 }

                    if (x > 1) 
                    {
                        ans *= x;
                    }

                    if (max_degree > ans) 
                    {
                        for (let i = 1; i <= max_degree; i++) 
                        {
                            if (ans * i * (1+deg(i, p)) >= max_degree) 
                            {
                                return ans * i;
                            }
                        }
                    }

                     return ans;
            }

const readline = require('readline');

const rl = readline.createInterface({
                                     input: process.stdin,
                                    output: process.stdout
                                     });

    rl.question('', 
                ////-------------
                (s) => {
                         console.log(solve(parseInt(s)));
                          rl.close();
                       }
               );
