#include <iostream>
#include <algorithm> 
#include <cmath>
#include <vector>


using namespace std;
using ll = unsigned long long int;


vector <int> big_primes;
ll max_prime = 0;
const int len = 31623;
 int primes[len]{};


            ll max(ll a, ll b)
            {
                return a > b ? a : b;
            }


        void factor(ll x){
            for (int i = 2; i < sqrt(x)+1; i++)
            {
                if (x==1)
                {
                    break;
                }
                else
                {
                    if (x%i==0){
                        int q = 0;
                         while (x%i==0)
                         {
                             x/=i;
                             q++;
                        }
                        primes[i] = max(primes[i], q);
                         max_prime = max(max_prime, i);

                    }
                }

            }
            if (x > 1) 
            {
                if (x>=len){
                    if (find(big_primes.begin(), big_primes.end(), x)==big_primes.end())
                    {
                        big_primes.push_back(x);
                    }
                }
                else
                {
                    primes[x] = max(primes[x], 1);
                    max_prime = max(max_prime, x);
                }
            }
        }

int main() {
    int n, k;
     cin >> n >> k;
    
      for (int i = 0; i < n; i++) 
      {
          ll a;
           cin >> a;
            factor(a);
      }

       ll ans = 1;
    
        for (ll i = 0; i<=max_prime; i++)
        {
            if (primes[i]>0)
            {
                for (int g = 0; g < primes[i]; g++)
                {
                   ans = (ans*i)%k;
                }
            }
        }
    
         for (int i: big_primes)
         {
             ans = (ans*i)%k;
         }
    
          cout << ans%k;
           return 0;
}
