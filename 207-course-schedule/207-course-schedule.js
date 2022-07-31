/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = {};
    const visited = new Set();
    const visiting = new Set();
    
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    
    for (const prereq of prerequisites) {
        graph[prereq[0]].push(prereq[1].toString());
    }
    
    for (const node in graph) {
        if (graph[node].length < 1) visited.add(node);
        if (isCycle(node)) return false;
    }
    
    function isCycle(node) {
        if (visited.has(node)) return false;
        if (visiting.has(node)) return true;
        visiting.add(node);
        
        for (const neighbor of graph[node]) {
            if (isCycle(neighbor)) return true;
        }
        visited.add(node);
        return false;
    }
    
    return true;
};