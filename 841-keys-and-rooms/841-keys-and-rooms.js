/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const uniqueKeys = new Set([0]);
    const keysLeft = [0];
    
    while (keysLeft.length) {
        let currentKey = keysLeft.pop();
        rooms[currentKey].forEach(key => {
           if (!uniqueKeys.has(key)) {
               uniqueKeys.add(key);
               keysLeft.push(key);
           }
        });
    }
    return uniqueKeys.size === rooms.length;
};