# 🤙 Callcentric NPM

This is an unofficial package. I honestly don't recommend you use it until Callcentric implements an official SMS API. I'll try to maintain this package. Let me know if anything stops working.

---

## 1. Preparation 
We must grab the cookie from our browser data. This is fairly easy if you know what you're doing.

* > Go to the [SMS page](https://my.callcentric.com/sms.php) and start a new conversation with yourself. Before you send the message, open **Dev Tools** and click **Network**.
* > Then, send the message and look for an event from `sms.ajax.php` in **Headers**. Click on this and find the `cookie` (it's below `content-type`) Copy it.

---

## 2. Installation

Next, we'll use this cookie in our code with the NPM package. You'll want your code to look something like this. We'll explain each part in the next step. 

```js
const call = require('callcentric-npm') //call the package

test() //call the function

async function test() {

console.log(await call('MSG', 'TO', 'FROM', 'COOKIE'))

}
```

---

## 3. Defining Variables
In the code above, **MSG** refers to the message content. 

**TO** is the phone number you want to send the message to (<u>18005551234</u>). 

**FROM** is the phone number you want to send the message from. This number must be linked to your Callcentric account (<u>18005551234</u>).

**COOKIE** is the cookie we copied earlier. It expires every few days, so make sure you reset it regularly.

--- 

When you call the function, your data is passing through our server proxy to reach Callcentric (this way your host IP doesn't get banned). No data is stored or collected in this process.

<br>
**Do not** try to build a chat bot or something similar with this API. Simply use this for text message notifications. Think of it as Twilio.

---
**If you don't receive a response from our server right away, don't worry. Your message will send within 2 minutes.** ⌚
