export function useStringHelpers () {
    const toUpperCase = (text: string) => {
        return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
    }

    return {
        toUpperCase
    }
}