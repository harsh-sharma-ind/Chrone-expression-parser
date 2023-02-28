var s = "*/15 0 1,15 * 1-5 /usr/bin/find";

//var s = "5-15 0 */8 * 1,2,3 /usr/bin/find";


s = s.split(" ");

const croneParser = (text, mini, maxi) => {
  var ans = "";
  if (text.includes("*/")) {
    ///  let text = s[i];

    text = text.split("*/");
    let t = text[1];
    let s = 0;
    if (mini == 1) {
      s = t * 1;
    }
    for (let i = s; i < maxi; i += t * 1) {
      ans = ans + " " + i;
    }
    return ans;
  } else if (text.includes(",")) {
    // let text = s[i];

    text = text.split(",");

    for (let i = 0; i < text.length; i++) {
      if (text[i] * 1 < maxi) {
        ans = ans + " " + text[i];
      }
    }

    return ans;
  } else if (text.includes("*")) {
    for (let i = mini; i < maxi; i++) {
      ans = ans + " " + i;
    }
    return ans;
  } else if (text.includes("-")) {
    // let text = s[i];
    text = text.split("-");

    for (let i = text[0] * 1; i <= text[1] * 1 && i < maxi; i++) {
      ans = ans + " " + i;
    }

    return ans;
  } else {
    if (text * 1 < maxi) {
      ans = ans + " " + text;
    }

    return ans;
  }
};

var regExp = /[a-zA-Z]/g;

for (var i = 0; i < s.length; i++) {
  if (regExp.test(s[i])) {
    console.log("command :", s[i]);
  } else {
    switch (i) {
      case 0:
        var ans = "minute :";
        ans += croneParser(s[i], 0, 60);
        console.log(ans);

        break;

      case 1:
        var ans = "hour : ";
        ans += croneParser(s[i], 0, 24);
        console.log(ans);

        break;

      case 2:
        var ans = "day of month :";
        ans += croneParser(s[i], 1, 32);
        console.log(ans);

        break;

      case 3:
        var ans = "month :";
        ans += croneParser(s[i], 1, 13);
        console.log(ans);

        break;

      case 4:
        var ans = "day of week :";
        ans += croneParser(s[i], 1, 8);
        console.log(ans);

        break;

    //   default:
    //     var ans = "command : " + s[i];
    //     console.log(ans);
    }
  }
}
