// Simple class name combiner
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
