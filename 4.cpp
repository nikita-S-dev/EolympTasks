
#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;
using ll = long long;

            int deg(ll x, ll p)
            {
                ll res = 0;
                 while (x%p == 0)
                 {
                     x /= p;
                     res++;
                 }
                  return res;
            }

    ll solve(ll x)
    {
        ll ans = 1;
        ll max_degree = 0;
        ll p;

        for (int i = 2; i*i <= x; i++)
        {
            if (x%i==0)
            {
                ans*=i;
                int q = 0;
                 while (x%i==0)
                 {
                     x/=i;
                     q++;
                 }
                  if (q>max_degree)
                  {
                      max_degree = q;
                      p = i;
                  }
            }

        }
           if (x>1)
           {
              ans*=x;
           }
            if (max_degree>ans)
            {
                for (int i = 1; i<=max_degree; i++)
                {
                    if (ans*i*(1+deg(i, p))>=max_degree)
                    {
                        return ans*i;
                    }
                }
            }
             return ans;
     }

int main() 
{
   int s;
    cin >> s;
     cout << solve(s);
      return 0;
}
