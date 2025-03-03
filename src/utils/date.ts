export const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

export const getDateFourYearsAgo = () => {
  const today = new Date()
  today.setFullYear(today.getFullYear() - 4)
  return today
}
