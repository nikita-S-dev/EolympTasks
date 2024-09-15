#include <iostream>
#include <string>
#include <math.h>
using namespace std;

int main() 
{
    long long N, K;
     cin >> N >> K;

    string s;
    long long all_ = 1;
     all_ *= pow(2, N/2)*pow(3,N-N/2);  
    
    if (K > all_ || K == 0) 
    {
        cout << "NO" << endl;
    } 
     else 
     {
         for (int i = 0; i < N; ++i) 
         {
             if (i % 2 == 0) 
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
        cout << s << endl;
    }

}
