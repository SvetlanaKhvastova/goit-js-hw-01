// Write code under this line
const getUsersWithGender = (array, sex) =>
  array.filter(({ gender }) => gender === sex).map(({ name }) => name);

console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
