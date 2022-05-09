let submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2019-04-22", passed: true },
];
   
  function addSubmission (array, newName, newScore, newDate) {
    let newSubmission = {
      name: newName,
      score: newScore,
      date: newDate,
      passed: true,
    };
  if (newSubmission.score >= 60){
    newSubmission.passed = true;
  } else {
    newSubmission.passed = false;
  }
    array.push(newSubmission);
  }
  // addSubmission(submissions, “David”, 85, “2022-02-23");
  // addSubmission(submissions, “kyle”, 55, “2022-02-23");

    const deleteSubmissionByIndex = (array, index) => {
    array.splice (index, 1);
    }

    deleteSubmissionByIndex (submissions, 0);
    console.log (submissions);


  const deletesubmissionByName = (array, name) 
  => {
    let index = array.findIndex (student => 
    student.name === name
    )
    array.splice(index, 1);
   
  }

  // deleteSubmissionByName (submissions, "Jack");
  // console.log (submissions);


const editsubmission = (array, index, score) 
=> {array[index].score = score
    if (array[index].score >= 60){
      array[index].passed = true;
    } else {
      array[index].passed = false;
    }

editSubmission (submissions, 2, 85)
console.log(submissions)


const findSubmissionByName = (array, name) => 
  array.find (student => student.name ===name)




// findSubmissionByName (submissions, "Joe")

const findLowestScore = () => {
  let lowestScore = Infinity;
  let lowestScoreStudent;
  array.forEach(jakob => {

    if (jakob.score < lowestScore){
      lowestScore = jakob.score;
      lowestscorestudent = jakob;
    }
  })

  return lowestScoreStudent;

}

  console.log(findLowestScore(submissions));
   

  const findAverageScore = () => {
    let total = 0;
      for (let student of array){
        console.log(student.score)
        total += student.score;
     }

     return total / array.length;

  }

  console.log (findAverageScore(submissions))

  const filterPassing = () => array.filter
  (student => student.score >= 60)

  console.log (filterPassing(submissions))

  function filter90AndAbove (array){
    let passingGrade = array.filter(function
      (people){
        return people.score >= 909
      })
      return passingGrade
  }

  console.log(filter90AndAbove(submissions))