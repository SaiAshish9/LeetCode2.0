#include <iostream>
#include <limits.h>
#include <cmath>
#include <map>

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

// C++ Program to demonstrate inline functions and classes
#include <iostream>

using namespace std;

class operation
{
    int a, b, add, sub, mul;
    float div;

public:
    void get();
    void sum();
    void difference();
    void product();
    void division();
};
void operation ::get()
{
    cout << "Enter first value:";
    cin >> a;
    cout << "Enter second value:";
    cin >> b;
}

inline void operation ::sum()
{
    add = a + b;
    cout << "Addition of two numbers: " << a + b << "\n";
}

inline void operation ::difference()
{
    sub = a - b;
    cout << "Difference of two numbers: " << a - b << "\n";
}

inline void operation ::product()
{
    mul = a * b;
    cout << "Product of two numbers: " << a * b << "\n";
}

inline void operation ::division()
{
    div = a / b;
    cout << "Division of two numbers: " << a / b << "\n";
}

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
    for (const auto c : m)
    {
        cout << c.first << ": " << c.second << endl;
    }
    cout << "Program using inline function\n";
    operation s;
    s.get();
    s.sum();
    s.difference();
    s.product();
    s.division();
}

// clang++ -std=c++17 src/test.cpp -o test && ./test
