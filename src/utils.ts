export const formateData = (date: string) => {
    const newDate = new Date(date);
    const formatedDate = [
        '0' + newDate.getDate(),
        '0' + (newDate.getMonth() + 1),
        '' + newDate.getFullYear(),
        '0' + newDate.getHours(),
        '0' + newDate.getMinutes()
      ].map(component => component.slice(-2));

      return formatedDate.slice(0, 3).join('.') + ' ' + formatedDate.slice(3).join(':');
    
}