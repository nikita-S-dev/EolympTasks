const readline = require('readline');

 const rl = readline.createInterface({
                                    input: process.stdin,
                                    output: process.stdout
                                   });

        function findString(N, K) 
        {
            let s = '';
            const halfN = Math.floor(N / 2);
             let all_ = Math.pow(2, halfN) * Math.pow(3, N - halfN);

             if (K > all_ || K === 0) 
             {
                 return 'NO';
             }
             else 
             {
                for (let i = 0; i < N; i++) 
                {
                    if (i % 2 === 0) 
                    {
                        all_ /= 3;
                         if (2 * all_ < K) 
                         {
                             s += 'C';
                             K -= 2 * all_;
                         }
                          else if (all_ < K) 
                              {
                                  s += 'B';
                                  K -= all_;
                              } 
                           else 
                           {
                               s += 'A';
                           }
                    }
                     else 
                     {
                        all_ /= 2;
                         if (all_ < K) 
                         {
                             s += 'E';
                             K -= all_;
                         }
                          else 
                          {
                              s += 'D';
                          }
                    }
                }
                return s;
            }
        }

  rl.on('line', 
      ///-------------
      (line) => {
    
                const [N, K] = line.split(' ').map(Number);
                 console.log(findString(N, K));
                  rl.close();
    
                }
     );
