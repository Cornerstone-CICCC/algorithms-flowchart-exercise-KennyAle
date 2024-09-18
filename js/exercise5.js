let name = "Bar Sinso"
let marks = 6

if (marks >= 8) {
    console.log(`Student: ${name} / Grade: A`)
} else if (marks >= 6 && marks < 8) {
    console.log(`Student: ${name} / Grade: B`)
} else if (marks >= 4 && marks < 6) {
    console.log(`Student: ${name} / Grade: C`)
} else {
    console.log(`Student: ${name} / Grade: No Grade`)
}
