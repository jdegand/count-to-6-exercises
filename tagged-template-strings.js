
function html(name, ...comment) {
    var result = name[0];
    for (var i = 0; i < comment.length; i++) {
        result += regex(comment[i]) + name[i + 1];
    }

    return result;
}
/*
function html(name, ...words) {
   let str = name; //first part is not right-- split by colon?
   words.map((word) => {
       regex(word);
   });
   return str + words;
}
*/
function regex(str) {
    return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}

const sentence = html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`;
console.log(sentence)

// previous.argv[2] can't be escaped
