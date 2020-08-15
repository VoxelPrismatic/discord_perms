<!DOCTYPE html>
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"> 
        <style type="text/css">
            * {
                font-family: "Ubuntu";
                color: #aaaaaa;
            } textarea, pre {
                font-family: "Ubuntu Mono";
            } h1, h2, h3, h4, h5, h6 {
                color: #00ffff;
            } body {
                background-color: #112222;
            } a {
                color: #aaffff;
            } #val {
                width: 80%;
                border-radius: 5px;
                border: 2px solid #00ffff;
            } #boxes {
                margin-left: 2px;
            }
        </style>
    </head>
    <body>
        <h1>#] Discord permissions converter</h1>
        <h3>#] Checkboxes to integer</h3>
        <div id="boxes"></div>
        <div id="val">0</div>
        <script type="textjavascript">
            resp = await fetch("perms.json")
            text = await resp.text();
            eval(text);
            for(var key of Object.keys(perms)) {
                document.getElementById("boxes").innerHTML += 
                    `<input type="checkbox" id="${key}" name="${key}" value="${perms[key]}" onchange="recalc()"><label for="${key}"> ${key}</label><br>`;
            }
            function recalc() {
                var int = 0;
                if(document.getElementById("ADMINISTRATOR").checked) {
                    int = 8;
                } else {
                    for(var key of Object.keys(perms)) {
                        elem = document.getElementById(key);
                        if(elem.checked)
                            int |= perms[key];
                    }
                }
                document.getElementById("val").innerHTML = int + "";
            }
        </script>
    </body>
</html>
