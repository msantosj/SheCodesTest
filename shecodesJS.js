< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>SheCodes</title>
            <style>
                body {
                    font - family: Cerebri Sans, Helvetica, Arial, sans-serif;
      }

      section {
                    margin: 120px 0;
      }

      h1,
      h2 {
                    font - weight: 900;
        font-size: 34px;
        line-height: 48px;
        margin: 0;
      }

      h1 {
                    color: #272044;
        text-align: center;
      }

      h2 {
                    text - align: center;
        color: #885df1;
        padding: 0 0 24px;
      }

      p {
                    font - size: 18px;
        line-height: 28px;
        font-family: PT Mono, monospace;
        text-align: center;
      }

      button {
                    border - radius: 25px;
        margin: 0 auto;
        display: block;
        background-color: #fff;
        border: 1px solid #885df1;
        color: #885df1;
        font-size: 16px;
        line-height: 22px;
        padding: 16px 24px;
        text-decoration: none;
        transition: all 200ms ease;
      }

      button:hover {
                    color: #fff;
        background: #885df1;
      }
    </style>
        </head>

        <body>
            <section>
                <h1>
                    👩‍💻 She Codes is a Coding Workshop for Women
      </h1>
                <h2>
                    Access a new career in Technology
      </h2>
                <p>
                    She Codes teaches coding, design and management skills to women
        <br />
                    <strong>
                        Limited amount of spots!
        </strong>
                </p>
                <br />
                <button>
                    Apply Now
      </button>
            </section>
            <script>
                function applyNow() {
                    let firstName = prompt("What is your first name?");
        let age = prompt("How old are you?");
        let h1 = document.querySelector("h1");
        if (age >= "18") {
                    h1.innerHTML = "Hi " + firstName + "! Welcome to SheCodes";
        } else {
                    h1.innerHTML = "Sorry " + firstName + ", you can't join SheCodes.";
        }
      }
      let button = document.querySelector("button");
      button.addEventListener("click", applyNow);
    </script>
        </body>
    </html>
