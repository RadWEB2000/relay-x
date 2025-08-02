export default function downgradeToHttp(url: string): string {
    return url.replace(/^https:\/\//, 'http://')
}