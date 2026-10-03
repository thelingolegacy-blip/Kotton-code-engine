# KC Studio OS — Firestore Schema Specification v1

Specification only. No authorization is granted by this document.

## Collections

### realms/{realmId}
- name
- slug
- description
- ageRange
- lessonProfile
- backgroundSet
- characterSet
- soundProfile
- canonVersion

### episodes/{episodeId}
- title
- slug
- realmId
- ageRange
- lesson
- status
- canonVersion
- productionVersion

### assets/{assetId}
- type
- name
- realmId
- episodeId
- source
- version
- integrityState

### governance/{governanceId}
- entityType
- entityId
- state
- canonVersion
- reviewer
- evidenceRefs
- createdAt
- updatedAt

## Authorization boundary

Firestore rules remain fail-closed until an independently reviewed authentication and authorization design is approved.

DATA MODEL != AUTHORIZATION.
