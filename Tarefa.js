import PromptSync from 'prompt-sync';
const prompt = PromptSync();


function tab(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} X ${num} = ${i * num}`);
    }
}


const numDigitado = Number(prompt('Número: '));
tab(numDigitado);