# Singly Linked List

Implement a linked list

## Challenge

* Create a Linked List class
* Within your Linked List class, include a head property.
    Upon instantiation, an empty Linked List should be created.
* The class should contain the following methods
  * insert
    * Arguments: value
    * Returns: nothing
    * Adds a new node with that value to the head of the list with an O(1) Time performance.
  * includes
    * Arguments: value
    * Returns: Boolean
      * Indicates whether that value exists as a Node’s value somewhere within the list.
  * to string
    * Arguments: none
    * Returns: a string representing all the values in the Linked List, formatted as:
    * "{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency

I used references to build my linked list as close to the spirit of the challenge as I could find, specifically on geeksforgeeks and medium. I found it to be most efficient to write a separate node class to use within the linked list.

## API

All methods are publicly available
