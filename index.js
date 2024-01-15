function paleta(){
    let h = Number(document.getElementById("kolor").value)
    let s = 100
    let zmienna = document.getElementsByClassName("tab")
    for (let index = 0; index < zmienna.length; index++) {
        zmienna[index].style.backgroundColor = `hsl(${h},${s}%,50%)`
        s-=20        
    }
}