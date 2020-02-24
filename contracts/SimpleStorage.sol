pragma solidity ^0.5.0;

contract SimpleStorage {
    uint public data = 0;
    
    function set(uint _data) public {
        data = _data;
    }
    
    function get() view public returns(uint) {
        return data;
    }
}