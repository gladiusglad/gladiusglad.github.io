export default function getId(heading: string): string {
  return heading.trim().replace(/[^\w\s-]/g, '').replace(/\s/g, '-').replace(/-+/g, '-').toLowerCase()
}