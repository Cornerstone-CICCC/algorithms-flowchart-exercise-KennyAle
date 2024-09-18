// Write an algorithm and draw a flowchart to check the three number inputs whether a triangle is possible or not.
let a = 1
let b = 2
let c = 3

if (a + b > c && a + c > b && b + c > a) {
    console.log("Triangle Possible. I like triangles cause they remind me pizza slices")
} else {
    console.log("Triangle Impossible. That's not a triangle right there")
}