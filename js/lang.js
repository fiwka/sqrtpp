class Language {
    name
    title
    language_select
    precision
    approximate_calculations
    precise_calculations
    radical
    enter
    result

    precision_error
    radical_error
}

function create_language_placeholder() {
    let language_placeholder = new Language()
    language_placeholder.name = "Language name"
    language_placeholder.title = "Page title"
    language_placeholder.language_select = "Select language"
    language_placeholder.precision = "Specify the accuracy of calculations"
    language_placeholder.approximate_calculations = "Approximate calculations"
    language_placeholder.precise_calculations = "Precise calculations"
    language_placeholder.radical = "Enter the radical expression"
    language_placeholder.enter = "Enter"
    language_placeholder.result = "Calculation result"
    language_placeholder.precision_error = "Precision error"
    language_placeholder.radical_error = "Radical error"
    return language_placeholder
}
function create_language_outputs() {
    let language_outputs = new Language()
    language_outputs.name = null
    language_outputs.title = [document.querySelector("title"), document.querySelector("#title")],
    language_outputs.language_select = document.getElementById("lang_select_label")
    language_outputs.precision = document.getElementById("precision_textbox_label")
    language_outputs.approximate_calculations = document.getElementById("approximation_radio_1_label")
    language_outputs.precise_calculations = document.getElementById("approximation_radio_2_label")
    language_outputs.radical = document.getElementById("radical_textbox_label")
    language_outputs.enter = document.getElementById("submit_button")
    language_outputs.result = document.getElementById("result_label")
    language_outputs.precision_error = null
    language_outputs.radical_error = null
    return language_outputs
}
function create_english_language() {
    let language = new Language()
    language.name = "English"
    language.title = "A software product that calculates the square root of a number"
    language.language_select = "Select language"
    language.precision = "Specify the accuracy of calculations"
    language.approximate_calculations = "Approximate calculations"
    language.precise_calculations = "Precise calculations"
    language.radical = "Enter the radical expression"
    language.enter = "Enter"
    language.result = "Calculation result"
    language.precision_error = "Error reading precision, maybe you entered something wrong. Please try again with a different value"
    language.radical_error = "Error reading the radical expression, perhaps you entered something incorrectly. Please try again with a different value"
    return language
}
function create_russian_language() {
    let language = new Language()
    language.name = "Русский"
    language.title = "Программный продукт, который вычисляет квадратный корень числа"
    language.language_select = "Выберите язык"
    language.precision = "Укажите точность вычислений"
    language.approximate_calculations = "Приближенные вычисления"
    language.precise_calculations = "Точные вычисления"
    language.radical = "Введите подкоренное выражение"
    language.enter = "Вычислить"
    language.result = "Результат вычислений"
    language.precision_error = "Ошибка при чтении точности, возможно вы что-то ввели не так. Пожалуйста, попробуйте ещё раз с другим значением"
    language.radical_error = "Ошибка при чтении подкоренного выражения, возможно вы что-то ввели не так. Пожалуйста, попробуйте ещё раз с другим значением"
    return language
}
function create_spanish_language() {
    let language = new Language()
    language.name = "Español"
    language.title = "Un producto de software que calcula la raíz cuadrada de un número"
    language.language_select = "Seleccione idioma"
    language.precision = "Especificar la precisión de los cálculos"
    language.approximate_calculations = "Cálculos aproximados"
    language.precise_calculations = "Cálculos precisos"
    language.radical = "Introduzca la expresión radical"
    language.enter = "Ingresar"
    language.result = "Resultado del cálculo"
    language.precision_error = "Hubo un error de precisión en la lectura, es posible que haya ingresado algo incorrectamente. Inténtelo de nuevo con un valor diferente"
    language.radical_error = "Hubo un error al leer la expresión radical, quizás ingresaste algo incorrecto. Inténtelo de nuevo con un valor diferente"
    return language
}
function create_chinese_language() {
    let language = new Language()
    language.name = "中国人"
    language.title = "计算数字平方根的软件产品"
    language.language_select = "选择语言"
    language.precision = "指定计算的精度"
    language.approximate_calculations = "近似计算"
    language.precise_calculations = "精确计算"
    language.radical = "输入根式表达式"
    language.enter = "进入"
    language.result = "计算结果"
    language.precision_error = "读取准确性有误，您可能输入了错误的内容。请使用不同的值重试"
    language.radical_error = "读取部首表达式时出错，可能您输入的内容有误。请使用不同的值重试"
    return language
}
const LANGUAGE_PLACEHOLDER = Object.freeze(create_language_placeholder())
const LANGUAGE_OUTPUTS = Object.freeze(create_language_outputs())
const RUSSIAN_LANGUAGE = Object.freeze(create_russian_language())
const ENGLISH_LANGUAGE = Object.freeze(create_english_language())
const SPANISH_LANGUAGE = Object.freeze(create_spanish_language())
const CHINESE_LANGUAGE = Object.freeze(create_chinese_language())
const DEFAULT_LANGUAGES = Object.freeze([
    ENGLISH_LANGUAGE,
    RUSSIAN_LANGUAGE,
    SPANISH_LANGUAGE,
    CHINESE_LANGUAGE
])
const OPTION_PREFIX = "language_select_"

let LANGUAGES = {}
let SELECTED_LANGUAGE;
LANGUAGES[RUSSIAN_LANGUAGE.name] = RUSSIAN_LANGUAGE

function init_language_system() {
    let languages_string = localStorage.getItem("languages");
    if (languages_string === null) {
        DEFAULT_LANGUAGES.forEach(v => LANGUAGES[v.name] = v)

        languages_string = JSON.stringify(LANGUAGES)
        localStorage.setItem("languages", languages_string)
    }

    LANGUAGES = JSON.parse(languages_string)
    Object.values(LANGUAGES).forEach((lang) => {create_language_option(lang)})

    let selected_language = localStorage.getItem("selected_language")
    if (selected_language === null) {
        selected_language = "Русский"
        localStorage.setItem("selected_language", selected_language)
    }
    SELECTED_LANGUAGE = LANGUAGES[selected_language]
    select_lang(SELECTED_LANGUAGE)
}

function create_language_option(language) {
    const select = document.getElementById("lang_select");
    let option = document.createElement("option");
    option.value = language.name;
    option.id = OPTION_PREFIX + language.name;
    option.textContent = language.name;
    select.appendChild(option);
}

function select_lang(language) {
    SELECTED_LANGUAGE = language
    localStorage.setItem("selected_language", SELECTED_LANGUAGE.name)
    const option = document.getElementById(OPTION_PREFIX + language.name)
    option.selected = true

    Object.entries(LANGUAGE_OUTPUTS).forEach(([key, value]) => {
        if (!value) return
        if (Array.isArray(value)) {
            value.forEach(v => {
                v.textContent = language[key]
            })
        } else {
            value.textContent = language[key]
        }
    })

    if (DEFAULT_LANGUAGES.map(v => v.name).includes(SELECTED_LANGUAGE.name)) {
        set_docs(DEFAULT_DOCS[SELECTED_LANGUAGE.name])
    } else set_docs(ENGLISH_DOCS)
}

init_language_system()
document.getElementById("lang_select").addEventListener("change", (e) => {
    select_lang(LANGUAGES[e.target.value])
})
const LANG_FORM = document.getElementById("lang_creation_form");
LANG_FORM.addEventListener("submit", (e) => {
    e.preventDefault()

    const new_lang = new Language()
    for (let i = 0; i < LANG_FORM.elements.length; i++) {
        const element = LANG_FORM.elements[i]
        new_lang[element.name] = element.value
    }

    if (new_lang.name in LANGUAGES) {
        alert(`Language with name "${new_lang.name}" already exists`)
    }

    LANGUAGES[new_lang.name] = new_lang
    const languages_string = JSON.stringify(LANGUAGES)
    localStorage.setItem("languages", languages_string)
    create_language_option(new_lang)
    select_lang(new_lang)
})

Object.keys(LANGUAGE_PLACEHOLDER).forEach(key => {
    const input = document.createElement("input");
    input.type = "text";
    input.required = true;
    input.placeholder = LANGUAGE_PLACEHOLDER[key];
    input.name = key;
    input.id = "lang_creation_" + key;
    input.classList.add("d-block", "lang-select-option", "form-control");

    LANG_FORM.appendChild(input);
})
