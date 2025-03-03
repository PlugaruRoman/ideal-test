export const getErrors = (errorObj: object) => {
  const [, value] =
    Object?.entries?.(errorObj)?.find(
      ([, val]) => Array.isArray(val) && typeof val[0] === 'string',
    ) || []

  return value ? value?.[0] : 'Something went wrong'
}
