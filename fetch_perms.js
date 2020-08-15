j = "perms = {"
for(var row of $0.children) {
    perm = row.children[0].textContent;
    j += `\n`;
    j += `    "${perm.endsWith(" *") ? perm.slice(0, -2) : perm}":`.padEnd(30);
    j += `${row.children[1].textContent},`;
}
j = j.slice(0, -1) + "\n}";
