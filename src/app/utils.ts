export default class Utils {
    static formatDate(date = new Date()): string {
        const hours = date.getHours();
        date.setHours(hours + 8);
        const iso_date = date.toISOString();

        return iso_date.slice(0, 10);
    }
}
