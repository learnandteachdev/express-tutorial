# express-tutorial
Simple Express.js tutorial for Hawaii Technology Academy.
<hr>
Read the comments in app.js and complete the server-side code.
This should not be too difficult. If you need assistance, go to 
https://expressjs.com/en/guide/
..or let me know!

## Protecting Against XSS Attacks
Remember that XSS (cross-site scripting) attacks are simple injections 
that attackers perform and can change the functionality of your applet.
XSS vulnerabilties typically arise when you take input from the user and 
return it as output. This is a regular task in web development
and literally cannot be avoided, so how do we fix this?

Anytime you take input from the user, follow these
simple steps to ensure your applet does not fall victim to XSS:
* Sanitize the input (get rid of characters that might be found in scripts `< ; ( ) . >`)
* Use ASCII string parsing to escape all user input (look into `escaping in EJS`)
* Set the `X-XSS-Protection` HTTP header to `1`. This tells your client's web browser to be
  on the lookout for XSS attacks

## Protecting Against Clickjacking, Cache-Poisoning, Cookie stealing, and information gathering
Most of these security vulnerabilities can be patched by simply 
adjusting an HTTP header and using the right settings when setting up your response Cookie.

### Clickjacking
Clickjacking is one of the oldest hacks in the book. The attacker hides
an `href` or URL behind an HTML element on the webpage so that while the client
thinks theyre doing one thing, theyre doing another. 

Attackers often use XSS to inject these URL's. Sometimes a Clickjacking attack 
can be carried out by simply making a POST request to the site and posting 
HTML instead of plain text. This is another reason to ALWAYS SANITIZE USER INPUT.

### Cache-Poisoning
With this attack, the client-side cache is filled with false or malicious
executable scripts or metadata. An easy fix is to disable caching all together.

### Cookie stealing
This is exactly what it sounds like. The attacker will use XSS to steal 
the Cookie header from the web browsers of different clients utilizing your applet.
This can release sensitive information about your clients to the attacker.

### General information gathering
HTTP headers can give a lot away about your web server. When a programmer
who's been around the block a few times sets his eyes on your website, 
these seemingly unimportant pieces of information can give him front-door
access to your entire server.

## ***The Fix!***
As previously stated, most of these attacks can be prevented 
by simply changing HTTP header values and properly configuring Cookies.
```javascript
{
'X-XSS-Protection': 1, 
'X-Frame-Options': 'deny', 
'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0', 
'Pragma': 'no-cache',
'X-Powered-By': 'hidden',
'Server': 'hidden',
'Content-Type': 'hidden', 
'Content-Encoding': 'hidden', 
'Date': 'hidden', 
'Content-Length': 'hidden', 
'Connection': 'Keep-Alive',
'Vary': 'Accept-Encoding'
}
```
As a side note, once you configure Cookies, it shows up in the HTTP header, along with the secret key.
This is another reason to fully encrypt the Cookie id and key.


## Conclusion
Once you're webpage is complete and successfully loads the form data
into the database and renders the `/?entry=` to `index.ejs`, let me know
and I will perform some quick tests to measure the durability and
security of your applet.

