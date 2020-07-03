function handleUpdate(e){
    let value = e.target.value;
    let name = e.target.name;
    let suffix = e.target.dataset.suffix || "";
    if(name=='opacity'){
        value *= 0.01;
    }
    document.documentElement.style.setProperty(`--${name}`,` ${value}${suffix}`);
}


const inputs = document.querySelectorAll('input')

inputs.forEach(input => addEventListener('change',handleUpdate))
inputs.forEach(input => addEventListener('mousemove',handleUpdate))