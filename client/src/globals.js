export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `&{window.locatioin.origin}/api`
    : 'http://localhost:3001/api'
