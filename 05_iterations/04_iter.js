const coding = ["js", "cpp", "java", "python"]

// coding.forEach((item) => {
//     console.log(item);
// })

//can we store what we are getting through for each loop

const values = coding.forEach((item) => {
    //console.log(item);
    
})
//give undefined value
//console.log(values);


/* for each do not return */

const num = [1, 2, 3, 4, 5, 6, 7, 8,9, 10]
//filter function return out value so we need to store it
const newNum = num.filter((item) => item < 5)

//it will return array of values that are smaller than 5
//console.log(newNum);

const myNum = num.filter((num) => {
    //have to return 
    return num > 4
})

//console.log(myNum);

//when u write any thing in scope u have to return otherwise we will get nothing

//in arrow function explit and implicit return ka concept h



const newNums = []; 

num.forEach((num) => {
    if(num > 4) {
        newNums.push(num);
    }
})
//console.log(newNums);

// to get same thing by for each loop u have to intialise a array and store it
//whereas filter will return out array  

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userBooks = books.filter((bk) => {
    return bk.genre === 'History'
  })


  userBooks = books.filter((bk) => {
    return bk.publish >= 1985 && bk.genre === 'history'
  })
  console.log(userBooks);
  

