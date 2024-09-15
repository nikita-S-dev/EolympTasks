let input = '';
 process.stdin.on('data', 
                 ////----------------------------
                 (chunk) => {
                             input += chunk;
                 });

 process.stdin.on('end', 
                  ////--------------------------- 
                  () => {
                     const lines = input.trim().split('\n');  
                      const n = parseInt(lines[0], 10);        
                     const x = [];
                     const y = [];

                       for (let i = 1; i <= n; i++) 
                       {
                           const [xi, yi] = lines[i].split(' ').map(Number);  
                            x.push(xi);
                            y.push(yi);
                       }
                     let S = 0;
                     let cnt = 1;
                     let k = 0;
                     const A = [];

                        for (let i = 0; i < n - 1; i++) 
                        {
                          for (let j = i + 1; j < n; j++) 
                          {
                            const dx = x[i] - x[j];
                            const dy = y[i] - y[j];
                             A[k++] = ((dx * dx + dy * dy) << 32) + ((x[i] + x[j]) << 16) + y[i] + y[j];
                          }
                       }
                         A.sort((a, b) => a - b); 
                          for (let i = 1; i < A.length; i++) 
                          {
                           if (A[i] === A[i - 1]) 
                           {
                            cnt++;
                           } 
                           else 
                              {
                               S += cnt * (cnt - 1) / 2;
                                cnt = 1;
                              }
                         }
                          S += cnt * (cnt - 1) / 2;
                           console.log(S);
                        });
