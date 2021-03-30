export default function className(...classes: ([any, ...string[]]|string)[]) {
  return classes.filter(c => typeof c === 'string' ? c : (c ? c[0] : false))
      .map(c => {
        if (typeof c === 'string') {
          return c
        } else {
          c.shift()
          return c.join(' ')
        }
      })
      .join(' ') || null
}