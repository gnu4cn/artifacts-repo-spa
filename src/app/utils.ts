export default class Utils {
    static formatDate(date = new Date()): string {
        const iso_date = date.toISOString();

        return iso_date.slice(0, 10);
    }
}
