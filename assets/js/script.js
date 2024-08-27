const SHIFT_N_CHARACTERS = 3;
const newTextContainer = document.getElementById("alter_text");

function encrypt(){
    const TEXT = document.querySelector('#og_text').value;
    if (!TEXT) {
        return
    }
    const encryotedText = TEXT.split('').map(char => {
        const charCode = char.charCodeAt(0);
        return String.fromCharCode(charCode + SHIFT_N_CHARACTERS);
    }).join('');
    newTextContainer.innerHTML = encryotedText;
}
function decrypt(){
    const TEXT = document.querySelector('#og_text').value;
    if (!TEXT) {
        return
    }
    const decryptedText = TEXT.split('').map(char => {
        const charCode = char.charCodeAt(0);
        return String.fromCharCode(charCode - SHIFT_N_CHARACTERS);
    }).join('');
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