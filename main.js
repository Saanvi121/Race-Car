canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
car_width = 150; car_height = 90; 
background_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskBxlG8fOGMpLxKSxuATRo99__4oLNYRsYg&usqp=CAU"; 
car_image = "https://w7.pngwing.com/pngs/676/74/png-transparent-car-laferrari-auto-racing-truck-top-view-purple-violet-cartoon.png"; 
car_x = 10; 
car_y = 10;
function add()
{
    bg=new Image();
    bg.onload=uploadBg
    bg.src=background_image
    car=new Image();
    car.onload=uploadCar
    car.src=car_image
}

function uploadBg()
{
    ctx.drawImage(bg,0,0,canvas.width, canvas.height)
}
function uploadCar()
{
    ctx.drawImage(car,car_x, car_y, car_width, car_height)
}