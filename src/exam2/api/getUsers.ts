export default async function getUsers() {
  let response = await fetch('https://avl-frontend-exam.herokuapp.com/api/users/all')
  let result = await response.json()
  const followers = result.data

  response = await fetch('https://avl-frontend-exam.herokuapp.com/api/users/friends')
  result = await response.json()
  const following = result.data

  return { followers, following }
}