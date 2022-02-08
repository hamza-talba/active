import { Pipe } from "@angular/core";

@Pipe({
  name: "phone"
})
export class PhonePipe {
  transform(phoneNumber) {
    phoneNumber = phoneNumber.charAt(0) != 0 ? "0" + phoneNumber : "" + phoneNumber;

    let newStr = "";
    let i = 0;

    for (; i < Math.floor(phoneNumber.length / 3) - 1; i++) {
      newStr = newStr + phoneNumber.substr(i * 3, 3) + "-";
    }

    return newStr + phoneNumber.substr(i * 3);
  }
}
