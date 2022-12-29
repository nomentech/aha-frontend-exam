export default async function getTags() {
  const response = await fetch('https://avl-frontend-exam.herokuapp.com/api/tags')
  const result = await response.json()

  return result
}