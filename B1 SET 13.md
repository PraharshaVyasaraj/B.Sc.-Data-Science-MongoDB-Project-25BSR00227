
***

**B.Sc. Data Science MongoDB Project | K Praharsha | 25BSR00227**

**File 2: Advanced Logic and Transactions (B1 SET 13)**

***

**Problem 1: IoT Device and Firmware Management System**

1. Design a schema for an iot_devices collection with an embedded firmware_config document.
2. Create a document validation rule to ensure the firmware_version field matches a version pattern.
3. Start a MongoDB transaction session to update the firmware version and configuration timestamp.
4. Commit the transaction if both updates succeed.
5. Abort the transaction if the firmware update fails.

**Solution**

```javascript
db.createCollection("iot_devices", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        firmware_config: {
          bsonType: "object",
          properties: {
            firmware_version: {
              bsonType: "string",
              pattern: "^v\\d+\\.\\d+\\.\\d+$"
            }
          }
        }
      }
    }
  }
})

const session1 = db.getMongo().startSession()
session1.startTransaction()
try {
  const coll = session1.getDatabase("mongoProjectDB").getCollection("iot_devices")
  coll.updateOne(
    { device_id: 101 },
    { $set: { "firmware_config.firmware_version": "v1.0.1", "firmware_config.timestamp": new Date() } }
  )
  session1.commitTransaction()
} catch (e) {
  session1.abortTransaction()
} finally {
  session1.endSession()
}
```

***

**Problem 2: University Hostel Allocation and Room Assignment System**

1. Design a schema representing hostels with embedded rooms and student allocation arrays.
2. Create a document validation rule to restrict room occupancy to a maximum value.
3. Start a transaction to assign a new student to a room and increment the occupancy count using $inc.
4. Commit the transaction after successful assignment.
5. Abort the transaction if the occupancy limit is exceeded.

**Solution**

```javascript
db.createCollection("hostels", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        "rooms.occupancy": { bsonType: "int", maximum: 4 }
      }
    }
  }
})

const session2 = db.getMongo().startSession()
session2.startTransaction()
try {
  const coll = session2.getDatabase("mongoProjectDB").getCollection("hostels")
  coll.updateOne(
    { "rooms.room_id": 202 },
    { 
      $push: { "rooms.$.students": "S123" },
      $inc: { "rooms.$.occupancy": 1 } 
    }
  )
  session2.commitTransaction()
} catch (e) {
  session2.abortTransaction()
} finally {
  session2.endSession()
}
```

***

**Problem 3: Health Insurance Claim Processing System**

1. Design collections for policyholders, hospitals, and claims using references.
2. Create a validation rule to ensure claim_amount is less than or equal to policy_coverage.
3. Start a transaction to update claim status and deduct the approved amount from coverage balance.
4. Insert a transaction record into a claim_transactions collection within the same session.
5. Commit or abort the transaction based on validation results.

**Solution**

```javascript
db.createCollection("claims", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        claim_amount: { bsonType: "double" }
      }
    }
  }
})

const session3 = db.getMongo().startSession()
session3.startTransaction()
try {
  const db = session3.getDatabase("mongoProjectDB")
  db.getCollection("claims").updateOne({ claim_id: 1 }, { $set: { status: "Approved" } })
  db.getCollection("policyholders").updateOne({ p_id: 1 }, { $inc: { balance: -5000 } })
  db.getCollection("claim_transactions").insertOne({ p_id: 1, amount: 5000, date: new Date() })
  session3.commitTransaction()
} catch (e) {
  session3.abortTransaction()
} finally {
  session3.endSession()
}
```

***

**Problem 4: Ride-Sharing Platform Management System**

1. Design collections for drivers, passengers, and trips using references.
2. Create a document validation rule to ensure fare_amount is greater than zero.
3. Start a transaction to update trip status to "Completed" and increment driver earnings using $inc.
4. Update the passenger ride history within the same transaction.
5. Commit or abort the transaction based on successful updates.

**Solution**

```javascript
db.createCollection("trips", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        fare_amount: { bsonType: "double", minimum: 0 }
      }
    }
  }
})

const session4 = db.getMongo().startSession()
session4.startTransaction()
try {
  const db = session4.getDatabase("mongoProjectDB")
  db.getCollection("trips").updateOne({ t_id: 7 }, { $set: { status: "Completed" } })
  db.getCollection("drivers").updateOne({ d_id: 1 }, { $inc: { earnings: 300 } })
  db.getCollection("passengers").updateOne({ p_id: 1 }, { $push: { history: 7 } })
  session4.commitTransaction()
} catch (e) {
  session4.abortTransaction()
} finally {
  session4.endSession()
}
```

***

**Problem 5: Supply Chain Vendor and Product Contract System**

1. Design collections for vendors, products, and contracts using referencing.
2. Create a validation rule to ensure contract_value is greater than zero and contract_end_date is a future date.
3. Start a transaction to insert a new contract document into the contracts collection.
4. Update the vendor status to "Active" within the same transaction.
5. Commit or abort the transaction based on validation conditions.

**Solution**

```javascript
db.createCollection("contracts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        contract_value: { bsonType: "double", minimum: 1 },
        contract_end_date: { bsonType: "date" }
      }
    }
  }
})

const session5 = db.getMongo().startSession()
session5.startTransaction()
try {
  const db = session5.getDatabase("mongoProjectDB")
  db.getCollection("contracts").insertOne({ v_id: 9, p_id: 1, value: 1000, end_date: new Date("2026-01-01") })
  db.getCollection("vendors").updateOne({ v_id: 9 }, { $set: { status: "Active" } })
  session5.commitTransaction()
} catch (e) {
  session5.abortTransaction()
} finally {
  session5.endSession()
}
```
