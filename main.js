 // Thay đổi nội dung búc thư ở đây
 var letterContent =" hmmmmmm..... xao quà thì chỉ như thế này thôi nên đừng chê nhá , khà khà....... Valentine chúc Phạm Thị Bảo Như luôn luôn hạnh phúc , chúc Bảo Như sẽ sớm tìm được 1 nửa tình yêu dành cho mình nhaaaa, nhưng mà nếu muốn người khác yêu thương mình trước tin mình phải biết yêu bản thân mình trước đã nhá , không ăn uống linh tinh , sinh hoạt khoa học , có như vậy thì mới xinh được hiểu chưa nhỉ :3.Chúc môt ngày valentine thật là hạnh phúc nhá......  "

 // Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
 durationWrite = 50 
 
 // Hiệu ứng gõ chữ
 
 function effectWrite () {
     var boxLetter = document.querySelector(".letterContent")
     letterContentSplited = letterContent.split("")
 
     letterContentSplited.forEach((val, index) => {
         setTimeout(() => {
             boxLetter.innerHTML += val    
         }, durationWrite* index)
     })
 }
 
 window.addEventListener("load", () => {
     setTimeout(() => {
         document.querySelector(".container").classList.add("active")
     }, 500)
 })
 
 var openBtn = document.querySelector(".openBtn")
 openBtn.addEventListener("click", () => {
     document.querySelector(".cardValentine").classList.add("active")
     document.querySelector(".container").classList.add("close")
 })
 
 var cardValentine = document.querySelector(".cardValentine")
 
 cardValentine.addEventListener("click", () => {
     cardValentine.classList.toggle("open")
 
     if(cardValentine.className.indexOf("open") != -1) {
         setTimeout(effectWrite, 500)
     } else {
         setTimeout(() => {
             document.querySelector(".letterContent").innerHTML = ""
         }, 1000)
     }
 })