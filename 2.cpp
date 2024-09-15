#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;



    struct Point 
    {
        int x, y;
    };

     struct Segment 
     {
         Point p1, p2;
     };

      vector<Segment> Map;

      int product(Segment s1, Segment s2) 
      {
        int dx1 = s1.p1.x - s1.p2.x;
        int dy1 = s1.p1.y - s1.p2.y;
        int dx2 = s2.p1.x - s2.p2.x;
        int dy2 = s2.p1.y - s2.p2.y;
         return dx1 * dx2 + dy1 * dy2;
      }

      int area(Segment s1, Segment s2) {
         int dx1 = s1.p1.x - s1.p2.x;
         int dy1 = s1.p1.y - s1.p2.y;
         int dx2 = s2.p1.x - s2.p2.x;
         int dy2 = s2.p1.y - s2.p2.y;
          return fabs(dx1 * dy2 - dx2 * dy1);
        }

vector<vector<int>> enumerations = {{1, 2, 3}, {1, 3, 2}, {2, 3, 1}, {2, 1, 3}, {3, 1, 2}, {3, 2, 1}};

         int prov(vector<int> &enum_) {
            vector<Segment> l = {Map[0]};
             for (int j : enum_) 
             {
                l.push_back(Map[j]);
             }

              for (int k = 1; k < 4; ++k) 
              {
                if (l[k].p1.x == l[k - 1].p2.x && l[k].p1.y == l[k - 1].p2.y) 
                {
                    continue;
                } 
                else if (l[k].p2.x == l[k - 1].p2.x && l[k].p2.y == l[k - 1].p2.y) 
                     {
                      swap(l[k].p1, l[k].p2);
                     }
                     else {
                           return -1;
                          }
                if (product(l[k], l[k - 1]) != 0) 
                {
                    return -1;
                }
             }
            if ((l[3].p2.x != l[0].p1.x || l[3].p2.y != l[0].p1.y) || product(l[3], l[0]) != 0) {
                return -1;
            }
            return area(l[0], l[3]);
        }

int main() {
    for (int i = 0; i < 4; ++i) 
    {
        int a, b, c, d;
         cin >> a >> b >> c >> d;
          Map.push_back({{a, b}, {c, d}});
    }

     for (auto &i : enumerations) 
     {
        int x = prov(i);
         if (x != -1) {
            cout << "YES" << endl;
             cout << x << ".00" << endl;
        }
     }

      cout << "NO" << endl;
}
