let pattern = /([\w+\d\.]+)\@(\w+)\.(\w+)/

let fname = "adeolafab11gmail.com"

let input = document.querySelector("input")
// console.log(form.target)

let patternCheck = fname.match(pattern) && true

console.log(patternCheck)
console.log(fname.match(pattern))

// samuel.chima

const submitForm = (e) =>{
    e.preventDefault()
   console.log(input.value)
   if (input.value.match(pattern)) {
        window.location.href="confirm.html"
        input.value =" "
   } else {
        input.style.border = "5px solid red"
   }
    
}