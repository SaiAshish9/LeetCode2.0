#include <iostream>
#include <limits.h>
#include <cmath>
#include <bits/stdc++.h>

using namespace std;

typedef unsigned int UINT;

class Node
{
public:
    int data;
    Node *next;
};

int a = 10;

string s = "asd";

int main()
{
    Node n;
    UINT u = 30;
    int a = 20;
    n.data = 10;
    n.next = nullptr;
    cout << n.data << endl;
    cout << ::a;
    cout << LLONG_MAX << endl;
    cout << pow(2, 63) - 1 << endl;
    cout << (pow(2, 63) - 1 == LLONG_MAX) << endl;
    cout << (pow(2, 31) - 1 == INT_MAX) << endl;
    cout << numeric_limits<double>::max() << endl;
    cout << u << endl
         << s << endl;
    map<int, char> m = {{1, 'A'}, {2, 'B'}, {3, 'C'}, {4, 'D'}, {5, 'E'}};
    for (auto [k, v] : m)
    {
        cout << k << ": " << v << endl;
    }
}
