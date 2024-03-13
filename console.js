//03/07/2024 Thursday Class Assignment



// Display the countries array as a table
const countries = [
    ['USA', 'Japan'],
    ['Brazil', 'France'],
    ['Africa', 'Australia']
  ]
  console.table(countries)

// Display the countries object as a table
  const user = {
    name: 'Angela',
    title: 'Java Coder',
    country: 'USA',
    city: 'Memphis',
    age: 40
  }

  const user = {
    name: 'Shelby',
    title: 'Lawyer',
    country: 'Japan',
    city: 'Tokoyo',
    age: 18
  }

  const user = {
    name: 'Jordan',
    title: 'Wedsite Designer',
    country: 'Brazil',
    city: 'Natal',
    age: 24
  }

  const user = {
    name: 'Edwin',
    title: 'Wildlife Biologist',
    country: 'Africa',
    city: 'Cairo',
    age: 28
  }
  console.table(user)

  // Use console.group() to group logs
  const names = ['Angela', 'Shelby', 'David', 'John']
  const countries = [
  ['USA', 'Japan'],
  ['Brazil', 'France'],
  ['Africa', 'Australia']
]


console.group('Names')
console.log(names)
console.groupEnd()

// Exercise2
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 is less than 20')

// Write a warning message using console.warn()
console.warn("This is a warning")

// Write an error message using console.error()
console.error("You have made an error")