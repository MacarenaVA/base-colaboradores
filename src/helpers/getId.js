export const getId = () => {
  const random = Math.random().toString(36).slice(0, 2)
  const date = Date.now().toString(36)
  return random + date
}
