export const datetimeConverter = (datetime) => {
    const date = new Date(datetime)
    const now = new Date()
    const diff = now - date
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (seconds < 60) {
        return `${seconds} seconds ago`
    } else if (minutes < 60) {
        return `${minutes} minutes ago`
    } else if (hours < 24) {
        return `${hours} hours ago`
    } else {
        return `${days} days ago`
    }
}