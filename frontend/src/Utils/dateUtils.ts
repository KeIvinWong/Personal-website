export function formatDate(date: Date | null): string {
    return date ? date.toLocaleDateString() : "No date selected";
}