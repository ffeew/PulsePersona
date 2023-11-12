// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract IdentityRegistry {
    struct Identity {
        address owner;
        string didDocument;
        bool isActive;
    }

    struct Claim {
        uint256 id;
        address issuer;
        string data; // hash of the claim data
        bool valid;
    }

    mapping(string => Identity) private identities;
    mapping(uint256 => Claim) private claims;
    uint256 private claimIdCounter;

    // Events
    event IdentityRegistered(string did, address owner);
    event ClaimIssued(uint256 claimId, string did, string data);
    event ClaimVerified(uint256 claimId, bool valid);
    event IdentityModified(string did, string newData);
    event IdentityTransferred(string did, address newOwner);

    // Modifier that only allows the owner of the identity to execute the function
    modifier onlyOwner(string memory did) {
        require(
            msg.sender == identities[did].owner,
            "Caller is not the owner of the identity"
        );
        _;
    }

    // Register a new identity
    function registerIdentity(string memory did, string memory didDocument)
        public
    {
        require(identities[did].owner == address(0), "DID already registered");
        identities[did] = Identity(msg.sender, didDocument, true);
        emit IdentityRegistered(did, msg.sender);
    }

    function modifyDidDocument(string memory did, string memory newDidDocument)
        public
        onlyOwner(did)
    {
        identities[did].didDocument = newDidDocument;
        emit IdentityModified(did, newDidDocument);
    }

    function transferOwnership(string memory did, address newOwner)
        public
        onlyOwner(did)
        returns (bool)
    {
        // check that new address is not zero address
        require(newOwner != address(0), "new address cannot be zero address");
        identities[did].owner = newOwner;
        emit IdentityTransferred(did, newOwner);
        return true;
    }

    // Deactivate an identity
    function deactivateIdentity(string memory did) public onlyOwner(did) {
        identities[did].isActive = false;
    }

    // Reactivate an identity
    function reactivateIdentity(string memory did) public onlyOwner(did) {
        identities[did].isActive = true;
    }

    // Issue a new claim
    function issueClaim(string memory did, string memory dataHash)
        public
        returns (uint256)
    {
        Identity memory identity = identities[did];
        require(identity.owner != address(0), "DID not registered");
        require(identity.isActive, "Identity is not active");
        claims[claimIdCounter] = Claim(
            claimIdCounter,
            msg.sender,
            dataHash,
            true
        );
        emit ClaimIssued(claimIdCounter, did, dataHash);
        return claimIdCounter++;
    }

    // Verify a claim
    function verifyClaim(uint256 claimId) public view returns (bool) {
        Claim memory claim = claims[claimId];
        require(claim.issuer != address(0), "Claim not issued");
        // emit ClaimVerified(claimId, claim.valid);
        return claim.valid;
    }

    // Revoke a claim
    function revokeClaim(uint256 claimId) public {
        require(
            claims[claimId].issuer == msg.sender,
            "Only the issuer can revoke the claim"
        );
        claims[claimId].valid = false;
        emit ClaimVerified(claimId, false);
    }

    // Retrieve DID document
    function getDidDocument(string memory did)
        public
        view
        returns (string memory)
    {
        require(identities[did].owner != address(0), "DID not registered");
        require(identities[did].isActive, "Identity is not active");
        return identities[did].didDocument;
    }
}
