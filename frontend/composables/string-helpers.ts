export function useStringHelpers () {
    const capitalizeFirst = (text: string) => {
        return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
    }

    return {
        capitalizeFirst
    }
}