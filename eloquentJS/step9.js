/**
 * Object
 */

 var payload = {};

 var refData = payload;

 console.log(typeof payload); // object

 payload.front = "EAST";
 payload.back = "WEST";
 payload.left = "NORTH";
 payload.right = "SOUTH";
 
 console.log(payload);
 console.log(refData); // perfcet it works like java
 /**
  * delete the key from js object
  */
 delete payload.back; // delete object from data

 console.log();

 console.log(payload);
 console.log(refData);

/**
 * To get all key details from an object
 */

 console.log('\n' + Object.keys(payload));

 /**
  * 
  to update object beacus eits mutuable
  */

  Object.assign(payload, {'hello':'world'});

  console.log(payload);


