const readline = require('readline');

 const rl = readline.createInterface({
                                      input: process.stdin,
                                      output: process.stdout
});



                            function sighs(x) 
                            {
                                let count = 0;
                                for (let g of x) 
                                {
                                    if (g === '+' || g === '-' || g === '*' || g === ':') 
                                    {
                                        count++;
                                    }
                                }
                                return count;
                            }



  rl.question('', 
            ///-----------
            (input) => {
                    let [N, K] = input.split(' ').map(Number);
                    let lis = [];

                    const lines = [];

                    rl.on('line', 
                          ///---------
                          (line) => 
                                  {
                                    lines.push(line);
                                    if (lines.length === N) 
                                    {
                                        for (let i = 0; i < N; i++) 
                                        {
                                            lis.push(sighs(lines[i]));
                                        }

                                        let Map = Array.from({ length: N }, () => Array(K).fill(0));
                                         for (let i = 0; i<N; i++)
                                         {
                                             Map[i][0] = 1;
                                         }

                                          for (let i = 1; i < N; i++) 
                                          {
                                              let now = lis[i];
                                               for (let t = 0; t < i; t++)
                                               {
                                                   if (lis[t] < now) {
                                                       for (let j = 1; j < K; j++) 
                                                       {
                                                          Map[i][j] += Map[t][j - 1];
                                                       }
                                                   }
                                               } 
                                          }

                                           let ans = 0;
                                            for (let i = 0; i < N; i++) 
                                            {
                                                ans += Map[i][K - 1];
                                            }

                                             console.log(ans === 0 ? -1 : ans);
                                              rl.close();
                                    }
                    });
});
