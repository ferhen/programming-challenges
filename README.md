# Programming Challenge

This repo contains the code for the following programming problems
- [Factorial Hash](#factorial-hash)
- [Name Book](#name-book)

# Run
Before running the solutions, it is necessary to install the development dependencies with

```
npm install
```

To run the tests located in `.\tests\` execute the command

```
npm test
```


# Factorial Hash <a name="factorial-hash"></a>

To run Factorial Hash with custom a value use the following command
```
npm run factorial-hash {value}
```
Where `{value}` is an integer between [0, 10000].

## Solution approach
To solve the factorial calculation problem, a recursive approach was used using the following equation

![factorial](https://latex.codecogs.com/gif.latex?n!=n\cdot&space;(n-1)!)

With base cases being `n = 0` and `n = 1`.

## Steps to ensure that solution and implementation are correct
To ensure that the solution and implementatrion are correct test cases where added.
The tests are the following:
- factorialOf0
- factorialOf1
- factorialOf2
- factorialOf3
- factorialOf4
- factorialOf5
- factorialOf100
- shouldThrowWhenNegative


## Optimization
Two solutions were implemented and tested, the recursive approach and the iterative approach. After tests, tests it was found that the iterative approach was slower for larger numbers.

# Name Book <a name="name-book"></a>

To run Name Book with custom a value use the following command
```
npm run name-book
```
The values are read from `.\name-book\names.txt`

## Solution approach
This problem was solved using the following steps
1. The array of names was sorted by the length of the names with descending order.
2. Two pointers were used, one starting in the first name of the array and the second one starting on the next name of the list.
3. The second pointer looped though the names checking if the name with smaller or equal length was part of the name with more characters, using `Array.startsWith`.
4. After each loop of the second pointer, the first pointer moved to the next position, and the second restarted to the position right to position of the first pointer.
5. If an occourence was found, the loops were broken and the result was false, if no occourence was found the result was true.


## Steps to ensure that solution and implementation are correct
To ensure that the solution and implementatrion are correct test cases where added.
The tests are the following:
- shouldBeFalse (`['bob', 'john', 'claire', 'johnson']`)
- shouldBeTrue  (`['alice', 'bob']`)
- shouldThrowWhenOnlyOneName

## Optimization
To avoid repeated comparisons, the two pointers never pointed to the same name, and when the first occurrence was found it broke off from the iterations.


