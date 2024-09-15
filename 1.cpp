#include <bits/stdc++.h>
using namespace std;
int main(){
  int64_t S=0, cnt=1,n,k=0;
   cin >> n;
    vector<int64_t> A(n*(n-1)/2);
    vector<int> x(n),y(n);
     for(int i=0; i<n; i++)
     {
         cin >> x[i] >> y[i];
     }
      for(int i=0; i<n-1; i++)
      {
        for(int j=i+1; j<n; j++)
        { 
         int64_t dx = x[i]-x[j];
         int64_t dy = y[i]-y[j];
          A[k++] = ((dx*dx+dy*dy)<<32) + ((x[i]+x[j])<<16) + y[i]+y[j];
        }
      }
        sort(A.begin(),A.end());
         for(int i=1; i<A.size(); i++)
         {
             if (A[i]==A[i-1])
             {
                 cnt++;
             }
             else
             {
                S += cnt*(cnt-1)/2;  
                 cnt=1;
             }
         }
          S += cnt*(cnt-1)/2;
           cout << S;
            return 0;
}
