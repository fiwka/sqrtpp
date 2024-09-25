class Docs {
    main_header
    headers
    paragraphs

    constructor(main_header, headers, paragraphs) {
        this.main_header = main_header
        this.headers = headers
        this.paragraphs = paragraphs
    }
}

const ENGLISH_DOCS = Object.freeze(new Docs(
    "User's Guide for the Calculator Program",
    [
        "Calculator capabilities",
        "Interface and work with the program",
        "FAQ",
        "Contact information"
    ],
    [
        [
            "The calculator was developed by a group of four students from the National Research University Higher School of Economics – Perm by order of Plaksin M.A. This program is capable of calculating the square root of arbitrary real negative or positive numbers.",
            "The program works on any device with an Internet connection."
        ],
        [
            "To start working, you need to select the language in which the calculator user wants to work. The language selection is made at the top of the program. The following languages ​​are currently available: Russian, English, Spanish and Chinese. If the program does not provide the language that the user needs, then it is possible to add it yourself in the lower left part of the interface according to the template. It is worth noting that the user manual cannot change its language to another one not provided by the program.",
            "The calculator also provides the ability to select the accuracy of the resulting value. If the user selects the “accurate calculations” function, the program, if possible, will give an answer with the number taken out from under the root. The number written in the calculation accuracy window indicates the number of digits following the decimal point in the result. This function is located immediately after the language selection.",
            "The next window is responsible for entering the number, the square root of which the user wants to get. Numbers are entered using the keyboard.",
            "The bottom line displays the calculation result."
        ],
        [
            "Q) I want to get the value of an expression from complex functions, FSUs, literal expressions or other non-numeric data. How can I do this?",
            "A) Unfortunately, our program is not designed for entering complex functions or non-numeric data.",
            "Q) Can I use the program without an internet connection?",
            "A) Yes, to do this, just download it from our official page on GitHub."
        ],
        [
            "The calculator is developed and supported by a team of four students from HSE Perm. All program updates are posted on the official GitHub page – <a href='https://github.com/fiwka/sqrtpp'>https://github.com/fiwka/sqrtpp/</a>",
            "If you encounter any difficulties while working with the program, you can write to us via email, telegram or VK.",
            "Email – asrepin@edu.hse.ru\n" +
            "Phone – +79193677953\n" +
            "Telegram – @milerook"
        ]
    ]
))

const RUSSIAN_DOCS = Object.freeze(new Docs(
    "Руководство пользователя программы \"Калькулятор\"",
    [
        "Возможности калькулятора",
        "Интерфейс и работа с программой",
        "Частые вопросы (FAQ)",
        "Контактная информация"
    ],
    [
        [
        "Калькулятор разработан группой из четырёх студентов НИУ ВШЭ – Пермь по заказу Плаксина М.А. Данная программа способна считать квадратный корень из произвольных вещественных отрицательных или положительных чисел.",
        "Программа работает на любых устройствах с подключением к интернету."
        ],
        [
            "Для начала работы необходимо выбрать язык, на котором хочет работать пользователь калькулятора. Выбор языка осуществляется в верхней части программы. Из языков на данный момент доступны: Русский, Английский, Испанский и Китайский. В случае, если программа не предусматривает язык, который нужен пользователю, то существует возможность добавить его самостоятельно в левой нижней части интерфейса в соответствии с шаблоном. Стоит отметить, что руководство пользователя не может менять свой язык на другой, не предусмотренный программой.",
            "Также калькулятор предусматривает возможность выбора точности получаемого значения. В случае выбора пользователем функции “точные вычисления” программа, если возможно, будет выдавать ответ с выносом числа из под корня. Число, записанное в окне точности вычислений, обозначает количество цифр идущих после запятой у результата. Данная функция располагается сразу же после выбора языка.",
            "Следующее окно отвечает за ввод числа, квадратный корень из которого хочет получить пользователь. Ввод чисел осуществляется с клавиатуры.",
            "В нижнюю строку выводится результат вычислений."
        ],
        [
            "В) Я хочу получить значение выражения из сложных функций, ФСУ, буквенных выражений или других нечисловых данных. Как мне это сделать?",
            "О) К сожалению, наша программа не рассчитана на ввод сложных функций или нечисловых данных.",
            "В) Могу ли я использовать программу без подключения к интернету?",
            "О) Да, для этого достаточно скачать её с нашей официальной страницы на GitHub."
        ],
        [
            "Калькулятор разрабатывается и поддерживается командой из четырех студентов НИУ ВШЭ – Пермь. Все обновления программы выходят на официальной странице GitHub – <a href='https://github.com/fiwka/sqrtpp'>https://github.com/fiwka/sqrtpp/</a>",
            "Если во время работы с программой у вас появились различные трудности, то можете написать нам по email, telegram или VK.",
            "Email – asrepin@edu.hse.ru\n" +
            "Телефон – +79193677953\n" +
            "Telegram – @milerook "
        ]
    ]
))

const SPANISH_DOCS = Object.freeze(new Docs(
    "Guía del usuario del programa Calculadora",
    [
        "Funciones de la calculadora",
        "Interfaz y trabajo con el programa.",
        "Preguntas frecuentes",
        "Información del contacto"
    ],
    [
        [
            "La calculadora fue desarrollada por un grupo de cuatro estudiantes de la Escuela Superior de Economía de la Universidad Nacional de Investigación de Perm, por encargo de M.A. Plaksin. Este programa es capaz de calcular la raíz cuadrada de números positivos o negativos reales arbitrarios.",
            "El programa funciona en cualquier dispositivo con conexión a Internet."
        ],
        [
            "Para comenzar, debe seleccionar el idioma en el que el usuario de la calculadora desea trabajar. La selección del idioma se realiza en la parte superior del programa. Los idiomas disponibles actualmente son: ruso, inglés, español y chino. Si el programa no proporciona el idioma que el usuario necesita, entonces es posible agregarlo usted mismo en la parte inferior izquierda de la interfaz de acuerdo con la plantilla. Vale la pena señalar que el manual de usuario no puede cambiar su idioma a otro idioma no proporcionado por el programa.",
            "La calculadora también ofrece la posibilidad de seleccionar la precisión del valor resultante. Si el usuario selecciona la función \"cálculos exactos\", el programa, si es posible, producirá una respuesta con el número extraído de debajo de la raíz. El número escrito en la ventana de precisión del cálculo indica el número de dígitos que siguen al punto decimal del resultado. Esta función se ubica inmediatamente después de seleccionar el idioma.",
            "La siguiente ventana se encarga de ingresar el número cuya raíz cuadrada el usuario desea obtener. Los números se ingresan usando el teclado.",
            "La línea inferior muestra el resultado de los cálculos."
        ],
        [
            "C) Quiero obtener el valor de una expresión a partir de funciones complejas, FSU, expresiones literales u otros datos no numéricos. ¿Cómo puedo hacer esto?",
            "R) Desafortunadamente, nuestro programa no está diseñado para ingresar funciones complejas o datos no numéricos.",
            "C) ¿Puedo utilizar el programa sin conexión a Internet?",
            "R) Sí, para hacer esto, simplemente descárgalo de nuestra página oficial en GitHub."
        ],
        [
            "La calculadora es desarrollada y mantenida por un equipo de cuatro estudiantes de la Escuela Superior de Economía de la Universidad Nacional de Investigación de Perm. Todas las actualizaciones del programa se publican en la página oficial de GitHub: <a href='https://github.com/fiwka/sqrtpp'>https://github.com/fiwka/sqrtpp/</a>",
            "Si encuentra varias dificultades mientras trabaja con el programa, puede escribirnos por correo electrónico, Telegram o VK.",
            "Correo electrónico: asrepin@edu.hse.ru Teléfono: +79193677953 Telegrama: @milerook"
        ]
    ]
))

const CHINESE_DOCS = Object.freeze(new Docs(
    "计算器程序的用户指南",
    [
        "计算器功能",
        "界面和使用程序",
        "常问问题",
        "联系信息"
    ],
    [
        [
            "该计算器是由彼尔姆国立研究大学高等经济学院的四名学生受 M.A. Plaksin 委托开发的。该程序能够计算任意实数负数或正数的平方根。",
            "该程序适用于任何具有互联网连接的设备。"
        ],
        [
            "首先，您需要选择计算器用户想要使用的工作语言。语言选择在程序顶部进行。目前可用的语言有：俄语、英语、西班牙语和中文。如果程序没有提供用户需要的语言，那么可以按照模板在界面的左下部分自行添加。值得注意的是，用户手册无法将其语言更改为程序未提供的其他语言。",
            "该计算器还提供选择结果值精度的功能。如果用户选择“精确计算”功能，如果可能的话，程序将使用从根下取出的数字来生成答案。计算精度窗口中写入的数字表示结果小数点后的位数。选择语言后即可立即找到此功能。",
            "下一个窗口负责输入用户想要获得其平方根的数字。使用键盘输入数字。",
            "底行显示计算结果。"
        ],
        [
            "C) 我想从复杂函数、FSU、文字表达式或其他非数字数据中获取表达式的值。我该怎么做？",
            "A）不幸的是，我们的程序不是为输入复杂函数或非数字数据而设计的。",
            "C）我可以在没有互联网连接的情况下使用该程序吗？",
            "A) 是的，为此，只需从我们的 GitHub 官方页面下载即可。"
        ],
        [
            "该计算器由来自彼尔姆国立研究大学高等经济学院的四名学生组成的团队开发和维护。所有程序更新均在官方 GitHub 页面上发布 - <a href='https://github.com/fiwka/sqrtpp'>https://github.com/fiwka/sqrtpp/</a>",
            "如果您在使用该程序时遇到各种困难，您可以通过电子邮件、电报或 VK 给我们写信。",
            "电子邮件 – asrepin@edu.hse.ru 电话 – +79193677953 电报 – @milerook"
        ]
    ]
))

const DEFAULT_DOCS = Object.freeze({
    "English": ENGLISH_DOCS,
    "Русский": RUSSIAN_DOCS,
    "Español": SPANISH_DOCS,
    "中国人": CHINESE_DOCS
})

function set_docs(doc) {
    const docs_root = document.querySelector(".docs")
    docs_root.innerHTML = ``
    const h1 = document.createElement("h1")
    h1.textContent = doc.main_header
    docs_root.appendChild(h1)

    for (let i = 0; i < doc.headers.length; i++) {
        const header = document.createElement("h2")
        header.textContent = doc.headers[i]
        docs_root.appendChild(header)

        for (let j = 0; j < doc.paragraphs[i].length; j++) {
            const p = document.createElement("p")
            p.innerHTML = doc.paragraphs[i][j]

            docs_root.appendChild(p)
        }
    }
}