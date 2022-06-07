**Find the Town Judge**
​
If trust[i] = [*a, b*] where *a* trusts *b*, then a judge *b* can never be in *a*'s position. Since everyone trusts the judge, it can only be at *b*. Using a map, we can store the frequency of trusted people. Using a set, we store every "truster". For every element in trust input, we can store *b* as our key and increment a count value every time we encounter it. We then store *a* in our set. After destructuring key/values, we iterate through our map again to check if each key's value equals n - 1 (number of people subtracting the judge) AND if our key is not also in our set. If both are satisfied, we return key. Otherwise, we return -1;
​
Time: O(nm), where n is length of trust input and m is size of map.
Space: O(n), which is size of our map plus size of our set, constants reduced.
​