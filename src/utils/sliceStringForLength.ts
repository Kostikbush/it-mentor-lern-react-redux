export function sliceStringForLength(string: string, maxLegth: number): string {
    let strMaxLegth = string.slice(0, maxLegth + 1);
    let strArr = strMaxLegth.split(' ');
    return strArr.slice(0, strArr.length - 1).join(' ');
}
