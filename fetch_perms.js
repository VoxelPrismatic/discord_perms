j = "perms = {"
for(var row of document.querySelector("h6#permissions-bitwise-permission-flags + table > tbody").children) {
    perm = row.children[0].textContent;
    j += `\n`;
    j += `    "${perm.endsWith(" *") ? perm.slice(0, -2) : perm}":`.padEnd(35);
    j += `${row.children[1].textContent.split(' ')[0]}n,`;
}
j = j.slice(0, -1) + "\n}";
console.log(j)
