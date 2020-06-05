pragma solidity >=0.5.0;

contract Football {
    string public teamName;
    string public managerName;

    constructor (string memory _teamName, string memory _managerName) public {
        teamName = _teamName;
        managerName = _managerName;
    }

    function setTeamName(string memory _teamName) public{
        teamName = _teamName;
    }

    function setManagerName(string memory _managerName) public{
        teamName = _managerName;
    }
}