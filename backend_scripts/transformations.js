module.exports = {
    to_number: function to_number(parameter) {
        console.log("lol");
        var string = "";
        var number = "";
        parameter = parameter * 1000000000000000;
        parameter = Math.trunc(parameter);
        while (parameter != 0) {
            if (parameter > 9 && parameter < 100) {
                string = "." + string;
            }
            number = parameter - Math.trunc(parameter / 10) * 10;
            string = number + string;
            parameter = parameter / 10;
            parameter = Math.trunc(parameter);
        }
        return string;
    },
    to_url: function to_url(string_req) {
        var string = [];
        string = string_req;
        for (var i = 0; i < string.length; i++) {
            console.log(string[i]);
            console.log(string[i].charCodeAt(0));
            console.log("------");
            if (string[i].charCodeAt(0) === 32 || string[i].charCodeAt(0)>500 || string[i].charCodeAt(0) === 259|| string[i].charCodeAt(0) === 258||string[i].charCodeAt(0) === 194||string[i].charCodeAt(0) === 226||string[i].charCodeAt(0) === 206 ||string[i].charCodeAt(0) === 238||string[i].charCodeAt(0) === 536||string[i].charCodeAt(0) === 537||string[i].charCodeAt(0) === 350||string[i].charCodeAt(0) === 351||string[i].charCodeAt(0) === 538||string[i].charCodeAt(0) === 539) {
                string = string.substring(0, i) + '|' +string.substring(i+1 , string.length);
            }
        }
        console.log(string);
        return string;
    }
};
