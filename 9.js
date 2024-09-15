const readline = require('readline');

 const rl = readline.createInterface({
                                    input: process.stdin,
                                    output: process.stdout
                                    });


                        function solve(x) 
                        {
                            let t = 0;
                            const sqrtX = Math.sqrt(x);
                             if (Math.abs(sqrtX - Math.floor(sqrtX)) < 0.001) 
                             {
                                 t = 1;
                             }

                              for (let a = Math.floor(sqrtX) - t; a > 0; --a) 
                              {
                                  if (x % a === 0) 
                                  {  
                                     const b = x / a;
                                      if ((b - a) % 2 === 0) 
                                      {
                                          return (b - a) / 2;
                                      }
                                  }
                              }
                                return -1;
                        }

let T;
const results = [];
  rl.once('line', 
               ////-----------------------------------------      
               (line) => {
                        T = parseInt(line.trim(), 10);
                         rl.on('line', 
                                    ////-------------------------------   
                                    (line) => {
                                                const q = parseInt(line.trim(), 10);
                                                 const result = solve(q);
                                                  results.push(result);

                                                   if (results.length === T) 
                                                   {
                                                      results.forEach(result => console.log(result));
                                                       rl.close();
                                                   }
                                              }
                             );
                        }
);

