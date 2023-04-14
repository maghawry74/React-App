export default function ValidationError({ field }) {
  if (!field) {
    return null
  }
  return <p className="text-red-600 text-base my-1">{field.message}</p>
}
