const SHIFT_N_CHARACTERS = 3;
const newTextContainer = document.getElementById("alter_text");

function encrypt(){
    const TEXT = document.querySelector('#og_text').value;
    if (!TEXT) {
        return
    }
    const encryotedText = TEXT
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    newTextContainer.innerHTML = encryotedText;
}
function decrypt(){
    const TEXT = document.querySelector('#og_text').value;
    if (!TEXT) {
        return
    }
    const decryptedText = TEXT.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    newTextContainer.innerHTML = decryptedText;
}
async function copy(){
    try {
        const textToCopy = document.getElementById('alter_text');
        await navigator.clipboard.writeText(textToCopy.innerHTML);
        
        setTimeout(()=>{
            textToCopy.innerHTML = '';
        },500);
    } catch (error) {
        console.error(error);
    }
}