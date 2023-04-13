const textInput = document.querySelector("#area");
const encrypt = document.querySelector('#encriptar');
const decrypt = document.querySelector('#desencriptar');
const copy = document.querySelector('#copy');
const asideTitle = document.querySelector('#asideTitle');
const asideText = document.querySelector('#asideText');
const asideImg = document.querySelector('#aside-img');
const aside = document.querySelector('#aside')

const encryptionKey = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
};
const decryptionKey = {
    enter:'e',
    imes:'i',
    ai:'a',
    ober:'o',
    ufat:'u',
}

function asideModifier(){
    aside.style.display='flex';
    asideTitle.style.display = "none";
    asideText.style.textAlign='left'
    asideImg.style.display = "none";
    copy.style.display='block'
    aside.style.flexDirection='column'
    aside.style.justifyContent='space-between' 
}

encrypt.addEventListener('click', ()=>{
    if (textInput.value) {
        console.log(textInput.value)
        let input=textInput.value
        textInput.value=''
        asideModifier()
        asideText.innerText = encrypter(input); 
    }
})

decrypt.addEventListener('click', ()=>{
    if (textInput.value) {
        console.log(textInput.value)
        let input=textInput.value
        textInput.value=''
        asideModifier()
        asideText.innerText = decrypter(input); 
    }
})

copy.addEventListener('click', ()=>{
    copyToClipboard()
})

function encrypter(text){
    let newText='';
    for (letter of text){
        switch (letter) {
            case 'e':
                newText+=encryptionKey.e;
                break;
            case 'i':
                newText+=encryptionKey.i;
                break;
            case 'a':
                newText+=encryptionKey.a;
                break;
            case 'o':
                newText+=encryptionKey.o;
                break;
            case 'u':
                newText+=encryptionKey.u;
                break;
            default:
                newText+=letter;
                break;
        }
}
return newText;
}

function decrypter(text) {
    let newText=text;
        if (newText.includes('enter')) {
            newText = newText.replace(/enter/g, decryptionKey.enter)
        }
        if (newText.includes('imes')) {
            newText = newText.replace(/imes/g, decryptionKey.imes)
        }
        if (newText.includes('ai')) {
            newText = newText.replace(/ai/g, decryptionKey.ai)
        }
        if (newText.includes('ober')) {
            newText = newText.replace(/ober/g, decryptionKey.ober)
        }
        if (newText.includes('ufat')) {
            newText = newText.replace(/ufat/g, decryptionKey.ufat)
        };
    return newText;
}

function copyToClipboard() {
    const textToCopy = asideText.innerText;
    navigator.clipboard.writeText(textToCopy)
    .then(function() {
        console.log("Text copied to clipboard");
      })
      .catch(function(error) {
        console.error("Could not copy text: ", error);
      });
  }