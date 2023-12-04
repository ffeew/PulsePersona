// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract IdentityRegistry {
    struct Identity {
        address owner; // the wallet address of the owner of the identity
        bytes32 didDocument; // hash of the DID document
        bool isActive;
        string ipfsCid; // location of the DID document on IPFS
    }

    struct Claim {
        bytes32 id;
        address issuer;
        bytes32 data; // hash of the claim data
        bool valid; // true if the claim is valid, false if it has been revoked
    }

    mapping(string => Identity) private identities;
    mapping(bytes32 => Claim) private claims;
    uint256 private claimIdCounter;

    // Events
    event IdentityRegistered(string did, address owner);
    event ClaimIssued(uint256 claimId, string did, bytes32 data);
    event ClaimRevoked(bytes32 claimId);
    event IdentityModified(string did, bytes32 newDidDocument);
    event IdentityTransferred(string did, address newOwner);

    /// @notice Constructor to initialize the claimIdCounter.
    constructor() {
        claimIdCounter = 1;
    }

    // Modifier that only allows the owner of the identity to execute the function
    modifier onlyOwner(string memory did) {
        require(
            msg.sender == identities[did].owner,
            "Caller is not the owner of the identity"
        );
        _;
    }

    /// @notice Registers a new identity
    /// @dev Emits an IdentityRegistered event on successful registration.
    /// @param did The decentralized identifier for the identity
    /// @param didDocument The hash of the DID document
    function registerIdentity(
        string calldata did,
        bytes32 didDocument,
        string calldata ipfsCid
    ) public {
        require(identities[did].owner == address(0), "DID already registered");
        identities[did] = Identity(msg.sender, didDocument, true, ipfsCid);
        emit IdentityRegistered(did, msg.sender);
        return;
    }

    /// @notice Modifies the DID document for a given identity
    /// @dev Only callable by the owner of the DID.
    ///      Emits an IdentityModified event on successful modification.
    /// @param did The decentralized identifier for the identity
    /// @param newDidDocument The new DID document hash to be associated
    function modifyDidDocument(
        string calldata did,
        bytes32 newDidDocument,
        string calldata ipfsCid
    ) public onlyOwner(did) {
        identities[did].didDocument = newDidDocument;
        identities[did].ipfsCid = ipfsCid;
        emit IdentityModified(did, newDidDocument);
        return;
    }

    /// @notice Transfers ownership of a given identity to a new owner
    /// @dev Only callable by the current owner of the DID.
    ///      Emits an IdentityTransferred event on successful transfer.
    /// @param did The decentralized identifier for the identity
    /// @param newOwner The address of the new owner
    /// @return True if the transfer is successful
    function transferOwnership(
        string calldata did,
        address newOwner
    ) public onlyOwner(did) returns (bool) {
        // check that new address is not zero address
        require(newOwner != address(0), "new address cannot be zero address");
        identities[did].owner = newOwner;
        emit IdentityTransferred(did, newOwner);
        return true;
    }

    /// @notice Deactivates a given identity
    /// @dev Only callable by the owner of the DID.
    /// @param did The decentralized identifier for the identity
    function deactivateIdentity(string calldata did) public onlyOwner(did) {
        identities[did].isActive = false;
        return;
    }

    /// @notice Reactivates a given identity
    /// @dev Only callable by the owner of the DID.
    /// @param did The decentralized identifier for the identity
    function reactivateIdentity(string calldata did) public onlyOwner(did) {
        identities[did].isActive = true;
        return;
    }

    /// @notice Issues a new claim associated with a given identity
    /// @dev Emits a ClaimIssued event on successful claim issuance.
    /// @param did The decentralized identifier for the identity
    /// @param dataHash The hash of the claim data
    /// @return The unique ID of the issued claim
    function issueClaim(
        string calldata did,
        bytes32 claimId,
        bytes32 dataHash
    ) public returns (uint256) {
        Identity memory identity = identities[did];
        require(identity.owner != address(0), "DID not registered");
        require(identity.isActive, "Identity is not active");
        claims[claimId] = Claim(claimId, msg.sender, dataHash, true);
        emit ClaimIssued(claimIdCounter, did, dataHash);
        return claimIdCounter++;
    }

    /// @notice Retrieves the hash of a given claim
    /// @dev The claim must exist and be valid.
    /// @param claimId The unique ID of the claim
    /// @return The hash of the claim data
    function getClaimHash(bytes32 claimId) public view returns (bytes32) {
        Claim memory claim = claims[claimId];
        require(claim.issuer != address(0), "Claim does not exist");
        require(claim.valid, "Claim has been revoked");
        return claim.data;
    }

    /// @notice Revokes a claim
    /// @dev Only callable by the issuer of the claim.
    ///      Emits a ClaimRevoked event on successful revocation.
    /// @param claimId The unique ID of the claim to be revoked
    function revokeClaim(bytes32 claimId) public {
        require(
            claims[claimId].issuer == msg.sender,
            "Only the issuer can revoke the claim"
        );
        claims[claimId].valid = false;
        emit ClaimRevoked(claimId);
        return;
    }

    /// @notice Retrieves the DID document hash for a given identity
    /// @dev The identity must be registered and active.
    /// @param did The decentralized identifier for the identity
    /// @return The DID document hash associated with the identity
    function getDidDocument(string calldata did) public view returns (bytes32) {
        require(identities[did].owner != address(0), "DID not registered");
        require(identities[did].isActive, "Identity is not active");
        return identities[did].didDocument;
    }

    /// @notice Checks if a DID is registered
    /// @param did The decentralized identifier for the identity
    /// @return True if the DID is registered, false otherwise
    function isDidRegistered(string calldata did) public view returns (bool) {
        return identities[did].owner != address(0);
    }

    /// @notice Checks if a DID is active
    /// @param did The decentralized identifier for the identity
    /// @return True if the DID is active, false otherwise
    function isDidActive(string calldata did) public view returns (bool) {
        return identities[did].isActive;
    }

    /// @notice Retrieves the IPFS CID for a given identity
    /// @dev The identity must be registered.
    /// @param did The decentralized identifier for the identity
    /// @return The IPFS CID associated with the identity
    function getDidIpfsCid(
        string calldata did
    ) public view returns (string memory) {
        require(identities[did].owner != address(0), "DID not registered");
        return identities[did].ipfsCid;
    }

    /// @notice Retrieves the owner of a given identity
    /// @dev The identity must be registered.
    /// @param did The decentralized identifier for the identity
    /// @return The address of the owner of the identity
    function getDidOwner(string calldata did) public view returns (address) {
        require(identities[did].owner != address(0), "DID not registered");
        return identities[did].owner;
    }
}
