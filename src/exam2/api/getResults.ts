export default async function getResults({page, pageSize, keyword}: any) {
  const response = await fetch(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
  const result = await response.json()

  return result.data
}