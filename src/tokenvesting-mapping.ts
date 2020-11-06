import { BigInt } from "@graphprotocol/graph-ts"
import { log } from '@graphprotocol/graph-ts'

import {
    TokenVesting,
    ChangedMultisig,
    GrantAdded,
    GrantRemoved,
    GrantTokensClaimed,
    RoleAdminChanged,
    RoleGranted,
    RoleRevoked
  } from "../generated/TokenVesting/TokenVesting"

  import { VestingGrant } from "../generated/schema"

  export function handleGrantAdded(event: GrantAdded): void {
    // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
    let entity = VestingGrant.load(event.transaction.hash.toHex())
  
    // Entities only exist after they have been saved to the store;
    // `null` checks allow to create entities on demand
    if (entity == null) {
      entity = new VestingGrant(event.transaction.hash.toHex())
  
      // Entity fields can be set using simple assignments
      entity.count = BigInt.fromI32(0)
    }
  
    // BigInt and BigDecimal math are supported
    entity.count = entity.count + BigInt.fromI32(1)
  
    // Entity fields can be set based on event parameters
    entity.recipient = event.params.recipient
    entity.vesting_id = event.params.vestingId
  
    // Entities can be written to the store with `.save()`
    entity.save()
  
    // Note: If a handler doesn't require existing field values, it is faster
    // _not_ to load the entity from the store. Instead, create it fresh with
    // `new Entity(...)`, set the fields that should be updated and save the
    // entity back to the store. Fields that were not set or unset remain
    // unchanged, allowing for partial updates to be applied.
  
    // It is also possible to access smart contracts from mappings. For
    // example, the contract that has emitted the event can be connected to
    // with:
    //
    // let contract = Contract.bind(event.address)
    //
    // The following functions can then be called on this contract to access
    // state variables and other data:
    //
    // - contract.DEFAULT_ADMIN_ROLE(...)
    // - contract.VESTING_ADMIN_ROLE(...)
    // - contract.calculateGrantClaim(...)
    // - contract.getActiveGrantAmount(...)
    // - contract.getActiveGrants(...)
    // - contract.getRoleAdmin(...)
    // - contract.getRoleMember(...)
    // - contract.getRoleMemberCount(...)
    // - contract.hasRole(...)
    // - contract.multiSig(...)
    // - contract.token(...)
    // - contract.tokenGrants(...)
    // - contract.tokensVestedPerDay(...)
    // - contract.totalVestingCount(...)
  }
  
  export function handleChangedMultisig(event: ChangedMultisig): void {}
  
  export function handleGrantRemoved(event: GrantRemoved): void {}
  
  export function handleGrantTokensClaimed(event: GrantTokensClaimed): void {}
  
  export function handleRoleAdminChanged(event: RoleAdminChanged): void {}
  
  export function handleRoleGranted(event: RoleGranted): void {}
  
  export function handleRoleRevoked(event: RoleRevoked): void {}