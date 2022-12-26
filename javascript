ellipse(200, 200, 200, 200);
ellipse (200, 200, 200, 200);
rect (110, 110, 50, 50, 1);

line (20, 200, 20, 20);

image (getImage("avatars/aqualine-sapling"), 24, 220, 200, 200);

image ( getImage("cute/CharacterBoy"),200,200,40,80);

point ( 200, 200);


    (Se abre en una ventana nueva)
    rect(x, y, w, h)
    ellipse(x, y, w, h)
    triangle(x1, y1, x2, y2, x3, y3)
    line(x1, y1, x2, y2)
    point(x, y)
    arc(x, y, w, h, start, stop)
    bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2)
    quad(x1, y1, x2, y2, x3, y3, x4, y4)
    image(image, x, y, width*, height*)

Colores

    background(r, g, b)
    Establece el color del fondo
    fill(r, g, b)
    Establece el color de relleno para las figuras
    noFill()
    Desactiva el relleno para las figuras
    stroke(r, g, b)
    Establece el color del contorno de las figuras
    strokeWeight(thickness)
    Cambia el grosor de las líneas y de los contornos
    noStroke()
    Desactiva los contornos de las figuras
    color(r, g, b)
    Almacena un color en una variable
    blendColor(c1, c2, MODE)
    Mezcla dos colores
    lerpColor(c1, c2, amount)
    Encuentra el color entre dos colores

Ve también: colorMode, red, green, blue, alpha, hue, saturation, brightness
Texto

    text(text, x, y)
    Escribe algo de texto
    textFont(font, size*)
    Cambia la fuente del texto
    textSize(size)
    Cambia el tamaño del texto

Ve también: textWidth, textAscent, textDescent, textLeading, textAlign
Transforma

    rotate(angle)
    Rota las figuras por un ángulo
    scale(amount)
    Escala las figuras en ambas dimensiones
    translate(x, y)
    Traslada las figuras por un desplazamiento

Ve también: pushMatrix/popMatrix, resetMatrix, printMatrix
Entorno

    width / heightEl tamaño del lienzo
    draw = function() { }
    Llamada repetidamente durante la ejecución de un programa
    playSound(sound)
    Reproduce uno de los sonidos permitidos

Ve también: Program.assertEqual, Program.restart, frameRate(fps), frameCount, loop, noLoop
Ratón

    mouseX, mouseY
    Coordenadas actuales del ratón
    pmouseX, pmouseY
    Coordenadas pasadas del ratón
    mouseButton
    Cuál botón está presionado
    mouseIsPressed
    Si el ratón está siendo presionado
    mouseClicked = function() { }
    Se llama cuando se hace clic con el ratón
    mousePressed = function() { }
    Se llama cuando se presiona el ratón
    mouseReleased = function() { }
    Se llama cuando se suelta el ratón
    mouseMoved = function() { }
    Se llama cuando se mueve el ratón
    mouseDragged = function() { }
    Se llama cuando se arrastra el ratón
    mouseOver = function() { }
    Se llama cuando se mueve el ratón sobre el lienzo
    mouseOut = function() { }
    Se llama cuando se mueve el ratón fuera del lienzo

Teclado

    key
    Número que representa cuál tecla está presionada
    keyCode
    Representa cuando se pulsa una tecla especial
    keyIsPressed
    Verdadero si una tecla está siendo presionada, falso si no
    keyPressed = function() { }
    Se llama cuando se presiona un tecla
    keyReleased = function() { }
    Se llama cuando se suelta una tecla
    keyTyped = function() { }
    Se llama cuando se aprieta una tecla

Matemáticas

    random(low, high)
    Genera un número aleatorio
    dist(x1, y1, x2, y2)
    Calcula la distancia entre dos puntos
    constrain(value, min, max)
    Restringe el valor entre min y máx
    min(num1, num2)
    Regresa el mínimo de dos números
    max(num1, num2)
    Regresa el máximo de dos números
    abs(num)
    Toma el valor absoluto de un número
    log(num)
    Toma el logaritmo de un número
    pow(num, exponent)
    Eleva un número a un exponente
    sq(num)
    Eleva un número al cuadrado
    sqrt(num)
    Saca la raíz cuadrada de un número
    round(num)
    Regresa el entero más cercano
    ceil(num)
    Regresa el entero más cercano de mayor o igual valor
    floor(num)
    Regresa el entero más cercano de menor o igual valor
    PVector(x, y)
    Un objeto que describe un vector de dos dimensiones

Ve también: mag, exp, map, norm, lerp, noise, noiseDetail, Random.nextGaussian
Trigonometría

    cos(degrees)
    Toma el coseno de un ángulo
    sin(degrees)
    Toma el seno de un ángulo
    tan(degrees)
    Toma la tangente de un ángulo

Ve también: acos, asin, atan, atan2, radians, degrees, angleMode
Fecha y hora

    day() / month() / year()Fecha actual
    hour() / minute() / second()Hora actual
    millis()
    Milisegundos transcurridos desde que inició el programa

Depurar

    debug(arg1, arg2, ...)
    Imprime a la consola de desarrollador de tu explorador
    println(data)
    Imprime una nueva línea a la consola del lienzo
    print(data)
    Imprime a la consola del lienzo

JavaScript

    var drawWinston = function() { }
    Define una nueva función
    var array = [0, 1, 2, 3, 4]
    Hace un arreglo de 5 números
    if (x < 20) { }
    Solo ejecuta el código si cierta condición es verdadera
    for (var i = 0; i < 8; i++) { }
    Repite el código un número determinado de veces
    while (x < 250) { }
    Solo ejecuta el código mientras cierta condición sea verdadera


    Mozilla Developer Network: Guía de JavaScript
    Tutorial JavaScript W3Schools

Basado en: la referencia de ProcessingJS. Bajo la licencia: Licencia CC BY-NC-SA 2.0.
https://es.khanacademy.org/computing/computer-programming/programming/drawing-basics/pt/making-drawings-with-code
