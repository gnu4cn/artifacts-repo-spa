export default class Utils {
    static formatDate(date = new Date()): string {
        const hours = date.getHours();
        date.setHours(hours + 8);
        const iso_date = date.toISOString();

        return iso_date.slice(0, 10);
    }


    static getItemsCurrentPage<Type>(
        index: number,
        items: Type[]
    ): Type[] {
        if (items.length <= 5)
            return items;

        if (index <= items.length/5)
                return items.slice(index*5, (index+1)*5);
        else
            return items.slice(index*5,);
    }
}
