document.getElementById('advice-update').addEventListener('click',()=>{
    selectAdvice()
})
  async function createRandomAdvice(){
    const url =	'https://api.adviceslip.com/advice'
    const response = await fetch(url)
    return await response.json()
 }
 async function selectAdvice(){
    const advice =await  createRandomAdvice()
    const adviceNumber=advice.slip.id
    const adviceDescription=advice.slip.advice
    document.getElementById('number-id').innerHTML =adviceNumber
    document.getElementById('advice-description').innerHTML =adviceDescription


 }
 
 